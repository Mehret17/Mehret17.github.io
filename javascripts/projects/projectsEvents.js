const blogsFirebaseApi = require('./projectsFirebaseApi');
const dom = require('./projectsDom');

const getAllProjectsEvent = () => {
  blogsFirebaseApi.getAllProjects()
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
