(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./events":3,"./firebaseApi":4}],2:[function(require,module,exports){
const projectDiv = $('#myProjects');

const createProjectsCard = projectArray => {
  let projectString = '';
  projectArray.forEach((projects) => {
    projectString += `<div class="container-fluid">`;
    projectString += `<div class="row">`;
    projectString += `<div class="col-sm-6">`;
    projectString += `<div class='thumbnail projectsCard'>`;
    projectString += `<img src="${projects.thumbnail}"</h3>`;
    projectString += `<div class="caption">`;
    projectString += `<p class="projectDescription">${
      projects.description
    }</p>`;
    projectString += `<p><a id="github"href="${
      projects.github
    }" class="btn btn-primary text-center github">View on Github</a> <a id="github"href="${
      projects.url
    }" class="btn btn-primary text-center project">View Project</a> </p>`;
    projectString += `</div>`;
    // projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  printProject(projectString);
};

const printProject = projects => {
  projectDiv.append(projects);
};

const outPutDiv = $('#myBlogs');

const createBlogPosts = blogsArray => {
  let domString = '';
  blogsArray.forEach((blogs) => {
    domString += `<div class="col-md-6 col-md-offset-3">`;
    // domString += `<div class= "col-md-6 col-md-offset-3">`;
    domString += `<div class = "blogPost">`;
    domString += `<p class ="blogT">${blogs.date}</p>`;
    domString += `<h3 class="blogT">${blogs.title}</h3>`;
    domString += `<p class=blogPost>${blogs.post}</p>`;
    domString += `</div>`;
    // domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = blogs => {
  outPutDiv.append(blogs);
};

const techDiv = $('#techs');

const createTech = techsArray => {
  let techString = '';
  techString += `<div class="techCardHolder">`;
  techsArray.forEach((techs) => {
    techString += `<div class="techCard">`;
    techString += `<div class="techImage">`;
    techString += `<img class="tech-pic" src="${techs.img}">`;
    // techString += `<p class="techName">${techs.name}</p>`;
    techString += `</div>`;
    techString += '</div>';
  });
  techString += `</div>`;
  printTech(techString);
};

const printTech = techs => {
  techDiv.append(techs);
};

module.exports = {
  createProjectsCard,
  createBlogPosts,
  createTech,
};

},{}],3:[function(require,module,exports){
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const getAllProjectsEvent = () => {
  firebaseApi
    .getAllProjects()
    .then(saveArray => {
      dom.createProjectsCard(saveArray);
    })
    .catch(error => {
      console.error('error in get all projects', error);
    });
};

const getAllBlogsEvent = () => {
  firebaseApi
    .getAllBlogs()
    .then(saveArray => {
      dom.createBlogPosts(saveArray);
    })
    .catch(error => {
      console.error('error in get all blogs', error);
    });
};

const getAllTechImgsEvent = () => {
  firebaseApi
    .getAllTechs()
    .then(saveArray => {
      dom.createTech(saveArray);
    })
    .catch(error => {
      console.error('error in get all images', error);
    });
};

module.exports = {
  getAllProjectsEvent,
  getAllBlogsEvent,
  getAllTechImgsEvent,
};

},{"./dom":2,"./firebaseApi":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
const apiKeys = require('./apiKeys');
// const projectsEvent = require('./projects/projectsEvents');
// const events = require('./events');

const initializer = () => {
  apiKeys.retrieveKeys();
  // projectsEvent.getAllProjectsEvent();
  // events.navLinks();
};

initializer();
// projectsEvent.getAllProjectsEvent();

},{"./apiKeys":1}]},{},[5]);
