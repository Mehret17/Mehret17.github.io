(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const outPutDiv = $('#myBlogs');

const createBlogPosts = (blogsArray) => {
  let domString = '';
  blogsArray.forEach((blogs) => {
    domString += `<div class= "col-sm-8 col-md-6">`;
    domString += `<div class = "blogPost">`;
    domString += `<p class ="blogDate">${blogs.date}</p>`;
    domString += `<h3 class="blogTitle">${blogs.title}</h3>`;
    domString += `<p class=blogPost>${blogs.post}</p>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = (blogs) => {
  outPutDiv.append(blogs);
};

module.exports = {
  createBlogPosts,
};

},{}],3:[function(require,module,exports){
const blogsFirebaseApi = require('./blogsFirebaseApi');
const dom = require('./blogsDom');

const getAllBlogsEvent = () => {
  blogsFirebaseApi.getAllBlogs()
    .then((saveArray) => {
      dom.createBlogPosts(saveArray);
    })
    .catch((error) => {
      console.error('error in get all blogs', error);
    });
};

module.exports = {
  getAllBlogsEvent,
};

},{"./blogsDom":2,"./blogsFirebaseApi":4}],4:[function(require,module,exports){
const {getSetFirebaseConfig,} = require('../apiKeys');

let firebaseConfig = {};
// let uid = '';

// const saveBlog = (newBlog) => {
//   newBlog.uid = uid;
//   console.log(newBlog);
//   return new Promise ((resolve, reject)=> {
//     $.ajax({
//       method: 'POST',
//       url: `${firebaseConfig.databaseURL}/blog.json`,
//       data: JSON.stringify(newBlog),
//     })
//       .done((uniqueArray) => {
//         resolve(uniqueArray);
//       })
//       .fail((err) => {
//         reject(error);
//       });
//   });
// };

const getAllBlogs = () => {
  firebaseConfig = getSetFirebaseConfig();
  console.log('getAllblogs:', firebaseConfig);
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAllBlogs,
};

},{"../apiKeys":1}],5:[function(require,module,exports){
const blogsEvent = require('./blogs/blogsEvents');
const projectsEvent = require('./projects/projectsEvents');

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'home') {
      $('#homePage').removeClass('hide');
      $('#aboutPage').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
    } else if (e.target.id === 'resume') {
      $('#homePage').addClass('hide');
      $('#aboutPage').removeClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
    } else if (e.target.id === 'projects') {
      $('#homePage').addClass('hide');
      $('#aboutPage').addClass('hide');
      $('#projectsPage').removeClass('hide');
      $('#blogsPage').addClass('hide');
      projectsEvent.getAllProjectsEvent();
    } else if (e.target.id === 'blogs') {
      $('#homePage').addClass('hide');
      $('#aboutPage').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').removeClass('hide');
      blogsEvent.getAllBlogsEvent();
    };
  });
};

module.exports = {
  navLinks,
};

},{"./blogs/blogsEvents":3,"./projects/projectsEvents":8}],6:[function(require,module,exports){
const apiKeys = require('./apiKeys');
// const blogsEvent = require('./blogs/blogsEvents');
const events = require('./events');

const initializer = () => {
  apiKeys.retrieveKeys();
  events.navLinks();
};

initializer();

},{"./apiKeys":1,"./events":5}],7:[function(require,module,exports){

const projectDiv = $('#myProjects');

const createProjectsCard = (projectArray) => {
  let projectString = '';
  projectArray.forEach((projects) => {
    projectString += `<div class="row">`;
    projectString += `<div class="col-sm-6">`;
    projectString += `<div class='thumbnail projectsCard'>`;
    projectString += `<img src="${projects.thumbnail}"</h3>`;
    projectString += `<div class="caption">`;
    projectString += `<p class="projectDescription">${projects.description}</p>`;
    projectString += `<p><a id="github"href="${projects.github}" class="btn btn-primary text-center">View on Github</a></p>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  printProject(projectString);
};

const printProject = (projects) => {
  projectDiv.append(projects);
};

module.exports = {
  createProjectsCard,
};

},{}],8:[function(require,module,exports){
const projectsFirebaseApi = require('./projectsFirebaseApi');
const dom = require('./projectsDom');

const getAllProjectsEvent = () => {
  projectsFirebaseApi.getAllProjects()
    .then((saveArray) => {
      dom.createProjectsCard(saveArray);
    })
    .catch((error) => {
      console.error('error in get all projects', error);
    });
};

module.exports = {
  getAllProjectsEvent,
};

},{"./projectsDom":7,"./projectsFirebaseApi":9}],9:[function(require,module,exports){
const {getSetFirebaseConfig,} = require('../apiKeys');

let firebaseConfig = {};

const getAllProjects = () => {
  firebaseConfig = getSetFirebaseConfig();
  console.log('getAllProjects:', firebaseConfig);
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAllProjects,
};

},{"../apiKeys":1}]},{},[6]);
