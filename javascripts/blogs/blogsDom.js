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
