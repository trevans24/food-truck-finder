'use strict';

console.log("Trucks Controller!!");
// ANGULAR CONTROLLERS TO USE
angular.module('FoodTruckApp').controller('TruckIndexController', TruckIndexController).controller('TruckShowController', TruckShowController).controller('TruckNewController', TruckNewController).controller('TruckEditController', TruckEditController);

// INDEX CONTROLLER
TruckIndexController.$inject = ['$http'];

function TruckIndexController($http) {
	var vm = this;
	vm.deleteTruck = deleteTruck;

	function getAllTrucks() {
		console.log("GETTING All Trucks");
		$http.get('/api/trucks').then(function (res) {
			vm.allTrucks = res.data;
		});
	}

	function deleteTrucks() {
		console.log("DELETING All Trucks");
		$http.delete('/api/trucks/' + truck.id).then(function (res) {
			var truckIndex = vm.allTrucks.indexOf(trucks);
			vm.allTrucks.splice(truckIndex, 1);
		});
	}

	getAllTrucks();
}

// SHOW CONTROLLER
TruckShowController.$inject = ['$http', '$routeParams'];

function TruckShowController($http, $routeParams) {
	var vm = this;

	function getOneTruck() {
		console.log($routeParams.id);
		$http.get('/api/trucks/' + $routeParams.id).then(function (res) {
			console.log(res);
			vm.oneTruck = res.data;
		});
	}

	getOneTruck();
}