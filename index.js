document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("soloBtn").addEventListener("click", () => {
    window.location.href = "../SINGLE-PLAYER/index-single-player.html";
  });

  document.getElementById("twoPlayersBtn").addEventListener("click", () => {
    window.location.href = "./MULTIPLAYER/index-two-players.html";
  });
});
