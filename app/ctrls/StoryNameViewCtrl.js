"use strict";

app.controller("StoryNameViewCtrl", function ($scope, StoryFactory, $window) {

  $scope.newStoryName = {
    storyName: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewStory = () => {
    console.log($scope.newStoryName);
    StoryFactory.postNewStoryName($scope.newStoryName)
    .then(function (result) {
      let fbKey;
      for (var key in result) {
        console.log(result[key]);
        fbKey = result[key];
      }
      $scope.newStoryName.storyId = result ;
      $window.location.href = `#/main/build/newSnippet/${fbKey}`;
    });
  };

});
