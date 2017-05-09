console.log('Client Sided Controller');

angular.module('FoodTruckApp', ['ngRoute'])
	.config(($routeProvider, $locationProvider)=>{
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$routeProvider
		// Main Routes
			.when('/', {
				templateUrl: '../templates/home.html'
			})
			.when('/about', {
				templateUrl: '../templates/about.html'
			})

		// Truck Routes

		// Index
			.when('/trucks', {
				templateUrl: '../templates/trucks/index.html',
				controller: 'TrucksIndexController as trucksController'
			})

		// Show
			.when('/trucks/:id', {
				templateUrl: '../templates/trucks/show.html',
				controller: 'TrucksShowController as trucksController'
			})



	})