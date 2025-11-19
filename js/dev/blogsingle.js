import "./app.min.js";
/* empty css          */
const workItems = document.querySelectorAll(".body-work__item");
workItems.forEach((item) => {
  item.addEventListener("click", () => {
    workItems.forEach((i) => {
      i.classList.remove("item-content-work--active");
    });
    item.classList.add("item-content-work--active");
  });
});
const workFooter = document.querySelector(".footer");
if (workFooter) {
  workFooter.classList.add("footer--simple");
}
