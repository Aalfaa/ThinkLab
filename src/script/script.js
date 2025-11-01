document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("bg-[#2D3142]", "shadow-md");
    else nav.classList.remove("bg-[#2D3142]", "shadow-md");
  });
});
