'use strict';

console.log('User Controller');

angular.module('FoodTruckApp', ['satellizer']).controller('MainController', MainController).controller('LoginController', LoginController).controller('SignupController', SignupController).controller('LogoutController', LogoutController).service('Account', Account);

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
}