// ===== Personalización =====
const FROM_NAME = "Benja";
const FINAL_TEXT = "Confirmado: tenemos “tour date” 💖 Te escribo para coordinar.";
const NOTE_TEXT  = "Si aceptas, prometo una noche linda, música y un recuerdo.";

// ===== DOM =====
const hearts = document.getElementById("hearts");
const env = document.getElementById("env");
const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const status = document.getElementById("status");

document.getElementById("fromName").textContent = FROM_NAME;
document.getElementById("finalText").textContent = FINAL_TEXT;
document.getElementById("noteText").textContent = NOTE_TEXT;

// ===== corazones =====
const colors = ["#ffb4d6","#b9a6ff","#7dffcf","#ffffff"];
function spawnHeart(){
  const h = document.createElement("div");
  h.className = "heart";
  h.style.left = Math.random()*100 + "vw";
  h.style.bottom = "-20px";
  h.style.background = colors[Math.floor(Math.random()*colors.length)];
  h.style.animationDuration = (4 + Math.random()*4) + "s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(), 8000);
}
setInterval(spawnHeart, 250);

// ===== sobre =====
function toggleEnvelope(){
  env.classList.toggle("opened");
  status.textContent = env.classList.contains("opened")
    ? "Ahora elige 💖"
    : "Tip: toca el sobre ✉️";
}
env.addEventListener("click", toggleEnvelope);
openBtn.addEventListener("click", toggleEnvelope);

// ===== botones =====
yesBtn.addEventListener("click", ()=>{
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", ()=>{
  overlay.classList.remove("show");
});

// botón No se escapa
function moveNo(){
  const x = Math.random()*120 - 60;
  const y = Math.random()*40 - 20;
  noBtn.style.transform = `translate(${x}px,${y}px)`;
}
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseenter", moveNo);

document.addEventListener("DOMContentLoaded", () => {
  // ===== VINILO (Index) =====
  const vinyl = document.getElementById("vinyl");
  const openVinylBtn = document.getElementById("openVinylBtn");

  function toggleVinyl(){
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

  // ===== FINAL: botón NO desaparece =====
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      noBtn.style.display = "none";
    });
  }
});
