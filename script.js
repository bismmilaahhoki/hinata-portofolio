// TOGGLE DARK MODE + SOUND
const btn = document.getElementById("toggle");
const soft = document.getElementById("softSound");
const dark = document.getElementById("darkSound");

let darkMode = false;

btn.onclick = () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");

  if (darkMode) {
    dark.play();
  } else {
    soft.play();
  }
};

// CURSOR EFFECT
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// MENU TOGGLE (RESPONSIVE)
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}
// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
// NAVBAR ACTIVE SCROLL
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// PARTICLE CHAKRA
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(167,139,250,0.4)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();
// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});
// PARALLAX EFFECT
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const hero = document.querySelector(".parallax");

  hero.style.backgroundPositionY = scroll * 0.5 + "px";
});