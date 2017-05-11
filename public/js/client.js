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
	.state('about', {
		url: '/about',
		templateUrl: '../templates/about.html'
	})

	// Truck Routes

	// Index
	.state('trucks', {
		url: '/trucks',
		templateUrl: '../templates/trucks/index.html',
		controller: 'TruckIndexController',
		controllerAs: 'truckController',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	})

	// Show

	.state('show', {
		url: '/trucks/:id',
		templateUrl: '../templates/trucks/show.html',
		controller: 'TruckShowController',
		controllerAs: 'truckController',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	})

	// New
	.state('new', {
		url: '/trucks/new',
		templateUrl: '../templates/trucks/new.html',
		controller: 'TruckNewController',
		controllerAs: 'truckController',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	})

	// Edit
	.state('edit', {
		url: '/trucks/:id',
		templateUrl: '../templates/trucks/edit.html',
		controller: 'TruckEditController',
		controllerAs: 'truckController',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	});

	// Favorites Routes

	// Show Truck Ratings
	// .state('/trucks/:id/favorite', {
	// 	url: '',
	// 	templateUrl: '../templates/favorties/show.html',
	// 	controller: 'FavoriteShowController as favoriteController',
	// 	controllerAs: '',
	// 	resolve: {
	// 		skipIfLoggedIn: skipIfLoggedIn
	// 	}
	// })

	// // New Rating
	// .state('/trucks/:id/favorite/new', {
	// 	url: '',
	// 	templateUrl: '../templates/favorties/new.html',
	// 	controller: 'FavoriteNewController as favoriteController',
	// 	controllerAs: '',
	// 	resolve: {
	// 		skipIfLoggedIn: skipIfLoggedIn
	// 	}
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