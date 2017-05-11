var express = require('express');
var app = express();
var router = express.Router();
var trucksRouter = require('./config/routes.js');
var bodyParser = require('body-parser');


/// For Backend Controllers

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/// For Backend Controllers


app.use(trucksRouter); //pulls in config/routes.js

app.use(express.static('public'));

// Routes for users authed through Satellizer
// SATELLIZER/SQL API ROUTES
// GET USER
app.get('/api/me', auth.ensureAuthenticated, function(req,res) {
	sqlUser.findById(req.user)
	.then(function(user){
		if(!user) {
			return res.status(400)
			.send({message: 'No user found'});
		}
		res.send(user);
	});
});

// UPDATE USER
app.put('/api/me', auth.ensureAuthenticated, function(req, res) {
	sqlUser.findById(req.user)
	.then(function(user){
		if(!user) {
			return res.status(400)
			.send({message: 'No user found'});
		}
		user.email = req.body.email || user.email;
		user.save()
		.then(function(result){
			if (!result) {
				res.status(500)
				.send({message: 'Update User Error'});
			}
			res.send(result);
		});
	});
});

// SATELLIZER/SQL AUTH ROUTES
// NEW USER SIGNUP
app.post('/auth/signup', function(req, res){
	sqlUser.findOne({where: {email: req.body.email }})
	.then(function(existingUser){
		if(existingUser){
			return res.status(409)
			.send({message: 'Email already in use'});
		}
		var user = sqlUser.build({
			email: req.body.email,
			password: req.body.password
		});
		user.save()
		.then(function(result){
			if (!result) {
				res.status(500)
				.send({message: 'New User add error'});
			}
			res.send({token: auth.createJWT(result)});
		});
	});
});

// LOGIN USER
app.post('/auth/login', function (req, res) {
  User.findOne({ email: req.body.email }, '+password', function (err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email or password.' });
      }
      res.send({ token: auth.createJWT(user) });
    });
  });
});

// CATCH ALL ROUTES
app.get(['/','/login','/signup','/logout'], function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log('FFTT serving on localhost:3000');
});