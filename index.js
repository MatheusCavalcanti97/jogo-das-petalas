document.addEventListener("DOMContentLoaded", () => {
  const isGitHubPages = window.location.hostname.includes("github.io");
  const base = isGitHubPages ? "/jogo-das-petalas/" : "./";

  document.getElementById("soloBtn").addEventListener("click", () => {
    window.location.href = base + "SINGLE-PLAYER/index-single-player.html";
  });

  document.getElementById("twoPlayersBtn").addEventListener("click", () => {
    window.location.href = base + "MULTIPLAYER/index-two-players.html";
  });
});
