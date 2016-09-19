"use strict";

var app = angular.module("MapApp", ["ngRoute", "uiGmapgoogle-maps"]).constant("FirebaseURL", "https://capstone-tester.firebaseio.com");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("Identified User, Proceed");
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
        when('/main', {
          templateUrl: 'partials/mainView.html',
          controller: 'MainViewCtrl'
        }).
        when('/storyView', {
          templateUrl: 'partials/map-view.html',
          controller: 'MapViewCtrl'
        }).
        when('/main/buildView', {
          templateUrl: 'partials/build-view.html',
          controller: 'BuildViewCtrl'
        }).
        when('/main/rearrangeSnippets', {
          templateUrl: 'partials/rearrange-snippets-view.html',
          controller: 'RearrangeSnippetsCtrl'
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

