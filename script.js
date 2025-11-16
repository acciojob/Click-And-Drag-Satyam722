// Your code here.
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// Mouse Down → Start dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Mouse Leave → Stop dragging
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Up → Stop dragging
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Move → Scroll container
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  slider.scrollLeft = scrollLeft - walk;
});
