"use strict";

app.controller("EditSnippetViewCtrl", function($scope, StoryFactory, $window, $routeParams) {

    $scope.title = "Edit Snippet";

    $scope.newStorySnippet = {};

    // StoryFactory.getSingleSnippet(snippetId)
    //   .then( (snippetFromFirebase) => {
    //     $scope.newStorySnippet = snippetFromFirebase;
    //   });

console.log($scope.newStorySnippet.linkToStory);

    $scope.addNewSnippet  = () => {
      StoryFactory.updateSnippet(snippetId, $scope.newStorySnippet)
      .then ( (snippetFromFirebase) => {
        console.log(snippetFromFirebase);
        $window.location.href = `#/main/build/rearrangeAndEditSnippets/${snippetFromFirebase.linkToStory}`;
      });
    };

});
