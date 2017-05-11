'use strict';
angular.module('mapsApp', []).controller('MapsController', MapsController);
MapsController.$inject = ['$scope', '$http'];
function MapsController($scope, $http) {
    var self = this;
    self.trucks = [];
    self.getTrucks = getTrucks;
    // self.calcRoute = calcRoute;

    initMap();
    getTrucks();
    function getTrucks() {
        $http.get("http://localhost:3000/api/trucks/").then(function (response) {
            console.log(response.data);
            var trucks = response.data;
            for (var i = 0; i < trucks.length; i++) {
                console.log(trucks[i] + " creating");
                createMarker(trucks[i]);
            }
        });
    }
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(39.74, -104.99),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.markers = [];
    var infoWindow = new google.maps.InfoWindow();
    var createMarker = function createMarker(info) {
        var image = "../images/icons/foodTruck.png";
        console.log("Creating  marker " + info);
        console.log($scope.map);
        var marker = new google.maps.Marker({
            map: $scope.map,
            icon: image,
            position: new google.maps.LatLng(info.latitude, info.longitude),
            title: info.name
        });
        marker.content = '<div class="infoWindowContent">' + 'Category: ' + 
        info.food_type + '</div>' + '</br>' + info.description + '</br>' +
        '<a href="https://www.google.com/maps/place/' + info.latitude + ',' + info.longitude + '&dirflg=w">Get Directions</a>';
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        $scope.markers.push(marker);
    };
    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };
}
