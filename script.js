const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.addEventListener("mousedown", dragStart);
});

function dragStart(e) {
  selectedCube = e.target;

  const rect = selectedCube.getBoundingClientRect();

  // Calculate offset so cube follows mouse naturally
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragEnd);
}

function dragging(e) {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();
  const cubeRect = selectedCube.getBoundingClientRect();

  let newLeft = e.clientX - containerRect.left - offsetX;
  let newTop = e.clientY - containerRect.top - offsetY;

  // Boundary conditions
  newLeft = Math.max(0, Math.min(newLeft, containerRect.width - cubeRect.width));
  newTop = Math.max(0, Math.min(newTop, containerRect.height - cubeRect.height));

  selectedCube.style.left = newLeft + "px";
  selectedCube.style.top = newTop + "px";
}

function dragEnd() {
  selectedCube = null;
  document.removeEventListener("mousemove", dragging);
  document.removeEventListener("mouseup", dragEnd);
}
