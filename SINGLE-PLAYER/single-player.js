const palavras = [
  "girassol",
  "beleza",
  "vida",
  "esperança",
  "natureza",
  "arcoiris",
  "alegria",
  "doce",
  "sorriso",
  "amigo",
  "brinquedo",
  "pipa",
  "bola",
  "cachorro",
  "gato",
  "borboleta",
  "escola",
  "professor",
  "caderno",
  "colorido",
  "abacaxi",
  "melancia",
  "dinossauro",
  "estrela",
  "lua",
];

const dicas = [
  "Flor amarela que segue o sol",
  "Aquilo que é bonito",
  "Estado de estar vivo",
  "Sentimento positivo sobre o futuro",
  "Tudo ao nosso redor, ecossistemas",
  "Depois da chuva, aparece no céu com muitas cores",
  "Quando estamos felizes, sentimos isso",
  "Guloseima que as crianças adoram",
  "Fazemos isso com a boca quando estamos felizes",
  "Pessoa especial que gostamos muito",
  "Objeto usado para brincar, como bonecas ou carrinhos",
  "Brinquedo que voa com o vento",
  "Usada para jogar futebol ou brincar com amigos",
  "Animal que late e é muito amigo do homem",
  "Animal que mia e gosta de dormir muito",
  "Inseto colorido com asas que voa no jardim",
  "Lugar onde aprendemos e fazemos amigos",
  "Pessoa que ensina na escola",
  "Usado para escrever e fazer tarefas",
  "Algo com muitas cores, como um desenho bonito",
  "Fruta com coroa e sabor tropical",
  "Fruta grande, verde por fora e vermelha por dentro",
  "Animal pré-histórico que as crianças adoram",
  "Brilha no céu à noite e forma constelações",
  "Aparece no céu à noite e pode ser cheia ou nova",
];

const flower = document.getElementById("flower");
const hint = document.getElementById("hint");
const hiddenWord = document.getElementById("hidden-word");
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const turno = document.getElementById("turno");

const player1CorrectSpan = document.getElementById("player1-correct");
const player1WrongSpan = document.getElementById("player1-wrong");

const playerSelectDiv = document.getElementById("player-select");
const gameContainer = document.getElementById("game-container");

const virtualKeyboard = document.getElementById("virtual-keyboard");

let palavra = "";
let dica = "";
let letrasReveladas = [];
let tentativasErradas = 0;
let petalas = [];
let jogoAtivo = false;

let playerStats = {
  correct: 0,
  wrong: 0,
};

/*const letrasTeclado = "abcdefghijklmnopqrstuvwxyz".split("");*/
const letrasTeclado = "abcdefghijklmnopqrstuvwxyzçáéíóúàãõâêîôû".split("");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.getElementById("reset-button").addEventListener("click", () => {
  iniciarJogo();
});

function atualizarPainel() {
  player1CorrectSpan.textContent = playerStats.correct;
  player1WrongSpan.textContent = playerStats.wrong;
}

function iniciarJogo() {
  flower.innerHTML = `<div class="center"></div>`;
  message.textContent = "";
  message.style.color = "initial";
  guessInput.disabled = true;
  guessInput.value = "";
  tentativasErradas = 0;
  jogoAtivo = true;

  playerStats = {
    correct: 0,
    wrong: 0,
  };
  atualizarPainel();
  atualizarTurno();

  const index = Math.floor(Math.random() * palavras.length);
  palavra = palavras[index].toLowerCase();
  dica = dicas[index];
  letrasReveladas = Array(palavra.length).fill("_");
  petalas = [];

  hint.textContent = `Dica: ${dica}`;
  atualizarPalavra();
  criarPetalas(palavra.length);

  criarTecladoVirtual();
}

function atualizarPalavra() {
  hiddenWord.textContent = letrasReveladas.join(" ");
}

function atualizarTurno() {
  turno.textContent = `Sua vez, jogue:`;
}

function criarPetalas(qtd) {
  flower.innerHTML = `<div class="center"></div>`;
  petalas = [];
  for (let i = 0; i < qtd; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const angle = (360 / qtd) * i;
    petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    flower.appendChild(petal);
    petalas.push(petal);
  }
}

function criarTecladoVirtual() {
  if (!virtualKeyboard) return;

  virtualKeyboard.innerHTML = "";

  letrasTeclado.forEach((letra) => {
    const tecla = document.createElement("button");
    tecla.classList.add("key");
    tecla.textContent = letra.toUpperCase();

    tecla.addEventListener("click", () => {
      if (!jogoAtivo) return;

      processarChute(letra);
      tecla.disabled = true;
      tecla.classList.add("disabled");
    });

    virtualKeyboard.appendChild(tecla);
  });
}

function processarChute(letra) {
  if (!jogoAtivo) return;
  if (!letra.match(/[a-zçáéíóúàãõâêîôû]/i)) return;

  if (palavra.includes(letra)) {
    let acertou = false;

    palavra.split("").forEach((char, i) => {
      if (char === letra && letrasReveladas[i] === "_") {
        letrasReveladas[i] = letra;
        acertou = true;
        playerStats.correct++;
      }
    });

    atualizarPalavra();
    message.textContent = "";
    atualizarPainel();

    if (!letrasReveladas.includes("_")) {
      fimDeJogo(`🎉 Você venceu!`, "white");
    }
  } else {
    if (petalas.length > 0) {
      const ultimaPetala = petalas.pop();
      flower.removeChild(ultimaPetala);
      tentativasErradas++;

      playerStats.wrong++;
      atualizarPainel();

      const restantes = petalas.length;

      atualizarTurno();

      message.style.color = "black";
      message.textContent = `❌ Você errou!\nRestam ${restantes} pétalas.`;

      if (restantes === 0) {
        atualizarPalavra();
        fimDeJogo(`💀 Fim de jogo!\nA palavra era: ${palavra}`, "black");
      }
    }
  }
}

function fimDeJogo(mensagem, cor) {
  jogoAtivo = false;
  message.style.color = cor;
  message.textContent = mensagem;
  guessInput.disabled = true;

  if (cor === "black") {
    chuvaDeGirassoisTristes(50);
  } else {
    chuvaDeGirassoisFelizes(50);
  }

  setTimeout(() => {
    iniciarJogo();
  }, 7000);
}

function criarGirassolTriste() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling-sunflower");
  emoji.textContent = "🌻😢";
  emoji.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 4000);
}

function chuvaDeGirassoisTristes(qtd = 50) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(criarGirassolTriste, i * 80);
  }
}

function criarGirassolFeliz() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling-sunflower");

  const emojisFelizes = ["🌻😊", "🌞🌼", "😄🌻", "🌻🎉", "🌼😁", "🌞😃"];
  emoji.textContent =
    emojisFelizes[Math.floor(Math.random() * emojisFelizes.length)];

  emoji.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 4000);
}

function chuvaDeGirassoisFelizes(qtd = 50) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(criarGirassolFeliz, i * 80);
  }
}

const onePlayer = document.getElementById("one-player");

iniciarJogo();
