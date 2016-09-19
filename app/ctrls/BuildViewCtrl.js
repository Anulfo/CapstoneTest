"use strict";

app.controller("BuildViewCtrl", function($scope, StoryFactory, $location, $window) {

    $scope.newStorySnippet = {
      city: "",
      description: "",
      imgLink: "",
      storyName: "",
      userName:"",
      uid: $scope.$parent.getUser()
    };

    $scope.addNewSnippet = function () {
        console.log($scope.newStorySnippet);
        StoryFactory.postNewSnippet($scope.newStorySnippet);
    };

    $scope.goToRearrangeSnippetsView = function () {
        $windows.location.href="#/main/rearrangeSnippets";
    };
});
