/* --- Show Menu --- */
function showMenu() {
  var x = document.getElementById("menu");
  x.classList.toggle("menu-animation");
}

document.onclick = function(e){
    var x = document.getElementById("menu");
    if(e.target.id !== "burgerMenu" && e.target.id !== "menu"){
        x.classList.remove("menu-animation");
    }
}

/* --- DarkMode --- */
function darkMode() {
  var x = document.getElementById("body");
  var y = document.getElementById("menu");
  var product = document.getElementById("product");
  var team = document.getElementById("team");
  var contact = document.getElementById("contact");
  var about = document.getElementById("about");
  x.classList.toggle("dark-mode");
  y.classList.toggle("dark-mode");
  product.classList.toggle("dark-mode-menu");
  team.classList.toggle("dark-mode-menu");
  contact.classList.toggle("dark-mode-menu");
  about.classList.toggle("dark-mode-menu");
}

/* --- SlideShow --- */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";

} 