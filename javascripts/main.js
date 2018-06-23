const apiKeys = require('./apiKeys');
// const blogsEvent = require('./blogs/blogsEvents');
const events = require('./events');

const initializer = () => {
  apiKeys.retrieveKeys();
  events.navLinks();
};

initializer();
