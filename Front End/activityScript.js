
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
var activityText;
var activity;
var listOfActivities=[];


addNewActivity("kyle", "post", "google.ca", "backend");
listAllActivities(listOfActivities);

//Adds the info into arrays corresponding to the user's name, activity type, link to post and the post title
function addNewActivity(userName, activityType, link, postTitle){
 
    activity ={userName, activityType,  postTitle, link,};
    listOfActivities.unshift=activity;
};

function listAllActivities(listOfActivities){
    for (i = 0; i < listOfActivities.length; i++) {
        activity=listOfActivities[i];
        if (activityType=="post"){
            activityText= activty.userName+" " +activty.activityType +"ed a new forum: " + activity.PostTitle;
            console.log(activityText);

        }
        else if (activityType=="comment"){
            activityText= activty.userName+" " +activty.activityType +"ed on: " + activity.PostTitle;
            console.log(activityText);
        }
        else if (activityType=="video"){
            activityText= activty.userName+" " +activty.activityType +"ed a video: " + activity.PostTitle;
            console.log(activityText);
      }   
    };
};



