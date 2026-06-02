const memories = [
  {
      title: "Memória 1",
      image: "https://picsum.photos/800/500?1",
      date: "2026",
      description: "Troque por uma memória real."
  },
  {
      title: "Memória 2",
      image: "https://picsum.photos/800/500?2",
      date: "2026",
      description: "Troque por uma memória real."
  },
  {
      title: "Memória 3",
      image: "https://picsum.photos/800/500?3",
      date: "2026",
      description: "Troque por uma memória real."
  },
  {
      title: "Memória 4",
      image: "https://picsum.photos/800/500?4",
      date: "2026",
      description: "Troque por uma memória real."
  },
  {
      title: "Memória 5",
      image: "https://picsum.photos/800/500?5",
      date: "2026",
      description: "Troque por uma memória real."
  }
];

const intro = document.getElementById("intro");
const sky = document.getElementById("sky");
const startBtn = document.getElementById("startBtn");

const starsDiv = document.getElementById("stars");
const counter = document.getElementById("counter");

const modal = document.getElementById("modal");
const mImg = document.getElementById("mImg");
const mTitle = document.getElementById("mTitle");
const mDate = document.getElementById("mDate");
const mDesc = document.getElementById("mDesc");

const closeBtn = document.getElementById("closeBtn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

counter.textContent =
  `${memories.length} memórias guardadas neste céu`;

startBtn.addEventListener("click", () => {

    intro.classList.add("hidden");
    sky.classList.remove("hidden");

    bgm.play();

    musicBtn.textContent =
        "🔇 Desligar Música";

});

const starElements = [];

memories.forEach((memory) => {

  const star = document.createElement("div");

  star.className = "star";

  star.style.left =
      (10 + Math.random() * 80) + "%";

  star.style.top =
      (10 + Math.random() * 70) + "%";

  star.addEventListener("click", () => {

      mImg.src = memory.image;
      mTitle.textContent = memory.title;
      mDate.textContent = memory.date;
      mDesc.textContent = memory.description;

      modal.classList.remove("hidden");
  });

  starsDiv.appendChild(star);

  starElements.push(star);
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {

  if (e.target === modal) {
      modal.classList.add("hidden");
  }

});

let constellationsVisible = false;

document.getElementById("constBtn")
.addEventListener("click", () => {

  constellationsVisible =
      !constellationsVisible;

  ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
  );

  if (!constellationsVisible) {
      return;
  }

  ctx.strokeStyle =
      "rgba(255,255,255,0.4)";

  ctx.lineWidth = 1.5;

  for (
      let i = 0;
      i < starElements.length - 1;
      i++
  ) {

      const a =
          starElements[i]
          .getBoundingClientRect();

      const b =
          starElements[i + 1]
          .getBoundingClientRect();

      ctx.beginPath();

      ctx.moveTo(
          a.left + a.width / 2,
          a.top + a.height / 2
      );

      ctx.lineTo(
          b.left + b.width / 2,
          b.top + b.height / 2
      );

      ctx.stroke();
  }

});

for (let i = 0; i < 250; i++) {

  const star =
      document.createElement("div");

  star.classList.add(
      "background-star"
  );

  star.style.left =
      Math.random() * 100 + "%";

  star.style.top =
      Math.random() * 100 + "%";

  star.style.animationDelay =
      Math.random() * 5 + "s";

  document.body.appendChild(star);
}

const musicBtn = document.getElementById("musicBtn");
const bgm = document.getElementById("bgm");

musicBtn.addEventListener("click", () => {

    if (bgm.paused) {

        bgm.play();

        musicBtn.textContent =
            "🔇 Desligar Música";

    } else {

        bgm.pause();

        musicBtn.textContent =
            "🎵 Tocar Música";

    }

});