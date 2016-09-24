"use strict";

app.controller("RearrangeSnippetsCtrl", function($scope, StoryFactory, $routeParams,$window){
  console.log($routeParams.storyId);
  let storyId = $routeParams.storyId;
  $scope.snippets = [];
  let user = $scope.$parent.getUser();
  console.log("User in Rearragange Snippets View", user);


  $scope.toStoryView = () => {
    $window.location.href = `#/storyView/${$routeParams.storyId}`;
  };

  StoryFactory.getSnippetsByStoryId(storyId)
  .then((snippetsArray) => {
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    });

  $scope.deleteSnippet = (snippetId) => {
    StoryFactory.deleteSnippetById(snippetId)
    .then( (response) => {
      StoryFactory.getSnippetsByStoryId(storyId)
      .then((snippetsArray) => {
        $scope.snippets = snippetsArray;
    });
  });
  };

  $scope.updateSnippet = (snippetId) => {
    $window.location.href = `#/main/build/editSnippet/${snippetId}`;
  };

  $scope.toBuildViewPage =  () => {
    console.log(storyId)
    $window.location.href = `#/main/build/newSnippet/${$routeParams.storyId}`;
  };

});
