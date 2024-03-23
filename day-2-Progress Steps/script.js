const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let CurrentActive = 1;

next.addEventListener("click", () => {
  CurrentActive++;
  if (CurrentActive > circle.length) {
    CurrentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  CurrentActive--;
  if (CurrentActive < 1) {
    CurrentActive = 1;
  }
  update();
});
function update() {
  circle.forEach((circle, idx) => {
    if (idx < CurrentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  if (CurrentActive === 1) {
    prev.disabled = true;
  } else if (CurrentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
