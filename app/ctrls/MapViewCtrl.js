"use strict";

app.controller("MapViewCtrl", function($scope, uiGmapGoogleMapApi, StoryFactory, $routeParams) {

$scope.storyId = $routeParams.storyId;
console.log($scope.storyId);
$scope.map = { center: { latitude: 36.1627, longitude: -86.7816 }, zoom: 12};
$scope.snippets = [];

StoryFactory.getSnippetsByStoryId($scope.storyId)
  .then( (snippetsArray) => {
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    });

$scope.marker = {
    id: "first",
  coords: {
    latitude: 36.1627,
    longitude: -86.7816
  }
};

console.log($scope.marker);

$scope.polylines = [];

uiGmapGoogleMapApi .then(function(){
  $scope.polylines  = [
        {
        id : 1,
        path: [
             {
               latitude: 10.4805937,
                longitude: -66.9036062999,
                story: 1
             },
              {
                latitude: 36.1626638,
                longitude: -86.7816016,
                story: 2
             }
          ],
          stroke: {
            color : "#6060FB",
            weight : 3
          },
           editable: true,
            draggable: true,
            geodesic: true,
            visible: true,
              icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            },
          ];
    });

$scope.goToCaracas = function () {
  console.log("Been clicked");
  console.log($scope.map.center);
  var storyPath = $scope.polylines[0].path ;
$scope.map.center =
{ latitude: 10.4805937, longitude:  -66.9036062999 };

  };

});
