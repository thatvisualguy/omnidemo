// Toggle navigation bar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidenav = document.querySelector('.sidenav');
const element = document.getElementById("categories");
const element2 = document.getElementById("categories2");
const element3 = document.getElementById("categories3");

hamburgerMenu.addEventListener('click', () => {
    sidenav.classList.toggle('active');
  element.classList.toggle('active');
  element2.classList.toggle('active');
  element3.classList.toggle('active');
});


//Sidebar accordion
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";

  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function myAccFunc1() {
  var x = document.getElementById("demoAcc1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";

  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

//Mockup Crousel
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "inline";
  x[myIndex-1].style.animation = "slide-left 1s forwards";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
