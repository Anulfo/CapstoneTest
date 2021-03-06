"use strict";

var app = angular.module("MapApp", ["ngRoute", "uiGmapgoogle-maps", "dndLists"]).constant("FirebaseURL", "https://capstone-tester.firebaseio.com")

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
          key: 'AIzaSyB4lVZVkAlkiapJWrY3krBZo4J-ZkJDZgQ',
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
        when('/main/registerView', {
          templateUrl: 'partials/register-view.html',
          controller: 'RegisterViewCtrl'
        }).
        when('/main', {
          templateUrl: 'partials/mainView.html',
          controller: 'MainViewCtrl',
        }).
        when('/storyView/:storyId', {
          templateUrl: 'partials/map-view.html',
          controller: 'MapViewCtrl',
        }).
        when('/main/build/rearrangeAndEditSnippets/:storyId', {
          templateUrl: 'partials/rearrange-snippets-view.html',
          controller: 'RearrangeSnippetsCtrl',
        }).
        when('/main/build/name', {
          templateUrl: 'partials/story-name-view.html',
          controller: 'StoryNameViewCtrl',
        }).
        when('/main/build/newSnippet/:storyId', {
          templateUrl: 'partials/build-view.html',
          controller: 'BuildViewCtrl',
        }).
        when ('/main/storyGallery', {
          templateUrl: 'partials/stories-view.html',
          controller: 'StoriesViewCtrl',
        }).
        when ('/main/build/editSnippet/:snippetId', {
          templateUrl: 'partials/build-view.html',
          controller: 'EditSnippetViewCtrl',
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

