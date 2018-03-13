


var projects = [
    {
        id: "project1", 
        title: "Kids Corner", 
        imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
        description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        githubUrl: "https://github.com/Mehret17"
      },

    {
        id: "project2",
        title: "Mom's Corner", 
        imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        githubUrl: "https://github.com/Mehret17"
    },

    {
    id: "project3",
    title: "Fooda", 
    imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    githubUrl: "https://github.com/Mehret17"
    } , 

    {
    id: "project4",
    title:"Gigi's", 
    imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    githubUrl: "https://github.com/Mehret17"
    },
    
    {
    id: "project5",
    title:"Jojo's playground", 
    imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    githubUrl: "https://github.com/Mehret17"
    },
   
    {
    id: "project6",
    title:"Magic zone", 
    imageUrl: "http://www.bilgihocam.com/wp-content/uploads/2015/12/kedi-resimleri-17.jpg", 
    description: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    githubUrl: "https://github.com/Mehret17"
    } 
  ];

  // function createProjectsCard(project) {
  // }
  
  var domProject ="";
  function createProjectsCard(){

    projects.forEach(function(projects){
      domProject += "<div class='projectsCard'>";
      domProject += "<h3>" + projects.title + "</h1>";
      domProject += "<img src=" + projects.imageUrl +">";
      domProject += "<p>" + projects.description + "</p>"
      domProject += "<a href=" + projects.githubUrl + ">click here for for more information</a>"
      domProject += "</div>";
      printToDom(domProject, 'my-project')
    })
  }

  function printToDom(domString,divId) {
      document.getElementById(divId).innerHTML = domString;
  }

    createProjectsCard();
