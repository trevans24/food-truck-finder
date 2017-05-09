console.log("Trucks Controller");

const app = angular.module('FoodTruckApp', ['ngRoute'])
	.controller('TrucksController', TrucksController);

let trucks = [];

/////////////////
///  ROUTES  ////
/////////////////

app.config(($routeProvider, $locationProvider)=>{
	$routeProvider
	.when('/', {
		templateUrl: '../../templates/home.html'
	})
	.when()
})