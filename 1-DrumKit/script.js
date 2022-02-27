// selection audio files
const kick = document.querySelector(".kick");
const keys = document.querySelectorAll(".key");

// playing sound
const playingSound = (e) => {
  keys.forEach((key) => {
    key.classList.remove("playing");
  });
  const audio = document.querySelector(`audio[data-key="${e}"]`);
  const keyItem = document.querySelector(`.key[data-key="${e}"]`);
  keyItem.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};
// for clicking on the keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    playingSound(key.getAttribute("data-key"));
  });
});

const keyPress = (e) => {
  playingSound(e.keyCode);
};

window.addEventListener("keydown", (e) => keyPress(e));
