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
				controller: 'TruckIndexController as truckController'
			})

			// Show
			.when('/trucks/:id', {
				templateUrl: '../templates/trucks/show.html',
				controller: 'TruckShowController as truckController'
			})

			// Ratings Routes

			// Show Truck Ratings
			.when('/trucks/:id/ratings', {
				templateUrl: '../templates/ratings/show.html',
				controller: 'RatingShowController as ratingController'
			})

			// New Rating
			.when('/trucks/:id/ratings/new', {
				templateUrl: '../templates/ratings/new.html',
				controller: 'RatingNewController as ratingNewController'
			});

	});