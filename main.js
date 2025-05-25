const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

const particulas = [];

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particulas) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = p.tipo === "eletron" ? "blue" : "gray";
    ctx.fill();
  }
}

function loop() {
  desenhar();
  requestAnimationFrame(loop);
}

canvas.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  particulas.push({ x, y, tipo: "eletron" });
});

loop();
