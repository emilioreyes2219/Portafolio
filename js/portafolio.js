const barraNav = document.getElementById("barraNav");
const botonArriba = document.getElementById("botonArriba");

window.addEventListener("scroll", () => {
  // Cuando bajamos más de 50px, la barra de navegación se vuelve sólida
  if (window.scrollY > 50) {
    barraNav.classList.add("nav-encogida");
  } else {
    barraNav.classList.remove("nav-encogida");
  }

  // El botón de subir arriba aparece después de bajar 300px
  botonArriba.style.display = window.scrollY > 300 ? "flex" : "none";
});

botonArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
