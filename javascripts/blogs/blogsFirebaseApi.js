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
