'use strict';

console.log('Client Sided Controller');

angular.module('FoodTruckApp', ['ngRoute', 'ui.router']).config(function ($routeProvider, $locationProvider, $stateProvier, $urlRouterProvider) {

	// using HTML 5 for location templates
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	// if no matched urls bring back to home
	$urlRouterProvider.otherwise("/");

	$stateProvier
	// Main Routes
	// HOME
	// .state('home', {
	// 	url: '/',
	// 	templateUrl: 'templates/index.html',
	// 	controller: 'MainController',
	// 	controllerAs: 'main'
	// })
	// ABOUT PAGE
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

	// New
	.when('/trucks', {
		templateUrl: '../templates/trucks/new.html',
		controller: 'TruckNewController as truckController'
	})

	// Edit
	.when('/trucks/:id', {
		templateUrl: '../templates/trucks/edit.html',
		controller: 'TruckEditController as truckController'
	});

	// Favorites Routes

	// Show Truck Ratings
	// .state('/trucks/:id/favorite', {
	// 	url: '',
	// 	templateUrl: '../templates/favorties/show.html',
	// 	controller: 'FavoriteShowController as favoriteController',
	// 	controllerAs: ''
	// })

	// // New Rating
	// .state('/trucks/:id/favorite/new', {
	// 	url: '',
	// 	templateUrl: '../templates/favorties/new.html',
	// 	controller: 'FavoriteNewController as favoriteController',
	// 	controllerAs: '',
	// })

	// // Edit Rating
	// .state('/trucks/:id/favorite/:id', {
	// 	url: '',
	// 	templateUrl: '../templates/favorties/edit.html',
	// 	controller: 'FavoriteEditController as favoriteController',
	// 	controllerAs: '',
	// 	resolve: {
	// 		skipIfLoggedIn: skipIfLoggedIn
	// 	}
});