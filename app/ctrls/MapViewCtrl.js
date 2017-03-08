"use strict";

app.controller("MapViewCtrl", function($scope, uiGmapGoogleMapApi, StoryFactory, $routeParams) {

$scope.storyId = $routeParams.storyId;
console.log($scope.storyId);
$scope.story = {}
$scope.map = { center: {latitude: null , longitude: null }, zoom: 5};
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

$scope.back = () => {
  if ($scope.snippet_index <= 0) {
      $scope.snippet_index = $scope.snippets.length -1;
  }
  else {
    $scope.snippet_index --;
  };
};

  StoryFactory.getStoryNameById($scope.storyId)
  .then( (storyObj) => {
    $scope.story = storyObj;
    return $scope.story;
  });



$scope.goMap = () => {
  console.log($scope.latLngArray);
  $scope.map = { center: {latitude: $scope.latLngArray[$scope.snippet_index].lat , longitude: $scope.latLngArray[$scope.snippet_index].lng},
        zoom: 5}
  }


StoryFactory.getSnippetsByStoryId($scope.storyId)
  .then( (snippetsArray) => {
    snippetsArray.sort(function(a, b) {
      return a.position - b.position;
      })
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    })
  .then( () => {
     angular.forEach($scope.snippets, function(value, key) {
      console.log(value);
      $scope.cities.push(value.city);
      });
     console.log($scope.cities);
      angular.forEach($scope.cities, function(value, key) {
        StoryFactory.getLocationArray(value)
        .then ( (value) => {
        $scope.latLngArray.push(value.results[0].geometry.location)
      }).then( () => {
      $scope.map.center.latitude = $scope.latLngArray[0].lat
      $scope.map.center.longitude =  $scope.latLngArray[0].lng
      })
    })
  })


$scope.marker = {
    id: "first",
    coords: {
    lat: 36.1627,
    lng: -86.7816
  }
};


// console.log($scope.marker);

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

});
