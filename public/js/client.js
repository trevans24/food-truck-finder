'use strict';

console.log('Client Sided Controller');

angular.module('FoodTruckApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
	// Main Routes
	.when('/', {
		templateUrl: '../templates/home.html'
	}).when('/about', {
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

	// New
	.when('/trucks/new', {
		templateUrl: '../templates/trucks/new.html',
		controller: 'TruckNewController as truckController'
	})

	// Edit
	.when('/trucks/:id', {
		templateUrl: '../templates/trucks/edit.html',
		controller: 'TruckEditController as truckController'
	})

	// Ratings Routes

	// Show Truck Ratings
	.when('/trucks/:id/favorite', {
		templateUrl: '../templates/favorties/show.html',
		controller: 'FavoriteShowController as favoriteController'
	})

	// New Rating
	.when('/trucks/:id/favorite/new', {
		templateUrl: '../templates/favorties/new.html',
		controller: 'FavoriteNewController as favoriteController'
	})

	// Edit Rating
	.when('/trucks/:id/favorite/:id', {
		templateUrl: '../templates/favorties/edit.html',
		controller: 'FavoriteEditController as favoriteController'
	});
});