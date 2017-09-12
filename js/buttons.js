var link = document.querySelector(".buttons_serch");
var popup = document.querySelector(".form");
var close = document.querySelector(".form-hide");

link.addEventListener("click", function () {
    popup.classList.toggle("form-hide");
});

close.addEventListener("click", function () {
    popup.preventDefault();
    popup.classList.remove("form");
});