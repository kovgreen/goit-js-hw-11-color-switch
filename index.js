"use script";
import { randomIntegerFromInterval } from "./utils/random-integer.js";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const switcherColorTheme = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      const chooserColor = randomIntegerFromInterval(0, colors.length);
      document.body.style.backgroundColor = colors[chooserColor];
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  "click",
  switcherColorTheme.start.bind(switcherColorTheme)
);
refs.stopBtn.addEventListener(
  "click",
  switcherColorTheme.stop.bind(switcherColorTheme)
);
