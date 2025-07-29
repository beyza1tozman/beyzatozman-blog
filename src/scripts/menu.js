document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector(".nav-links")?.classList.toggle("expanded");
});

const nav = document.querySelector("nav");

if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });
}
