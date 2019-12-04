var popup = document.querySelector(".modal");
var order = document.querySelector(".popular-product__order-button");

order.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (popup.classList.contains("modal--close")) {
    popup.classList.remove("modal--close");
    popup.classList.add("modal--show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.add("modal--close");
    }
  }
});
