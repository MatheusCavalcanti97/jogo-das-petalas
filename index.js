document.addEventListener("DOMContentLoaded", () => {
  const isGitHubPages = window.location.hostname.includes("github.io");
  const base = isGitHubPages ? "/jogo-das-petalas/" : "./";

  document.getElementById("soloBtn").addEventListener("click", () => {
    window.location.href = base + "SINGLE-PLAYER/index-single-player.html";
  });

  document.getElementById("twoPlayersBtn").addEventListener("click", () => {
    window.location.href = base + "MULTIPLAYER/index-two-players.html";
  });

  const imagensSrc = [
    base + 'assets/images/menino.png',
    base + 'assets/images/menina.png'
  ];

  const quantidadeImagens = 30;

  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < quantidadeImagens; i++) {
    const img = document.createElement('img');
    img.src = imagensSrc[i % imagensSrc.length];
    img.classList.add('floating-image');

    const topPercent = aleatorio(0, 90);
    const leftPercent = aleatorio(0, 90);

    img.style.top = `${topPercent}vh`;
    img.style.left = `${leftPercent}vw`;

    const rotacaoInicial = aleatorio(-30, 30).toFixed(2) + 'deg';
    img.style.setProperty('--init-rotate', rotacaoInicial);

    const rotacaoShift = (aleatorio(5, 10) * (Math.random() > 0.5 ? 1 : -1)).toFixed(2) + 'deg';
    img.style.setProperty('--rotate-shift', rotacaoShift);

    const floatDistance = aleatorio(5, 15).toFixed(2) + 'px';
    img.style.setProperty('--float-distance', floatDistance);


    const escala = aleatorio(0.3, 0.7).toFixed(2);
    img.style.transform = `rotate(${rotacaoInicial}) scale(${escala})`;

    const duracaoAnim = aleatorio(4, 9).toFixed(2) + 's';
    img.style.animationDuration = duracaoAnim;

    document.body.appendChild(img);
  }
});
