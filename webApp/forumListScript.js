//Scroll back to the top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//arrays of activities, the links to the posts and the list of usernames that did the activity
var activityText="";
var userName="";
var activityType="";
var postTitle="";
var link="";

var listOfActivities=[];





addNewActivity("Kyle", "question 1","forumPostIndex.html");
addNewActivity("Kyle","Test Prep?","http://google.ca");
addNewActivity("Kyle","Exam Details","http://google.ca");
addNewActivity("Kyle","Review Session","http://google.ca");
addNewActivity("kKyle","Test Prep","http://google.ca");




//Adds the info into arrays corresponding to the user's name, activity type, link to post and the post title
function activity(userName, postTitle, link) {
  this.userName = userName;
  this.postTitle = postTitle;
  this.link = link;
}

function addNewActivity(userName1, postTitle, link,){
 
    var a =activity(userName1,   postTitle, link);
    

    
    var linkNew =link;

    activityText= postTitle

      var tree = document.createDocumentFragment();
      var link = document.createElement("a");
      link.setAttribute("class", "list-group-item list-group-item-action");
      
      link.setAttribute("href", linkNew);
      
      link.appendChild(document.createTextNode(activityText));


      tree.appendChild(link);
      document.getElementById("listOfActivity").appendChild(tree);

      var tree = document.createDocumentFragment();
      var link = document.createElement("p");
      link.setAttribute("class", "mb-1");
      
      
      link.appendChild(document.createTextNode("Posted By: " + userName));
      tree.appendChild(link);
      document.getElementById("listOfActivity").appendChild(tree);
    };
    

   // listOfActivities.unshift=activity;
    
      


function listAllActivities(){
    
  //for (i = 0; i < listOfActivities.length; i++) {
   // let b = {};
   // b=listOfActivities[i];
   
   
      

  
    
            
         
  
};



