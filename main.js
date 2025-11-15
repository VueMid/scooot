const menu = document.querySelector(".header__mb-nav");
const openIcon = document.querySelector(".header__open-burger-icon");
const closeIcon = document.querySelector(".header__close-burger-icon");
const burgerBtn = document.querySelector(".header__burger-button");
burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
