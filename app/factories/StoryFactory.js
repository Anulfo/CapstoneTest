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

    let postNewStoryName = (newStoryName) =>{

      return $q ( (resolve, reject) => {
        $http.post(`${FirebaseURL}/stories.json`, JSON.stringify(newStoryName))
        .success( (ObjFromFirebase) => {
          console.log(ObjFromFirebase);
          resolve(ObjFromFirebase);
        }).
        error( (error) => {
          reject(error);
        });
      });
    };

    let getStorySnippetsByUid = (user) => {

      let snippets = [];
      return $q((resolve, reject) => {
        $http.get(`${FirebaseURL}/snippets.json?orderBy="uid"&equalTo="${user}"`)
        .success((snippet) => {
          if (snippet !== null) {
            Object.keys(snippet).forEach((key) => {
              snippet[key].id = key;
              snippets.push(snippet[key]);
            });
            resolve(snippets);
          }else {
            resolve(snippets);
          }
        }).
        error( (error) => {
          reject(error);
        });
      });
    };

    let deleteSnippetById = (snippetId) => {
      return $q( (resolve, reject) => {
        $http.delete(`${FirebaseURL}/snippets/${snippetId}.json`)
        .success( (ObjFromFirebase) => {
          resolve(ObjFromFirebase);
          console.log(ObjFromFirebase);
        });
      });
    };

    return {postNewSnippet, getStorySnippetsByUid, postNewStoryName, deleteSnippetById};

});
