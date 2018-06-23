const outPutDiv = $('#myBlogs');

const createBlogPosts = (blogsArray) => {
  let domString = '';
  blogsArray.forEach((blogs) => {
    domString += `<div class = "blogPost">`;
    domString += `<h2>${blogs.title}</h2>`;
    domString += `<h4>${blogs.date}</h4>`;
    domString += `<p>${blogs.post}</p>`;
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
