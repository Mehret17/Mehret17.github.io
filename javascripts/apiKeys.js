let firebaseConfig = {};
let uid = '';

const setConfig = (fbcConfig) => {
  firebaseConfig = fbcConfig;
  console.log('setConfig:',firebaseConfig);
};

const setUID = (newUID) => {
  uid = newUID;
};

const getSetFirebaseConfig = () => {
  return firebaseConfig;
};

const getSetUID = () => {
  return uid;
};

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
      console.log(results);
      firebase.initializeApp(results.firebaseKey);
      setConfig(results.firebaseKey);
    })
    .catch((err) => {
      console.error('retrieve err:', err);
    });
};

module.exports = {
  setConfig,
  setUID,
  getSetFirebaseConfig,
  getSetUID,
  retrieveKeys,
};
