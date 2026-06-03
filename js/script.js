const memories = [
  {
      title: "Memória",
      image: "./images/memoria_1.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 2",
      image: "./images/memoria_2.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 3",
      image: "./images/memoria_3.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 4",
      image: "./images/memoria_4.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 5",
      image: "./images/memoria_5.jpeg",
      date: "",
      description: "Irmãos por acaso, amigos por opção."
  },
  {
      title: "Memória 6",
      image: "./images/memoria_6.jpeg",
      date: "",
      description: "Uma pausa pra respirar, você nunca me desgastou...como pode uma memoria ser capaz de aquecer meu coração?"
  },
  {
      title: "Memória 7",
      image: "./images/memoria_7.jpeg",
      date: "",
      description: "Um recorte de uns dos melhores dias da minha vida, você me dá forças pra enfrentar o futuro mesmo com medo, lembrar de você já é o suficiente..."
  },
  {
      title: "Memória 8",
      image: "./images/memoria_8.jpeg",
      date: "",
      description: "Com você eu enxergo a vida com lentes mais gentis"
  },
  {
      title: "Memória 9",
      image: "./images/memoria_9.jpeg",
      date: "",
      description: "Anita lindinha feliz aniversário!!! Viva e aproveite cada momento do seu dia e me guarde um bolinho kakkakakka."
  },
  {
      title: "Memória 10",
      image: "./images/memoria_10.jpeg",
      date: "",
      description: "Nesquik sou muito grata de passar o meu ensino médio com você, obrigada por sempre estar lá (raramente faltou), e obrigada por zoar o Lucas com a gente a qualquer momento (não deixa ele saber pq ele que tá montando tudo isso hihi)."
  },
  {
      title: "Memória 11",
      image: "./images/memoria_11.jpeg",
      date: "",
      description: "Enfim, gosto e admiro demais a sua pessoa e espero te levar pra vida toda com a sua risada inédita e seus games que nunca tem fim, te amo gatinha você merece o mundo todo💋💋."
  },
  {
      title: "Memória 12",
      image: "./images/memoria_12.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 13",
      image: "./images/memoria_13.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 14",
      image: "./images/memoria_14.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 15",
      image: "./images/memoria_15.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 16",
      image: "./images/memoria_16.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 17",
      image: "./images/memoria_17.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 18",
      image: "./images/memoria_18.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 19",
      image: "./images/memoria_19.jpeg",
      date: "",
      description: ""
  },
  {
      title: "Memória 20",
      image: "./images/memoria_20.jpg",
      date: "",
      description: "Deitar o nootbook para ler simplesmente genial (mas dava uma dor na minha alma KKKKK)"
  },
  {
      title: "Memória 21",
      image: "./images/memoria_21.jpg",
      date: "",
      description: "Muito bom a Ketlyn no fundo olhando pro nada kkkk, esse dia foi muito foda."
  },
  {
      title: "Memória 22",
      image: "./images/memoria_22.jpg",
      date: "",
      description: "Achou que eu não ia guardar essas fotos >= ) tenho todos os ângulos dessa sessão de fotos rsrsrs"
  },
  {
      title: "Memória 23",
      image: "./images/memoria_23.jpg",
      date: "",
      description: "Dispensa comentários, descobri a existência dessa foto um tempo depois ksksks"
  },
  {
      title: "Memória 24",
      image: "./images/memoria_24.jpg",
      date: "",
      description: "Simplesmente o melhor grupo!!! (queria muito achar a foto da peste negra... =[ )"
  },
  {
      title: "Memória 25",
      image: "./images/memoria_25.jpg",
      date: "",
      description: "TOP elementos B) acho muito foda o sapato joaninha kskskks."
  },
  {
      title: "Memória 26",
      image: "./images/memoria_26.jpeg",
      date: "",
      description: "Para de rir dos cadeirantes, coisa feia"
  },
  {
      title: "Memória 27",
      image: "./images/memoria_27.jpeg",
      date: "",
      description: "MELHOR TROTE SIM!!"
  },
  {
      title: "Memória 28",
      image: "./images/memoria_28.jpeg",
      date: "",
      description: "Tutu e Kaiser"
  },
  {
      title: "Memória 29",
      image: "./images/memoria_29.jpeg",
      date: "",
      description: "Nesse dia eu pude ter certeza de que para sempre vou ter uma maluca comigo"
  },
  {
      title: "Memória 30",
      image: "./images/memoria_30.png",
      date: "",
      description: "O dia que abrimos nosso restaurante de sushi com ingredientes duvidosos.... Mas esse foi nossa melhor venda kkk"
  },
  {
      title: "Memória 31",
      image: "./images/memoria_31.png",
      date: "",
      description: "Acho essa foto muito foda, melhor professora de genshin disparada (Iremos renovar essa foto quando pegar minha raiden!)"
  },
  {
      title: "Memória 32",
      image: "./images/memoria_32.jpeg",
      date: "",
      description: "Arruma esse vagão!!! skksks"
  },
  {
      title: "Memória 33",
      image: "./images/memoria_33.jpeg",
      date: "",
      description: "Sua indicação foi cirurgica, amei acompanhar esse anime e compartilhar contigo, quando lançar o resto temos que ver, e pra representar essa memoria nada melhor que a print mais zika do filme"
  },
  {
      title: "Memória 34",
      image: "./images/memoria_34.jpeg",
      date: "",
      description: "Definitivamente o mlhr grupo de tdss🫶"
  },
  {
      title: "Memória 35",
      image: "./images/memoria_35.jpeg",
      date: "",
      description: "Sempre arrasando nas apresentações, todos ficavam no chinelo 🩴"
  },
  {
      title: "Memória 36",
      image: "./images/memoria_36.jpeg",
      date: "",
      description: "Eu dei meu melhorrr anaaaa akkakkakak, sorry pelo delineado torto"
  },
  {
      title: "Memória 37",
      image: "./images/memoria_37.jpeg",
      date: "",
      description: "BY FELPS"
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

const bgm = document.getElementById("bgm");

const musicSelector =
    document.getElementById("musicSelector");

musicSelector.addEventListener(
    "change",
    () => {

        const tocando =
            !bgm.paused;

        bgm.src =
            musicSelector.value;

        if (tocando) {
            bgm.play();
        }

    }
);