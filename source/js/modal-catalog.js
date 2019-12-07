var popup = document.querySelector(".modal");
var carts = document.querySelectorAll(".product__cart-button");

console.log(carts.length);

for (var i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (popup.classList.contains("modal--close")) {
      popup.classList.remove("modal--close");
      popup.classList.add("modal--show");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.add("modal--close");
    }
  }
});
