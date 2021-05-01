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
var obj1 = {"video": {
    "value": "<iframe title='YouTube video player' type=\"text/html\" width='500' height='290' src='http://www.youtube.com/embed/W-Q7RMpINVo' frameborder='0' allowFullScreen></iframe>"
  }}

  var obj2 = {"video": {
    "value": "<iframe title='YouTube video player' type=\"text/html\" width='500' height='290' src='https://www.youtube.com/embed/ItZN6o0ylao' frameborder='0' allowFullScreen></iframe>"
  }}
  document.getElementById('obj').innerHTML += obj1.video.value;
  document.getElementById('description').innerHTML += "This is totes helpful!";
  document.getElementById('title').innerHTML +="How to embed videos";

  document.getElementById('obj2').innerHTML += obj2.video.value;
  document.getElementById('description2').innerHTML += "This Khan Academy Video Saved My Life No Cap";
  document.getElementById('title2').innerHTML +="HTML for Dummies";
  
  
  
