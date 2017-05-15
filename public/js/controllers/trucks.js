'use strict';

// ANGULAR CONTROLLERS TO USE, INDEX, SHOW, POST, PUT
angular.module('mapsApp').controller('TruckIndexController', TruckIndexController).controller('TruckShowController', TruckShowController).controller('TruckNewController', TruckNewController).controller('TruckEditController', TruckEditController);

// INDEX CONTROLLER
TruckIndexController.$inject = ['$http', '$location', '$scope'];
// Match Injection
function TruckIndexController($http, $location, $scope) {
	// INDEX all the Trucks
	function getAllTrucks() {
		$http.get('/api/trucks').then(function (res) {
			$scope.trucks = res.data;
		});
	}
	// INDEX all the trucks after clearing the page
	getAllTrucks();
}

// SHOW CONTROLLER
TruckShowController.$inject = ['$http', '$location', '$routeParams', '$scope'];
// Match Injections
function TruckShowController($http, $location, $routeParams, $scope) {
	// ViewModel is equal to this
	var vm = this;
	vm.getOneTruck = getOneTruck;
	// GET the single truck
	function getOneTruck() {
		$http.get('/api/trucks/' + $routeParams.id).then(function (res) {
			console.log(res.data.description);
			$scope.truck = res.data;
		});
	}

	getOneTruck();
}

// NEW CONTROLLER
TruckNewController.$inject = ['$http', '$location', '$scope'];
// Match Injections		  // Match Injections
function TruckNewController($http, $location, $scope) {
	// ViewModel is equal to this		  	// ViewModel is equal to this
	var vm = this;
	$scope.pos = [];
	$scope.newTruck = {};
	$scope.saveTruck = saveTruck;
	$scope.getLocation = getLocation;

	getLocation();
	// POST the new truck added to the DB
	function saveTruck() {
		$http.post('/api/trucks', $scope.newTruck).then(function (res) {
			var newTruck = res.data;
			$location.path('/trucks/' + newTruck.id);
		});
	}
	function getLocation() {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			document.getElementById('longitude').value = pos.lat;
			document.getElementById('latitude').value = pos.lng;

			$scope.pos = pos;
		});
	}
}

// PUT CONTROLLER
TruckEditController.$inject = ['$http', '$location', '$routeParams'];
// Match injections
function TruckEditController($http, $location, $routeParams) {
	// ViewModel is equal to this
	var vm = this;
	vm.getTruck = getTruck;
	vm.updateTruck = updateTruck;

	// GET the Truck to Update
	function getTruck() {
		$http.get('/api/trucks/' + $routeParams.id).then(function (res) {
			vm.updatedTruck = res.data;
		});
	}

	// PUT the Truck
	function updateTruck() {
		$http.put('/api/trucks/' + $routeParams.id, vm.updatedTruck).then(function (res) {
			var truck = res.data;
			$location.path('/api/trucks/' + truck.id);
		});
	}
	// GET the Updated Truck
	getTruck();
}