"use strict";

app.controller("TopCtrl", function ($scope, $location, $window, AuthFactory) {

  $scope.isLoggedIn = false;
  let currentUser = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user)
  })

})
