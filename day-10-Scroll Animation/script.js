const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", Checkboxes);

Checkboxes();
function Checkboxes() {
  const treggerBottem = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < treggerBottem) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
