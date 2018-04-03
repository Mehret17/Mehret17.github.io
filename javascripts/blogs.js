 

// E5 js
  // var blogString = "";
  // function createBlogPosts(){
  //     blogs.forEach(function(blogs) {
  //         blogString += "<div class='blogPost'>";
  //         blogString += "<h2>" + blogs.title + "</h2>";
  //         blogString += "<h4>" + blogs.date + "</h4>";
  //         blogString += "<p>" + blogs.post + "</p>";
  //         blogString += "</div>";
  //         printToDom (blogString, 'my-blogs')
  //     })
  // }

  //   function printToDom(blogString, divId) {
  // document.getElementById(divId).innerHTML = blogString
  // }

  // createBlogPosts();

// ES6 JS

const printToDom = (domString, divId) => {
   document.getElementById(divId).innerHTML = domString;
};

  const createBlogPosts = (blogsArray) => {
    let domString=  '';
    blogsArray.forEach((blogs) =>{
      domString += `<div class = "blogPost">`;
      domString +=    `<h2>${blogs.title}</h2>`;
      domString +=    `<h4>${blogs.date}</h4>`;
      domString +=    `<p>${blogs.post}</p>`;
      domString += `</div>`; 
    });
  printToDom (domString, 'my-blogs');
  };


  function executeThisFunctionAfterFieLoads () {
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    createBlogPosts (data.blogs);
  }

  function WIW () {
    console.log("something went wrong");
  }

  const startApplication = () => {
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener("load",executeThisFunctionAfterFieLoads);
    myRequest.addEventListener("error",WIW);
    myRequest.open("GET", "/db/blogs.json");
    myRequest.send();
    console.log ("myrequest",myRequest);
  }

  startApplication();
