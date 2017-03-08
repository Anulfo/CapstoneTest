"use strict";

app.controller("StoriesViewCtrl", function($scope, StoryFactory, $window, $routeParams){
  $scope.stories = [];
  let user = $scope.$parent.getUser();
  console.log(user);


  StoryFactory.getStoriesByUid(user)
  .then((storiesArray) => {
    $scope.stories = storiesArray;
    console.log("stories array", $scope.stories);
  });

    $scope.deleteStory = (storyId) => {
        StoryFactory.deleteStoryById(storyId)
        .then( (response) => {
          StoryFactory.getStoriesByUid(user)
          .then((storiesArray) => {
            $scope.stories = storiesArray;
        });
      });
        StoryFactory.getSnippetsByStoryId(storyId)
        .then ( (snippetsArray) => {
          console.log("Wandering Snippets Array", snippetsArray);
          angular.forEach(snippetsArray, function(value, key){
              console.log(value.id);
              StoryFactory.deleteSnippetById(value.id);
            });
          });
    };

    $scope.goToRearrangeSnippetsView = function (storyId) {
        $window.location.href= `#/main/build/rearrangeAndEditSnippets/${storyId}`;
    };

    $scope.goToBuildingForm =  () =>  {
      console.log("Been Clicked");
      $window.location.href="#/main/build/name";
  };

});
