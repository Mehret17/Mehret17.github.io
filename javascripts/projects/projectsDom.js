
const projectDiv = $('#myProjects');

const createProjectsCard = (projectArray) => {
  let projectString = '';
  projectArray.forEach((projects) => {
    projectString += `<div class='projectsCard'>`;
    projectString += `<h3>${projects.title}</h3>`;
    projectString += `<img src="${projects.imageUrl}">`;
    projectString += `<p>${projects.description}</p>`;
    projectString += `<a href="${projects.githubUrl}">Click here for for more information</a>`;
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
