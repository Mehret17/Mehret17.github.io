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
