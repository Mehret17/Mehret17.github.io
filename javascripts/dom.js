const projectDiv = $('#myProjects');

const createProjectsCard = projectArray => {
  let projectString = '';
  projectArray.forEach(projects => {
    projectString += `<div class="container-fluid">`;
    projectString += `<div class="row">`;
    projectString += `<div class="col-sm-6">`;
    projectString += `<div class='thumbnail projectsCard'>`;
    projectString += `<img src="${projects.thumbnail}"</h3>`;
    projectString += `<div class="caption">`;
    projectString += `<p class="projectDescription">${
      projects.description
    }</p>`;
    projectString += `<p><a id="github"href="${
      projects.github
    }" class="btn btn-primary text-center github">View on Github</a> <a id="github"href="${
      projects.url
    }" class="btn btn-primary text-center project">View Project</a> </p>`;
    projectString += `</div>`;
    // projectString += `</div>`;
    projectString += `</div>`;
    projectString += `</div>`;
  });
  printProject(projectString);
};

const printProject = projects => {
  projectDiv.append(projects);
};

const outPutDiv = $('#myBlogs');

const createBlogPosts = blogsArray => {
  let domString = '';
  blogsArray.forEach(blogs => {
    domString += `<div class="col-md-6 col-md-offset-3">`;
    // domString += `<div class= "col-md-6 col-md-offset-3">`;
    domString += `<div class = "blogPost">`;
    domString += `<p class ="blogT">${blogs.date}</p>`;
    domString += `<h3 class="blogT">${blogs.title}</h3>`;
    domString += `<p class=blogPost>${blogs.post}</p>`;
    domString += `</div>`;
    // domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = blogs => {
  outPutDiv.append(blogs);
};

const techDiv = $('#techs');

const createTech = techsArray => {
  let techString = '';
  techsArray.forEach(techs => {
    techString += `<div class="techIcons">`;
    techString += `<img class="techImg" src="${techs.img}">`;
    techString += `<p class="techName">${techs.name}</p>`;
    techString += `</div>`;
  });
  printTech(techString);
};

const printTech = techs => {
  techDiv.append(techs);
};

module.exports = {
  createProjectsCard,
  createBlogPosts,
  createTech,
};
