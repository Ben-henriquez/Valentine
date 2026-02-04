document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     VINILO (Index.html)
     ========================= */
  const vinyl = document.getElementById("vinyl");
  const openVinylBtn = document.getElementById("openVinylBtn");

  function toggleVinyl() {
    if (!vinyl) return;
    vinyl.classList.toggle("open");
  }

  if (vinyl) {
    vinyl.addEventListener("click", toggleVinyl);
  }

  if (openVinylBtn) {
    openVinylBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleVinyl();
    });
  }

  /* =========================
     FINAL: botón NO desaparece
     ========================= */
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      noBtn.style.display = "none";
    });
  }

});
