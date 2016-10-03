"use strict";

app.controller("RearrangeSnippetsCtrl", function($scope, StoryFactory, $routeParams,$window){
  console.log($routeParams.storyId);
  let storyId = $routeParams.storyId;
  $scope.snippets = [];
  $scope.models = {
    selected : null,
    list : []
  }
  let user = $scope.$parent.getUser();
  console.log("User in Rearragange Snippets View", user);

  $scope.dropCallback = function(event, index, item, external, type, allowedType) {
      $scope.logListEvent('dropped at', event, index, external, type);
      if (external) {
          if (allowedType === 'itemType' && !item.label) return false;
          if (allowedType === 'containerType' && !angular.isArray(item)) return false;
      }
      return item;
  };

    $scope.logEvent = function(message, event) {
      console.log(message, '(triggered by the following', event.type, 'event)');
      console.log(event);
      console.log($scope.models);
      angular.forEach($scope.models.list, function (value, key) {
          value.position = key + 1;
      });
      angular.forEach($scope.models.list, function (value, key) {
          let itemId = value.id;
          let editedItem = value;
          // console.log(value);
          StoryFactory.snippetPositionSet(itemId, editedItem);
      });
  };

    $scope.logListEvent = function(action, event, index, external, type) {
      var message = external ? 'External ' : '';
      message += type + ' element is ' + action + ' position ' + index;
      $scope.logEvent(message, event);
  };

  $scope.toStoryView = () => {
    $window.location.href = `#/storyView/${$routeParams.storyId}`;
  };

  StoryFactory.getSnippetsByStoryId(storyId)
  .then((snippetsArray) => {
    snippetsArray.sort(function(a, b) {
            return a.position - b.position;
        })
    $scope.snippets = snippetsArray;
    $scope.models.list = snippetsArray;
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
