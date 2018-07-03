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
