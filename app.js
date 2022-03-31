const searchButton = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const burgerMenu = document.querySelector(".burger");
const smallNav = document.querySelector(".under-nav");
const slider = document.querySelector(".slider");
const textSlider = document.querySelector(".text-slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const footerArrow = document.querySelector("#footer-arrow");

const handleSearchOpen = () => {
  searchContainer.classList.toggle("open");
};

const handleOpenMenu = () => {
  smallNav.classList.toggle("open");
};

burgerMenu.addEventListener("click", handleOpenMenu);

searchButton.addEventListener("click", handleSearchOpen);

var sectionIndex = 0;

rightArrow.addEventListener("click", () => {
  if (sectionIndex >= 2) {
    return;
  }
  sectionIndex += 1;
  slider.style.transform = "translate(" + sectionIndex * "-33.333333" + "%)";
  textSlider.style.transform =
    "translate(" + sectionIndex * "-33.333333" + "%)";
});

leftArrow.addEventListener("click", () => {
  if (sectionIndex <= 0) {
    return;
  }
  sectionIndex -= 1;
  slider.style.transform = "translate(" + sectionIndex * "-33.333333" + "%)";
  textSlider.style.transform =
    "translate(" + sectionIndex * "-33.333333" + "%)";
});

const handleRadioChange = (value) => {
  sectionIndex = Number(value);
  slider.style.transform = "translate(" + sectionIndex * "-33.333333" + "%)";
  textSlider.style.transform =
    "translate(" + sectionIndex * "-33.333333" + "%)";
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

footerArrow.addEventListener("click", scrollToTop);
