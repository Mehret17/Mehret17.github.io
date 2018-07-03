
const projectDiv = $('#myProjects');

const createProjectsCard = (projectArray) => {
  let projectString = '';
  projectArray.forEach((projects) => {
    projectString += `<div class="container-fluid>`;
    projectString += `<div class="row">`;
    projectString += `<div class="col-sm-6">`;
    projectString += `<div class='thumbnail projectsCard'>`;
    projectString += `<img src="${projects.thumbnail}"</h3>`;
    projectString += `<div class="caption">`;
    projectString += `<p class="projectDescription">${projects.description}</p>`;
    projectString += `<p><a id="github"href="${projects.github}" class="btn btn-primary text-center">View on Github</a></p>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  printProject(projectString);
};

const printProject = (projects) => {
  projectDiv.append(projects);
};

const outPutDiv = $('#myBlogs');

const createBlogPosts = (blogsArray) => {
  let domString = '';
  blogsArray.forEach((blogs) => {
    domString += `<div class="container-fluid>"`;
    domString += `<div class= "col-sm-8 col-md-6">`;
    domString += `<div class = "blogPost">`;
    domString += `<p class ="blogDate">${blogs.date}</p>`;
    domString += `<h3 class="blogTitle">${blogs.title}</h3>`;
    domString += `<p class=blogPost>${blogs.post}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = (blogs) => {
  outPutDiv.append(blogs);
};

module.exports = {
  createProjectsCard,
  createBlogPosts,
};
