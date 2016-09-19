"use strict";

app.controller("RearrangeSnippetsCtrl", function($scope, $window, $location, StoryFactory){
  $scope.snippets = [];
  let user = $scope.$parent.getUser();
  console.log("User in Rearragange Snippets View", user);

  StoryFactory.getStorySnippetsByUid(user)
  .then((snippetsArray) => {
    $scope.snippets = snippetsArray;
    console.log("Snippets Array", $scope.snippets);
    });

});
