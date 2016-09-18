"use strict";

app.controller("LoginViewCtrl", function($scope, $window, AuthFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

$scope.register = () => {
  console.log("Register Clicked");
  AuthFactory.createUser ({
    email: $scope.account.email,
    password: $scope.account.password
  })
  .then( (userData) => {
    console.log("newUser", userData);
    $scope.login();
  }, (error) => {
    console.log("Error creating user:${error}");
  });
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
});
