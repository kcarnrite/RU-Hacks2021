//Scroll back to the top button
//Get the button:
mybutton = document.getElementById("myBtn");
var likes=0;
var likes2=0;
var isCounted= false;
var isCounted2 = false;

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

  for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
      event.currentTarget.classList.toggle('on');
      
    });
  }

  document.getElementById("btn").addEventListener("click", function() {
    if (isCounted==false){
        likes+=1;
        isCounted=!isCounted;
        document.getElementById('numberOfLikes').innerHTML =likes;
    }  
   
    if (isCounted!=false){
        likes-=1;
        isCounted=!isCounted;
        document.getElementById('numberOfLikes').innerHTML =likes;
    }
  
});

    document.getElementById("btn2").addEventListener("click", function() {
        if (isCounted2!=true){
            likes2+=1;
        isCounted2=!isCounted2;
        document.getElementById('numberOfLikes').innerHTML =likes2;
        }  
        
        if (isCounted2=true) {
        likes2-=1;
        isCounted2=!isCounted2;
        document.getElementById('numberOfLikes').innerHTML =likes2;
        } 
        
    });

  document.getElementById('obj').innerHTML += obj1.video.value;
  document.getElementById('description').innerHTML += "This is totes helpful!";
  document.getElementById('title').innerHTML +="How to embed videos";
  
  document.getElementById('numberOfLikes').innerHTML =likes;

  document.getElementById('obj2').innerHTML += obj2.video.value;
  document.getElementById('description2').innerHTML += "This Khan Academy Video Saved My Life No Cap";
  document.getElementById('title2').innerHTML +="HTML for Dummies";
  
  document.getElementById('numberOfLikes2').innerHTML =likes2;
  
  
  
  
