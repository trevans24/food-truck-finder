'use strict';

console.log('Client Sided Controller');

angular.module('FoodTruckApp', ['ngRoute', 'satellizer']).config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	}).controller('MainController', MainController).controller('LoginController', LoginController).controller('SignupController', SignupController).controller('LogoutController', LogoutController).service('Account', Account);

	$routeProvider
	// Main Routes
	// HOME
	.when('/', {
		templateUrl: '../templates/home.html',
		controller: 'MainController as main'
	})
	// SIGNUP
	.when('/signup', {
		templateUrl: '../templates/signup.html',
		conroller: 'SignUpController as signup',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	})
	// LOGIN
	.when('/login', {
		templateUrl: '../templates/login.html',
		controller: 'LoginController as login',
		resolve: {
			skipIfLoggedIn: skipIfLoggedIn
		}
	})
	// LOGOUT
	.when('/logout', {
		controller: 'LogoutController as logout',
		resolve: {
			loginRequired: loginRequired
		}
	})
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
		templateUrl: '<h1>This is not a test</h1>',
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

	function skipIfLoggedIn($q, $auth) {
		var deferred = $q.defer();
		if ($auth.isAuthenticated()) {
			deferred.refect();
		} else {
			deferred.resolve();
		}
		return deferred.promise;
	}

	function logininRequired($q, $location, $auth) {
		var deferred = $q.defer();
		if ($auth.isAuthenticated()) {
			deferred.resolve();
		} else {
			$location.path('/login');
		}
		return deferred.promise;
	}
});

///////////////
//CONTROLLERS//
///////////////

// MAIN CONTROLLER THAT CONTROLLS THE NAV DIV
MainController.$inject = ['Account'];
function MainController(Account) {
	var vm = this;

	vm.currentUser = function () {
		return Account.currentUser();
	};
}

// LOGIN CONTROLLER to log in
LoginController.$inject = ['$location', 'Account'];
function LoginController($location, Account) {
	var vm = this;
	vm.new_user = {};

	vm.login = function () {
		Account.login(vm.new_user).then(function () {
			vm.new_user = {};
			$location.path('/trucks');
		});
	};
}

// SIGNUP CONTROLLER
SignupController.$inject = ['$location', 'Account'];
function SignupController($location, Account) {
	var vm = this;
	vm.new_user = {};

	vm.signup = function () {
		Account.signup(vm.new_user).then(function (response) {
			vm.new_user = {};
			$location.path('/trucks');
		});
	};

	LogoutController.$inject = ['$location', 'Account'];
	function LogoutController($location, Account) {
		Account.logout().then(function () {
			$location.path('/');
		});
	}
	//////////////
	// Services //
	//////////////

	Account.$inject = ["$http", "$q", "$auth"]; // minification protection
	function Account($http, $q, $auth) {
		var self = this;
		self.user = null;

		self.signup = signup;
		self.login = login;
		self.logout = logout;
		self.currentUser = currentUser;
		self.getProfile = getProfile;
		self.updateProfile = updateProfile;

		function signup(userData) {
			return $auth.signup(userData) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
			.then(function onSuccess(response) {
				$auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
			}, function onError(error) {
				console.error(error);
			});
		}

		function login(userData) {
			return $auth.login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
			.then(function onSuccess(response) {
				$auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
			}, function onError(error) {
				console.error(error);
			});
		}

		function logout() {
			return $auth.logout() // delete token (https://github.com/sahat/satellizer#authlogout)
			.then(function () {
				self.user = null;
			});
		}
	}
}