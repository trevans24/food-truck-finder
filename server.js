  var express = require('express'),
	app = express(),
	router = express.Router(),
	trucksRouter = require('./config/routes.js'),
	bodyParser = require('body-parser');

/// For Backend Controllers

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/// For Backend Controllers


app.use(trucksRouter); //pulls in config/routes.js

app.use(express.static('public'));

// CATCH ALL ROUTES
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log('FFTT serving on localhost:3000');
});