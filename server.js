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

// CATCH ALL ROUTES
app.get(['/','/login','/signup','/logout'], function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log('FFTT serving on localhost:3000');
});