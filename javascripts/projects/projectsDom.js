
const projectDiv = $('#myProjects');

const createProjectsCard = (projectArray) => {
  let projectString = '';
  projectArray.forEach((projects) => {
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
  });
  printProject(projectString);
};

const printProject = (projects) => {
  projectDiv.append(projects);
};

module.exports = {
  createProjectsCard,
};
