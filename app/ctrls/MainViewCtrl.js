"use strict";

app.controller("MainViewCtrl", function($scope, $window) {

  $scope.goToBuildingForm =  () =>  {
    console.log("Been Clicked");
    $window.location.href="#/main/buildView";
  };

  $scope.goToStoryGallery = () => {
    console.log("Go to Story Clicked");
    $window.location.href="#/main/storyGallery";
  };

});
