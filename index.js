document.addEventListener("DOMContentLoaded", () => {
  const base = window.location.pathname.replace(/\/[^/]*$/, "/");

  document.getElementById("soloBtn").addEventListener("click", () => {
    window.location.href = base + "SINGLE-PLAYER/index-single-player.html";
  });

  document.getElementById("twoPlayersBtn").addEventListener("click", () => {
    window.location.href = base + "MULTIPLAYER/index-two-players.html";
  });
});