'use strict';

console.log("Trucks Controller!!");
// ANGULAR CONTROLLERS TO USE, INDEX, SHOW, POST, PUT
angular.module('FoodTruckApp').controller('TruckIndexController', TruckIndexController).controller('TruckShowController', TruckShowController).controller('TruckNewController', TruckNewController).controller('TruckEditController', TruckEditController);

// INDEX CONTROLLER
TruckIndexController.$inject = ['$http'];
// Match Injection
function TruckIndexController($http) {
	// ViewModel is equal to this
	var vm = this;
	vm.deleteTruck = deleteTruck;

	// INDEX all the Trucks
	function getAllTrucks() {
		console.log("GETTING All Trucks");
		$http.get('/api/trucks').then(function (res) {
			vm.allTrucks = res.data;
		});
	}

	//DELETE the trucks aka...clear the page
	function deleteTrucks() {
		console.log("DELETING All Trucks");
		$http.delete('/api/trucks/' + truck.id).then(function (res) {
			var truckIndex = vm.allTrucks.indexOf(trucks);
			vm.allTrucks.splice(truckIndex, 1);
		});
	}

	// INDEX all the trucks after clearing the page
	getAllTrucks();
}

// SHOW CONTROLLER
TruckShowController.$inject = ['$http', '$routeParams'];
// Match Injections
function TruckShowController($http, $routeParams) {
	// ViewModel is equal to this
	var vm = this;

	// GET the single truck
	function getOneTruck() {
		console.log($routeParams.id);
		$http.get('/api/trucks/' + $routeParams.id).then(function (res) {
			console.log(res.data + " get one truck!!!!");
			vm.oneTruck = res.data;
		});
	}

	getOneTruck();
}

// NEW CONTROLLER
TruckNewController.$inject = ['$http', '$location'];
// Match Injections
function TruckNewController($http, $location) {
	// ViewModel is equal to this
	var vm = this;
	vm.saveTruck = saveTruck;

	// POST the new truck added to the DB
	function saveTruck() {
		console.log(vm.newTruck);
		$http.post('/api/trucks', vm.newTruck).then(function (res) {
			var newTruck = res.data;
			$location.path('/trucks/' + truck.id);
		});
	}
}

// PUT CONTROLLER
TruckEditController.$inject = ['$http', '$location', '$routeParams'];
// Match injections
function TruckEditController($http, $location, $routeParams) {
	// ViewModel is equal to this
	var vm = this;
	vm.updateTruck = updateTruck;

	// GET the Truck to Update
	function getTruck() {
		console.log($routeParams.id);
		$http.get('/api/trucks' + $routeParams.id).then(function (res) {
			console.log(res);
			vm.updatedTruck = res.data;
		});
	}

	// PUT the Truck
	function updateTruck() {
		$http.put('/api/trucks/' + $routeParams.id, vm.updatedTruck).then(function (res) {
			console.log(res);
			var truck = res.data;
			$location.path('/api/trucks' + truck.id);
		});
	}
	// GET the Updated Truck
	getTruck();
}