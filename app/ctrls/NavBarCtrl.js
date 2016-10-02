"use strict";

app.controller("NavBarCtrl", function($scope, $location) {

  $scope.navItems = [

      {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
      {url: "#/main", name: "Tell Me Your Story", showState: "$parent.isLoggedIn"}
  ];

  // $scope.isActive = (viewLocation) =>
  // viewLocation === $location.path();

});
