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
          console.log("the same as line 15", ObjFromFirebase);
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

    let getStoriesByUid = (user) => {

      let stories = [];
      return $q((resolve, reject) => {
        $http.get(`${FirebaseURL}/stories.json?orderBy="uid"&equalTo="${user}"`)
        .success((story) => {
          if (story !== null) {
            Object.keys(story).forEach((key) => {
              story[key].id = key;
              stories.push(story[key]);
            });
            resolve(stories);
          }else {
            resolve(stories);
          }
        }).
        error( (error) => {
          reject(error);
        });
      });
    };

      let deleteStoryById = (storyId) => {
      return $q( (resolve, reject) => {
        $http.delete(`${FirebaseURL}/stories/${storyId}.json`)
        .success( (ObjFromFirebase) => {
          resolve(ObjFromFirebase);
          console.log(ObjFromFirebase);
        });

      });
    };

    let getSnippetsByStoryId = (storyId) => {

      let snippets = [];
      return $q((resolve, reject) => {
        $http.get(`${FirebaseURL}/snippets.json?orderBy="linkToStory"&equalTo="${storyId}"`)
        .success((snippet) => {
          if (snippet !== null) {
            Object.keys(snippet).forEach((key) => {
              snippet[key].id = key;
              console.log(snippet[key].position);
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

    let getSingleSnippet = (snippetId) => {
      return $q( (resolve, reject) => {
        $http.get(`${FirebaseURL}/snippets/${snippetId}.json`)
        .success( (snippetFromFirebase) => {
          resolve(snippetFromFirebase);
          console.log(snippetFromFirebase);
        }).
        error((error) => {
          reject(error);
        });
      });
    };

    let updateSnippet = (snippetId, updatedSnippet) => {
      return $q( (resolve, reject) => {
        $http.patch(`${FirebaseURL}/snippets/${snippetId}.json`, JSON.stringify(updatedSnippet))
        .success( (snippetFromFirebase) => {
          resolve(snippetFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
      });
    };

        let snippetPositionSet = (itemId, editedItem) => {
        console.log(itemId, editedItem)
        return $q( (resolve, reject) => {
            $http.patch(`${FirebaseURL}/snippets/${itemId}.json`, editedItem)
                .success((objFromFirebase) => {
                    resolve(objFromFirebase);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let getLocationArray = (city) => {
        return $q( (resolve, reject) => {
        $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBExgICd780NYkq_fLvwD0RdnmUoX7VFdg`)
        .success( (googleResponse) => {
          resolve(googleResponse);
        }).
        error((error) => {
          reject(error);
        });
      });
    };


    return {postNewSnippet, getStorySnippetsByUid, postNewStoryName, deleteSnippetById, getStoriesByUid, deleteStoryById, getSnippetsByStoryId, getSingleSnippet, updateSnippet, getLocationArray, snippetPositionSet};

});
