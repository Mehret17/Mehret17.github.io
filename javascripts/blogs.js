var blogs = [
    {
      id: "blog1", 
      title: "Week 1", 
      date: "02/12/2018", 
      post: "In the first week of starting school we’ve covered these three basic topics HTML, CSS and GIT. CSS is one of the topic I still struggle with. Whether it is identifying selector to add CSS to the correct tag/attribute or knowing what kind/types of elements to use to get to the desired result. After working on my first assignment I’ve realized that CSS is trial and error for me – by knowing what to research/google the end goal can be achieved. All the topics covered last week have their own interesting things,however what stood the most for me was Git/Github – I found this to be very interesting due to the fact that it makes collaboration so much easier and meaningful. It also can be considered as an encyclopedia of code where large number of codes exist in it that are used to build software.As much as I enjoy my time at NSS – something I didn’t know/realize before is how to manage my time wisely. With all the assignments and life going on I feel like I need to take a class that teaches “How to manage your time wisely”."
      },
    {
      id: "blog2", 
      title: "Week 2", 
      date: "02/19/2018", 
      post: "Ready or not here comes <strong>JavaScript</strong> – JS has been a bit challenging to me. I am still wrapping my head around Arrays, For loops, Objects and Functions. Even though I feel like the class is going fast I’m trying to take it slow and learn one thing at a time. I am sure that I will get better at solving any kind of Javascript problem but I still need to do a lot of practicing and reading. The Js Array challenge was the most difficult for me this week trying to figure out how to go about solving the problem."
      },
    {
      id: "blog3", 
      title: "Week 3", 
      date: "02/26/2018", 
      post: "Advance array method was one of the topic covered on this week’s lesson. Once I get the hang of it I am positive that I will be grateful for these methods but with my current state not quite there yet but will definitely be soon. We also covered how team mates work in one project from beginning to end. Coming up with ideas on how to design the web page, listing what kind of data is needed and assigning tickets for each task. Went over free framework tools and how to use them – found this one to be very interesting – where the frame work tool we used can be shared and at the same be edited by different team mates makes collaboration so easy."
      }
  ];


  var blogString = "";
  function createBlogPosts(){
      blogs.forEach(function(blogs) {
          blogString += "<div class='blogPost'>";
          blogString += "<h2>" + blogs.title + "</h2>";
          blogString += "<h4>" + blogs.date + "</h4>";
          blogString += "<p>" + blogs.post + "</p>";
          blogString += "</div>";
          printToDom (blogString, 'my-blogs')
      })
  }

    function printToDom(blogString, divId) {
  document.getElementById(divId).innerHTML = blogString
  }

  createBlogPosts();