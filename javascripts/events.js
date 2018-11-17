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
      dom.createTechImgs(saveArray);
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
