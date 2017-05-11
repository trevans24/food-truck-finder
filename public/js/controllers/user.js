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
  console.log('main controller');
  vm.currentUser = function () {
    return Account.currentUser();
  };
}

// LOGIN CONTROLLER to log in
LoginController.$inject = ['$location', 'Account'];
function LoginController($location, Account) {
  var vm = this;
  vm.new_user = {};
  console.log('login controller');
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
  console.log('signup controller');
  vm.signup = function () {
    Account.signup(vm.new_user).then(function (response) {
      vm.new_user = {};
      $location.path('/trucks');
    });
  };
}

// LOGOUT
LogoutController.$inject = ['$location', 'Account'];
function LogoutController($location, Account) {
  console.log('logout controller');
  Account.logout().then(function () {
    $location.path('/trucks');
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
  // self.currentUser = currentUser;
  self.getProfile = getProfile;
  self.updateProfile = updateProfile;

  function signup(userData) {
    console.log('signup function');
    return $auth.signup(userData) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
    .then(function onSuccess(response) {
      $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
    }, function onError(error) {
      console.error(error);
    });
  }

  function login(userData) {
    console.log('login function');
    return $auth.login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
    .then(function onSuccess(response) {
      $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
    }, function onError(error) {
      console.error(error);
    });
  }

  function logout() {
    console.log('logout function');
    return $auth.logout() // delete token (https://github.com/sahat/satellizer#authlogout)
    .then(function () {
      self.user = null;
    });
  }

  function getProfile() {
    return $http.get('/api/me');
  }

  function updateProfile() {
    console.log('update profile function');
    return $http.put('/api/me', profileData).then(function (res) {
      self.user = res.data;
    });
  }
}