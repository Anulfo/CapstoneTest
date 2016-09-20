"use strict";

app.controller("BuildViewCtrl", function($scope, StoryFactory, $location, $window, $routeParams) {
  console.log($routeParams.storyId);

    $scope.newStorySnippet = {
      city: "",
      description: "",
      imgLink: "",
      linkToStory: $routeParams.storyId,
      uid: $scope.$parent.getUser(),
      id:""
    };

    $scope.addNewSnippet = function () {
        console.log($scope.newStorySnippet);
        StoryFactory.postNewSnippet($scope.newStorySnippet);
    };

    $scope.goToRearrangeSnippetsView = function () {
        $window.location.href= `#/main/build/rearrangeAndEditSnippets/${$routeParams.storyId}`;
    };
});
