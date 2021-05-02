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


  
    
            
         
  