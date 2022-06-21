const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

let kits = {
  a: 0,
  s: 1,
  d: 2,
  f: 3,
  g: 4,
  h: 5,
  j: 6,
  k: 7,
  l: 8,
};

let data = {
  65: 0,
  83: 1,
  68: 2,
  70: 3,
  71: 4,
  72: 5,
  74: 6,
  75: 7,
  76: 8,
};

//playing through keyboard

document.addEventListener("keydown", (e) => {
  let pressed_key = e.key.toLocaleLowerCase();
  audios[kits[pressed_key]].currentTime = 0;
  audios[kits[pressed_key]].play();
  keys[kits[pressed_key]].classList.add("playing");
});

//playing through mouse click

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", () => {
    let attr = keys[i].getAttribute("data-key");
    audios[data[attr]].currentTime = 0;
    audios[data[attr]].play();
    keys[i].classList.add("playing");
  });
}

//transition

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  });
}
