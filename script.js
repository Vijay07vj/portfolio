//NavScroll......
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});
//Active Toggle........
let AllNavLinkA = document.querySelectorAll(".navlist li a");
//Active Add ......
AllNavLinkA.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});
//Acctive Remove
const removeActive = () =>
  AllNavLinkA.forEach((item) => {
    item.classList.remove("active");
  });
//Nav Links Toggler......
let menuBars = document.querySelector("nav button");
let navlinks = document.querySelector(".navlist");
menuBars.addEventListener("click", () => {
  navlinks.classList.toggle("navlist-block");
});
