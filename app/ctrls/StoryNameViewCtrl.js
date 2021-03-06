"use strict";

app.controller("StoryNameViewCtrl", function ($scope, StoryFactory, $window) {

  $scope.newStoryName = {
    storyName: "",
    uid: $scope.$parent.getUser(),
    storyId: ""
  };

  $scope.addNewStory = () => {
    console.log($scope.newStoryName);
    StoryFactory.postNewStoryName($scope.newStoryName)
    .then(function (result) {
      let fbKey;
        console.log(result);
        fbKey = result.name;
      $scope.newStoryName.storyId = result ;
      $window.location.href = `#/main/build/newSnippet/${fbKey}`;
    });
  };

});
