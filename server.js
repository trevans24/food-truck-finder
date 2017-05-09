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
app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});







app.listen(process.env.PORT || 3000, function(){
	console.log('FFTT serving on localhost:3000');
});