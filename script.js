const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const galleryBtn = document.getElementById("galleryBtn");
const galleryMenu = document.getElementById("galleryMenu");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  galleryMenu.classList.remove("active");
});

galleryBtn.addEventListener("click", () => {
  galleryMenu.classList.toggle("active");
});

/* Close sidebar when clicking a link */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    galleryMenu.classList.remove("active");
  });
});


