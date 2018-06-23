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
