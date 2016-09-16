"use strict";

var app = angular.module("MapApp", ["ngRoute", "uiGmapgoogle-maps"]);

app.config(function($routeProvider, uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({
          libraries: 'geometry,visualization'
      });


    $routeProvider.
        when('/', {
            templateUrl: 'partials/map-view.html',
            controller: 'MapViewCtrl'
        }).
        otherwise('/');
  });

