// const {getSetFirebaseConfig,} = require('./apiKeys');

let firebaseConfig = {};

const setConfig = fbcConfig => {
  firebaseConfig = fbcConfig;
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    })
      .done(allProjectsObj => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach(fbKey => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done(allBlogsObj => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach(fbKey => {
            allBlogsObj[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const getAllTechs = () => {
  return new Promise((resolve, reject) => {
    const allTechsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/tech.json`,
    })
      .done(allTechsObj => {
        if (allTechsObj !== null) {
          Object.keys(allTechsObj).forEach(fbKey => {
            allTechsObj[fbKey].id = fbKey;
            allTechsArray.push(allTechsObj[fbKey]);
          });
        }
        resolve(allTechsArray);
      })
      .fail(error => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllProjects,
  getAllBlogs,
  getAllTechs,
};
