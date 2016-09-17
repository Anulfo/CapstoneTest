"use strict";

app.controller("NavCtrl", function($scope, searchTermData, $location) {

  $scope.searchText = searchTermData;
  $scope.navItems = [

      {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();

})
