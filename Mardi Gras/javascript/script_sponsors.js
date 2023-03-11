/*************** Toggle menu button ******************/

const menuToggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];

menuToggleButton.addEventListener("click", (event) => {
  navbar.classList.toggle("active");
  event.preventDefault();
});

/*************** Form validation ******************/

// function formValidate() {
//   let ant = document.forms["contactsForm"]["form_username"].value;
//   ant = ant.trim();
//   if (ant.length < 2) {
//     alert(
//       `Pay attention: "Your n ame" field should contain at least two characters! 😱`
//     );
//     return false;
//   }
//   let bee = document.forms["contactsForm"]["form_user_lastname"].value;
//   bee = bee.trim();
//   if (bee.length < 2) {
//     alert(
//       `Pay attention: "Last name" field should contain at least two characters! 😫`
//     );
//     return false;
//   }
//   let dragonfly = document.forms["contactsForm"]["form_email"].value;
//   dragonfly = dragonfly.trim();
//   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(dragonfly)) {
//     alert(`Pay attention: Invalid email 😥`);
//     return false;
//   }
//   let cicada = document.forms["contactsForm"]["form_message"].value;
//   cicada = cicada.trim();
//   if (cicada.length < 10) {
//     alert(`We won't accept message this short 😠😒 at least 10 characters 😤`);
//     return false;
//   }
// }
/*************** FAQ accordion ******************/

// let faqButton = document.getElementsByClassName("faq_section");
// for (i = 0; i < faqButton.length; i++) {
//   faqButton[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// console.log(faqButton.length);

/*************** Modals  ******************/

const modal = document.getElementById("modalSponsor1");
const sponsorIcon1 = document.getElementsByClassName("sponsors_container")[0];
const closeBtn = document.getElementsByClassName("modal_close")[0];

sponsorIcon1.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*************** Image slider ******************/
// let slideIndex = 1;
// showSlides(slideIndex);

// function slideNext(n) {
//   showSlides((slideIndex += n));
// }
// function slidePrev(n) {
//   showSlides((slideIndex -= n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("sliderImage");
//   console.log(slides);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = 5;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
//   console.log(slideIndex);
//   console.log([slideIndex - 1]);
// }
