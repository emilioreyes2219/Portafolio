const botonArriba = document.getElementById("botonArriba");

window.addEventListener("scroll", () => {
  botonArriba.style.display = window.scrollY > 300 ? "flex" : "none";
});

botonArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
