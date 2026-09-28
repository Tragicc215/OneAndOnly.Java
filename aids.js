const bg = document.querySelector('.parallax-bg-shit-thing');
const strength = 20; 

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  const xPercent = (e.clientX / window.innerWidth) - 0.5;
  const yPercent = (e.clientY / window.innerHeight) - 0.5;
  targetX = xPercent * strength;
  targetY = yPercent * strength;
});

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;
  bg.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}
animate();