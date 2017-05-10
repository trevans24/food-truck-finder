var trucks = [
	{
		name: 'carls jr.',
		description: 'not a truck',
		lat: 39.74,
		long: -104.55,
		category: 'mexican'
	},
	{
		name: 'InNOut',
		desc: 'in n out',
		lat: 39.74,
		long: -104.99,
		category: 'italian'
	}
	];

console.log("mapss");

angular.module('mapsApp',[])
	.controller('MapsController', MapsController);

MapsController.$inject = ['$scope'];

function MapsController($scope){

	var mapOptions = {
		zoom: 10,
		center: new google.maps.LatLng(39.74, -104.99),
        mapTypeId: google.maps.MapTypeId.TERRAIN
	};

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	$scope.markers = [];

	var infoWindow = new google.maps.InfoWindow();

	var createMarker = function (info){
		console.log("Creating marker " + info);
		console.log($scope.map);
		var marker = new google.maps.Marker({
			map: $scope.map,
			position: new google.maps.LatLng(info.lat, info.long),
			title: info.name
	}); 
	marker.content = '<div class="infoWindowContent">' + info.desc + '<div>';

	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
		infoWindow.open($scope.map, marker);
	});
	$scope.markers.push(marker);
}

	for(var i = 0; i < trucks.length; i++){
		console.log(trucks[i]);
		createMarker(trucks[i]);
	}

	$scope.openInfoWindow = function(e, selectedMarker){
		e.preventDefault();
		google.maps.event.trigger(selectedMarker, 'click');
	};
}

