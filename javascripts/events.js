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
