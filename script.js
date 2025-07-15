// Typing effect for header
const nameText = "Satyanarayan Bairwa";
let i = 0;
function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("typing").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = typeWriter;

// Scroll animations
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});
const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
