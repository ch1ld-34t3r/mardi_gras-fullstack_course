/*************** Toggle menu button ******************/

const menuToggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];

menuToggleButton.addEventListener("click", (event) => {
  navbar.classList.toggle("active");
  event.preventDefault();
});

/*************** Image slider ******************/
let slideIndex = 1;
showSlides(slideIndex);

function slideNext(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliderImage");
  console.log(slides);
  console.log(slideIndex);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = 5;
  }
  // if (n < slides.length) {
  //   slideIndex = slides.length;
  // }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  console.log(slideIndex);
}
