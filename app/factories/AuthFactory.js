"use strict";

app.factory("AuthFactory", function() {

  let createUser = function (userObj) {
    return firebase.auth().
              createUserWithEmailAndPassword(
                userObj.email.userObj.password)
              .catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
              });
  };

  let loginUser = function(userObj) {
      return firebase.auth().
                signInWithEmailAndPassword(userObj.email, userObj.password)
                .catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log("error", errorCode, errorMessage);
                });
  };

  let logoutUser = function () {
      return firebase.auth().signOut();
  };

  let isAuthenticated = function () {
    console.log("I'm in", firebase.auth().currentUser);
    return (firebase.auth().currentUser) ? true : false;
  };

    return {createUser, loginUser, logoutUser, isAuthenticated};
});

