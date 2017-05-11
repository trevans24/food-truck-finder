'use strict';

// console.log('Client Sided Controller');

var app = angular.module('mapsApp', ['ngRoute']).controller('MapsController', MapsController).controller('TruckIndexController', TruckIndexController);

// using HTML 5 for location templates

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    // Main Routes
    .when('/', {
        templateUrl: '../templates/home.html',
        contoroller: 'MapsController'
    })
    // ABOUT PAGE
    .when('/about', {
        templateUrl: '../templates/about.html'
    })

    // Truck Routes
    // Index
    .when('/trucks', {
        templateUrl: '../templates/trucks/index.html',
        controller: 'TruckIndexController'
    })

    // Show
    .when('/trucks/:id', {
        templateUrl: '../templates/trucks/show.html',
        controller: 'TruckShowController'
    })

    // New
    .when('/trucks', {
        templateUrl: '../templates/trucks/new.html',
        controller: 'TruckNewController'
    })

    // Edit
    .when('/trucks/:id', {
        templateUrl: '../templates/trucks/edit.html',
        controller: 'TruckEditController'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

console.log('Angular Working');
// Controllers

// INDEX CONTROLLER
TruckIndexController.$inject = ['$http', '$scope'];
// Match Injection
function TruckIndexController($http, $scope) {
    console.log('Index of Trucks');
    $scope.hello = 'test';
    $http.get('/api/trucks').then(function (res) {
        console.log('you made it');
    });
}

// MAPS CONTROLLER FOR TESTING
MapsController.$inject = ['$scope', '$http'];
function MapsController($scope, $http) {
    var self = this;
    $scope.trucks = [];
    $scope.markers = [];
    self.getTrucks = getTrucks;
    self.filterTrucks = filterTrucks;
    // Runs the initialize map function found in footer of index.html
    initMap();
    // Checks if browser is compatible with Geolocation
    if (navigator.geolocation) {
        console.log('Geolocation is supported!!');
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            console.log(pos.lat + " position");
            userPos(pos);

            function userPos(pos) {
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(pos.lat, pos.lng)

                });
            }
            // infoWindow.setPosition(pos);
            //   infoWindow.setContent('Location found.');
            //   infoWindow.open(map);
            //   map.setCenter(pos);
        });
    } else {
        console.log('Geolocation is not supported for this Browser/OS.');
    }

    // Gets trucks loaded into server
    getTrucks();
    // Grabs trucks from DB and runs createMarker to plot them on map
    function getTrucks() {
        $http.get("http://localhost:3000/api/trucks/").then(function (response) {
            var trucks = response.data;
            for (var i = 0; i < trucks.length; i++) {
                createMarker(trucks[i]);
                $scope.trucks.push(trucks);
            }
        });
    }
    // Allows user to filter the displayed results on the map
    function filterTrucks(category) {
        for (var i = 0; i < $scope.markers.length; i++) {
            var marker = $scope.markers[i];
            if (marker.category == category || category.length === 0) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        }
    }
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(39.74, -104.99),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
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
        marker.content = '<div class="infoWindowContent">' + 'Category: ' + info.food_type + '</div>' + '</br>' + '<a href="/trucks/' + info.id + '">Learn More</a>' + '</br>' + '<a href="https://www.google.com/maps/place/' + info.latitude + ',' + info.longitude + '&dirflg=w">Get Directions</a>';
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