"use strict";

const canvas = document.querySelector(".canvas");
const btnDraw = document.querySelector(".btn--draw");
const btnRainbow = document.querySelector(".btn--rainbow");
const btnEraser = document.querySelector(".btn--eraser");
const btnClear = document.querySelector(".btn--clear");
const color = document.querySelector(".color");
const range = document.querySelector("#range");
const rangeLabel = document.querySelector(".range-label");
const gridline = document.querySelector("#gridline");

btnClear.addEventListener("click", function () {
  canvas.innerHTML = "";
});

range.addEventListener("input", function () {
  let value = this.value;
  let area = value * value;
  rangeLabel.textContent = `${value} x ${value}`;

  updateGrid();
});

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    canvas.appendChild(grid);
  }
}

function updateGrid() {
  canvas.innerHTML = "";
  canvas.style.setProperty(
    "grid-template-columns",
    `repeat(${range.value}, 1fr)`
  );
  canvas.style.setProperty("grid-template-rows", `repeat(${range.value}, 1fr)`);
  for (let i = 0; i < range.value * range.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    canvas.appendChild(div);
  }
}

updateGrid();
