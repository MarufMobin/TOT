// const headerSection = document.querySelector(".header-section");

// window.onscroll = function () {
//   let top = window.scrollY;
//   console.log(top);
//   if (top > 0) {
//     // headerSection.style.backgroundColor = "red";
//     headerSection.classList.add("active");
//   } else {
//     // headerSection.style.backgroundColor = "black";
//     headerSection.classList.remove("active");
//   }
// };

/* Hambarger Menu */
let hambargerMenu = document.querySelector(".hamburger-menu");
let showingMenu = document.querySelector(".ham-header-inner-menu");
hambargerMenu.addEventListener(
  "click",
  (hambargerMenu = () => {
    if (showingMenu.style.display == "none") {
      showingMenu.style.display = "block";
    } else {
      showingMenu.style.display = "none";
    }
  })
);

// Accordiant section
/* 
// Accordian er Handler
const accordionControllerOne = document.querySelector(
  ".accordion-controller-one"
);
const accordionControllerTwo = document.querySelector(
  ".accordion-controller-two"
);
const accordionControllerTheree = document.querySelector(
  ".accordion-controller-three"
);

// Accordian er Div
const accordianDivOne = document.querySelector(".accordion-content-one");
const accordianDivTwo = document.querySelector(".accordion-content-two");
const accordianDivThree = document.querySelector(".accordion-content-three");

// Accordiant er Event handler
accordionControllerOne.addEventListener("click", () => {
  console.log("hello");
  accordianDivOne.style.display = "block";
  accordianDivTwo.style.display = "none";
  accordianDivThree.style.display = "none";
});
accordionControllerTwo.addEventListener("click", () => {
  accordianDivOne.style.display = "none";
  accordianDivTwo.style.display = "block";
  accordianDivThree.style.display = "none";
});
accordionControllerTheree.addEventListener("click", () => {
  accordianDivOne.style.display = "none";
  accordianDivTwo.style.display = "none";
  accordianDivThree.style.display = "block";
}); */

/* 
  -> Using Button and make a function
  -> active class 
  -> passing id
*/

// Using Active class

const accordionControllerOne = document.querySelector(
  ".accordion-controller-one"
);
const accordionControllerTwo = document.querySelector(
  ".accordion-controller-two"
);
const accordionControllerTheree = document.querySelector(
  ".accordion-controller-three"
);

const acoDivOne = document.querySelector(".accordion-content-one");
const acoDivTwo = document.querySelector(".accordion-content-two");
const acoDivThree = document.querySelector(".accordion-content-three");

document.addEventListener("click", () => {
  acoDivOne.classList.add("disactive-aco");
  acoDivOne.classList.remove("disactive-aco");
});
document.addEventListener("click", () => {
  acoDivTwo.classList.add("disactive-aco");
  acoDivTwo.classList.remove("disactive-aco");
});
document.addEventListener("click", () => {
  acoDivThree.classList.add("disactive-aco");
  acoDivThree.classList.remove("disactive-aco");
});

// Slider are here
const sliders = document.querySelectorAll(".slider");
var counter = 0;

sliders.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});
const goNext = () => {
  if (sliders.length - 1 > counter) {
    counter++;
    slideImge();
  }
};
const goPre = () => {
  if (counter) {
    counter--;
    slideImge();
  }
};
const slideImge = () => {
  sliders.forEach((slider) => {
    slider.style.transform = `translateX( -${counter * 100}%) `;
  });
};
