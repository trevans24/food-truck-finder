
// angular.module('mapsApp', []).controller('MapsController', MapsController);

// MapsController.$inject = ['$scope', '$http'];
// function MapsController($scope, $http) {
//     var self = this;
//     $scope.trucks = [];
//     $scope.markers = [];
//     self.getTrucks = getTrucks;
//     self.filterTrucks = filterTrucks;
//     // Runs the initialize map function found in footer of index.html
//     initMap();
//     // Checks if browser is compatible with Geolocation
//     if (navigator.geolocation) {
//       console.log('Geolocation is supported!!');
//       navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//           };
//           console.log(pos.lat + " position");
//             userPos(pos);

//             function userPos(pos){
//                 var marker = new google.maps.Marker({
//                     map: $scope.map,
//                     position: new google.maps.LatLng(pos.lat, pos.lng)

//             });
//         }
//     });
//     } else {
//       console.log('Geolocation is not supported for this Browser/OS.');
//     }

<<<<<<< HEAD
//     // Gets trucks loaded into server
//     getTrucks();
//     // Grabs trucks from DB and runs createMarker to plot them on map
//     function getTrucks() {
//         $http.get("http://localhost:3000/api/trucks/").then(function (response) {
//             var trucks = response.data;
//             for (var i = 0; i < trucks.length; i++) {
//                 createMarker(trucks[i]);
//                 $scope.trucks.push(trucks);
//             }
//         });
//     }
//     // Allows user to filter the displayed results on the map
//     function filterTrucks(category){
//         for(var i = 0; i<$scope.markers.length; i++){
//             var marker = $scope.markers[i];
//             if(marker.category == category || category.length === 0){
//                 marker.setVisible(true);
//             } else {
//                 marker.setVisible(false);
//             }
//         }
//     }
//     var mapOptions = {
//         zoom: 40,
//         center: new google.maps.LatLng(39.74, -104.99),
//         mapTypeId: google.maps.MapTypeId.TERRAIN
//     };
//     $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     var infoWindow = new google.maps.InfoWindow();
=======
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
    function filterTrucks(category){
        for(var i = 0; i<$scope.markers.length; i++){
            var marker = $scope.markers[i];
            if(marker.category == category || category.length === 0){
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        }
    }
    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(39.74, -104.99),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var infoWindow = new google.maps.InfoWindow();
>>>>>>> eed440f4f072017d0668ab5072475bd7d5017a6d

//     function createMarker(info) {
//         var image = "../images/icons/foodTruck.png";
//         console.log("Creating  marker " + info);
//         console.log($scope.map);
//         var marker = new google.maps.Marker({
//             map: $scope.map,
//             icon: image,
//             position: new google.maps.LatLng(info.latitude, info.longitude),
//             title: info.name
//         });
//         marker.content = '<div class="infoWindowContent">' + 'Category: ' + 
//         info.food_type + '</div>' + '</br>' + '<a href="/trucks/'+info.id+'">Learn More</a>' + '</br>' +
//         '<a href="https://www.google.com/maps/place/' + info.latitude + ',' + info.longitude + '&dirflg=w">Get Directions</a>';
//         google.maps.event.addListener(marker, 'click', function () {
//             infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//             infoWindow.open($scope.map, marker);
//         });
//         $scope.markers.push(marker);
//     }
//     $scope.openInfoWindow = function (e, selectedMarker) {
//         e.preventDefault();
//         google.maps.event.trigger(selectedMarker, 'click');
//     };
// }
