
  
  const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
  };

  const createProjectsCard = (array) => {
    let domString = "";
    array.forEach((projects)=>{
      domString += `<div class='projectsCard'>`;

      domString +=    `<h3>${projects.title}</h3>`;
      domString +=    `<img src="${projects.imageUrl}">`;
      domString +=    `<p>${projects.description}</p>`;
      domString +=    `<a href="${projects.githubUrl}">Click here for for more information</a>`;
      domString += `</div>`;
    })
    printToDom(domString, 'my-project') 
  };

 
function executeThisFunctionAfterFileLoads () {
  const data = JSON.parse(this.responseText);
  console.log ("data",data);
  createProjectsCard (data.projects);
}

function WIW () {
  console.log ("something went wrong");
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest ();
  myRequest.addEventListener("load",executeThisFunctionAfterFileLoads);
  myRequest.addEventListener("error",WIW);
  myRequest.open("GET","/db/project.json");
  myRequest.send ();
  console.log("myrequest",myRequest);
}

startApplication();

  // var domProject ="";
  // function createProjectsCard(){

  //   projects.forEach(function(projects){
  //     domProject += "<div class='projectsCard'>";
  //     domProject += "<h3>" + projects.title + "</h3>";
  //     domProject += "<img src=" + projects.imageUrl +">";
  //     domProject += "<p>" + projects.description + "</p>"
  //     domProject += "<a href=" + projects.githubUrl + ">click here for for more information</a>"
  //     domProject += "</div>";
  //     printToDom(domProject, 'my-project')
  //   })
  // }

  // function printToDom(domString,divId) {
  //     document.getElementById(divId).innerHTML = domString;
  // }

  //   createProjectsCard();
