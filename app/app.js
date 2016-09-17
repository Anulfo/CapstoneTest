"use strict";

var app = angular.module("MapApp", ["ngRoute", "uiGmapgoogle-maps"]);

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("Identified User, Proceed")
    resolve();
  }else {
    console.log("Not a Valid User");
    reject();
    }
  });

app.config(function($routeProvider, uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({
          libraries: 'geometry,visualization'
      });


    $routeProvider.
        when('/', {
            templateUrl: 'partials/login-view.html',
            controller: 'LoginViewCtrl'
        }).
        when('/login', {
          templateUrl: 'partials/login-view.html',
          controller: 'LoginViewCtrl'
        }).
        when('/storyView', {
          templateUrl: 'partials/map-view.html',
          controller: 'MapViewCtrl'
        }).
        otherwise('/');
  });

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

