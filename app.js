const timeEl = document.querySelector(".time");
const score = document.querySelector(".score");
const word = document.querySelector(".word");
const input = document.querySelector(".input_box");
const playing = document.querySelector(".playing");
const gameOverEl = document.querySelector(".game_over");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

let time = 10;
let scoreValue = 0;
let randomWord;

score.innerHTML = scoreValue;
timeEl.innerHTML = time + "s";

const generateRandomWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerHTML = randomWord;
};

const countDown = () => {
  setInterval(() => {
    time--;
    timeEl.innerHTML = time + "s";

    if (time < 0) {
      gameOver();
    }
  }, 1000);
};

const gameOver = () => {
  playing.style.display = "none";
  gameOverEl.style.display = "block";
  gameOverEl.innerHTML = `
        <h1>Time run out</h1>
        <p>Your time score is ${scoreValue}</p>
        <button onClick="location.reload()">Restart</button>
    `;
};

input.addEventListener("input", (e) => {
  const typeWord = e.target.value;
  if (randomWord === typeWord) {
    generateRandomWord();
    time += 1;
    scoreValue++;
    score.innerHTML = scoreValue;
    e.target.value = "";
  }
});

generateRandomWord();
countDown();
