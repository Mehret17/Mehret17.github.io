const {setConfig,} = require('./firebaseApi');
const {getAllProjectsEvent,getAllBlogsEvent,getAllTechImgsEvent, } = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        resolve(config);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebase.initializeApp(results.firebaseKey);
      setConfig(results.firebaseKey);
      getAllProjectsEvent();
      getAllBlogsEvent ();
      getAllTechImgsEvent();
    })
    .catch((err) => {
      console.error('retrieve err:', err);
    });
};

module.exports = {
  retrieveKeys,
};
