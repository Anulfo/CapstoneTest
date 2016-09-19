"use strict";

app.factory("StoryFactory", ($q, $http, FirebaseURL) => {

    let postNewSnippet = (newSnippet) => {

      return $q( (resolve, reject) => {
        $http.post(`${FirebaseURL}/snippets.json`, JSON.stringify(newSnippet))
          .success( (ObjFromFirebase) => {
            resolve(ObjFromFirebase);
          })
          .error( (error) => {
            reject(error);
          });
      });
    };

    return {postNewSnippet};

});
