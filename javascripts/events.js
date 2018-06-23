const blogsEvent = require('./blogs/blogsEvents');

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'home') {
      $('#homePage').removeClass('hide');
      $('#resumePage').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
    } else if (e.target.id === 'resume') {
      $('#homePage').addClass('hide');
      $('#resumePage').removeClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').addClass('hide');
    } else if (e.target.id === 'projects') {
      $('#homePage').addClass('hide');
      $('#resumePage').addClass('hide');
      $('#projectsPage').removeClass('hide');
      $('#blogsPage').addClass('hide');
    } else if (e.target.id === 'blogs') {
      $('#homePage').addClass('hide');
      $('#resumePage').addClass('hide');
      $('#projectsPage').addClass('hide');
      $('#blogsPage').removeClass('hide');
      blogsEvent.getAllBlogsEvent();

    };
  });
};

module.exports = {
  navLinks,
};
