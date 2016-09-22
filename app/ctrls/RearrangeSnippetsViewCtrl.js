"use strict";

app.controller("RearrangeSnippetsCtrl", function($scope, StoryFactory, $routeParams,$window, $route){
  console.log($routeParams.storyId);
  let storyId = $routeParams.storyId;
  let user = $scope.$parent.getUser();
  $scope.snippets = [];
  $scope.editMode = false;

  StoryFactory.getSnippetsByStoryId(storyId)
  .then((snippetsArray) => {
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    });

  $scope.deleteSnippet = (snippetId) => {
    StoryFactory.deleteSnippetById(snippetId)
    .then( (response) => {
      StoryFactory.getStorySnippetsByUid(user)
      .then((snippetsArray) => {
        $scope.snippets = snippetsArray;
    });
  });
  };

  $scope.updateSnippet = (snippetId) => {
    console.log(snippetId);
    $scope.editMode = true;
    console.log($scope.editMode);
    $window.location.href = `#/main/build/editSnippet/${snippetId}`;
  };

});
