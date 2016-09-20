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
        .then ( (response) => {
          console.log("Lonely Snippet", response)
        })
    };

    $scope.goToRearrangeSnippetsView = function (storyId) {
        $window.location.href= `#/main/build/rearrangeAndEditSnippets/${storyId}`;
    };

});
