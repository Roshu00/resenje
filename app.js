const searchButton = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const burgerMenu = document.querySelector(".burger");
const smallNav = document.querySelector(".under-nav");

const handleSearchOpen = () => {
  searchContainer.classList.toggle("open");
};

const handleOpenMenu = () => {
  smallNav.classList.toggle("open");
};

burgerMenu.addEventListener("click", handleOpenMenu);

searchButton.addEventListener("click", handleSearchOpen);
