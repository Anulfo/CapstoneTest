 "use strict";

app.controller("LoginViewCtrl", function($scope, $window, AuthFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.login = () => {
      console.log("Login Clicked");
      AuthFactory.loginUser($scope.account)
      .then ((data) => {
        if (data) {
          $window.location.href = "#/main";
        } else {
          $window.location.href = "#/login";
        }
        console.log("data from login", data);
      }, (error) => {
        console.log("Error Log", error);
      });
    };

  $scope.goToRegisterForm = () => {
      console.log("Go to Register View Clicked");
      $window.location.href="#/main/registerView";
  };

});

