const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const content = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
  content.style.display = "block";
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  content.style.display = "none";
  menu.style.display = "block";
  close.style.display = "none";
});
