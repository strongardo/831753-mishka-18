var menu = document.querySelector(".main-menu");
var burger = document.querySelector(".burger-button");

menu.classList.add("main-menu--closed");
burger.classList.add("main-menu__burger-button--visible");

burger.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (burger.classList.contains("burger-button--open")) {
    burger.classList.remove("burger-button--open");
    burger.classList.add("burger-button--close");
    menu.classList.remove("main-menu--closed");
    menu.classList.add("main-menu--opened");
  } else {
    burger.classList.remove("burger-button--close");
    burger.classList.add("burger-button--open");
    menu.classList.remove("main-menu--opened");
    menu.classList.add("main-menu--closed");
  }

});
