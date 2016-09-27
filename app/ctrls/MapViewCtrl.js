"use strict";

app.controller("MapViewCtrl", function($scope, uiGmapGoogleMapApi, StoryFactory, $routeParams) {

$scope.storyId = $routeParams.storyId;
console.log($scope.storyId);
$scope.map = { center: { latitude: 36.1627, longitude: -86.7816 }, zoom: 10};
$scope.snippets = [];
$scope.snippet_index = 0;
$scope.snippet = {};
$scope.cities = [];
$scope.latLngArray = []

$scope.next = () => {
  if ($scope.snippet_index >= $scope.snippets.length -1) {
    $scope.snippet_index = 0;
  }
  else {
    $scope.snippet_index ++;
  };
};

$scope.goMap = () => {
  $scope.map = { center: {latitude: $scope.latLngArray[$scope.snippet_index].lat , longitude: $scope.latLngArray[$scope.snippet_index].lng    },
        zoom: 10}
  }

StoryFactory.getSnippetsByStoryId($scope.storyId)
  .then( (snippetsArray) => {
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    })
  .then( (snippets) => {
     angular.forEach($scope.snippets, function(value, key) {
      $scope.cities.push(value.city);
      });
      angular.forEach($scope.cities, function(value, key) {
        StoryFactory.getLocationArray(value)
        .then ( (value) => {
        $scope.latLngArray.push(value.results[0].geometry.location)
      });
    });
      console.log($scope.latLngArray);
  })


  // $scope.snippetsLocation = () => {
  //   angular.forEach($scope.snippets, function(value, key) {
  //     console.log(value.city);
  //     $scope.locations.push(value.city);
  //   })
  //     console.log($scope.locations);
  // };

$scope.marker = {
    id: "first",
  coords: {
    lat: 36.1627,
    lng: -86.7816
  }
};

console.log($scope.marker);

// $scope.polylines = [];

// uiGmapGoogleMapApi .then(function(){
//   $scope.polylines  = [
//         {
//         id : 1,
//         path: [
//              {
//                latitude: 10.4805937,
//                 longitude: -66.9036062999,
//                 story: 1
//              },
//               {
//                 latitude: 36.1626638,
//                 longitude: -86.7816016,
//                 story: 2
//              }
//           ],
//           stroke: {
//             color : "#6060FB",
//             weight : 3
//           },
//            editable: true,
//             draggable: true,
//             geodesic: true,
//             visible: true,
//               icons: [{
//                     icon: {
//                         path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
//                     },
//                     offset: '25px',
//                     repeat: '50px'
//                 }]
//             },
//           ];
//     });

$scope.goToCaracas = function () {
  console.log("Been clicked");
  console.log($scope.map.center);
  var storyPath = $scope.polylines[0].path ;
$scope.map.center =
{ lat: 10.4805937, lng:  -66.9036062999 };

  };

});
