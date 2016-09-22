"use strict";

app.controller("BuildViewCtrl", function($scope, StoryFactory, $location, $window, $routeParams, $route) {
  console.log($routeParams);
  console.log($route);

    $scope.title = "Create New Snippet";

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
        StoryFactory.postNewSnippet($scope.newStorySnippet)
        .then($route.reload());
    };

    $scope.goToRearrangeSnippetsView = function () {
        $window.location.href= `#/main/build/rearrangeAndEditSnippets/${$routeParams.storyId}`;
    };
});
