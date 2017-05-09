// USE ANGULAR MODULE AND DIRECTIVE(S)
angular.module('FoodTruckApp')
	.directive('truckCard', truckCard);

// TRUCK CARD DIRECTIVE
	function truckCard(){
		var directive = {
			restrict: 'E',
			replace: true,
			templateUrl: '../templates/trucks/index.html'
		};
		return directive;
	}