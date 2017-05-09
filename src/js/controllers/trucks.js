console.log("Trucks Controller!!");
// ANGULAR CONTROLLERS TO USE
angular.module('FoodTruckApp')
	.controller('TruckIndexController', TruckIndexController);
	// .controller('TruckShowController', TruckShowController)
	// .controller('TruckNewController', TruckNewController)
	// .controller('TruckEditController', TruckEditController);

// INDEX CONTROLLER
TruckIndexController.$inject = ['$http'];

function TruckIndexController($http) {
	var vm = this;
	vm.deleteTruck = deleteTruck;

	function getAllTrucks(){
		$http.get('/api/trucks')
		.then(function(res){
			vm.allTrucks = res.data;
		});
	}

	function deleteTrucks(){
		$http.delete('/api/trucks/' + truck.id)
		.then(function(res){
			var truckIndex = vm.allTrucks.indexOf(trucks);
			vm.allTrucks.splice(truckIndex, 1);
		});
	}

	getAllTrucks();
}