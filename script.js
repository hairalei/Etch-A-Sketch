"use strict";

const canvas = document.querySelector(".canvas");
const btnColor = document.querySelector(".btn--draw");
const btnRainbow = document.querySelector(".btn--rainbow");
const btnEraser = document.querySelector(".btn--eraser");
const btnClear = document.querySelector(".btn--clear");
const btnCircle = document.querySelector(".btn--circle");
const btn = document.querySelector(".btn");

// const colorPicker = document.querySelector("#color");
// const colorClass = document.querySelector(".color");
const range = document.querySelector("#range");
const rangeLabel = document.querySelector(".range-label");
const gridline = document.querySelector("#gridline");

let currentMode = "color";
let currentColor = "#000";

btnClear.addEventListener("click", function () {
  canvas.innerHTML = "";
  updateGrid();
});

btnEraser.addEventListener("click", function () {
  btnEraser.classList.add("active");
  btnColor.classList.remove("active");
  btnRainbow.classList.remove("active");

  eraseGrid();
});

btnColor.addEventListener("click", function () {
  btnColor.classList.add("active");
  btnEraser.classList.remove("active");
  btnRainbow.classList.remove("active");

  drawGrid();
});

btnRainbow.addEventListener("click", function () {
  btnColor.classList.remove("active");
  btnRainbow.classList.add("active");
  btnEraser.classList.remove("active");

  drawRainbow();
});

range.addEventListener("input", function () {
  let value = this.value;
  let area = value * value;
  rangeLabel.textContent = `${value} x ${value}`;

  updateGrid();
});

// function createGrid() {
//   for (let i = 0; i < 256; i++) {
//     const div = document.createElement("div");
//     div.classList.add("square");
//     canvas.appendChild(grid);
//   }
// }

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

function drawGrid() {
  let isDrawing = false;
  const divSquare = document.querySelector("div");

  divSquare.addEventListener("mousedown", function (e) {
    isDrawing = true;
    e.target.classList.replace("square", "color");

    if (
      e.target.classList.contains("color") &&
      !btnEraser.classList.contains("active")
    ) {
      e.target.style.backgroundColor = color.value;
    }
    console.log(color.value);
    console.log(e.target);
  });

  divSquare.addEventListener("mousemove", function (e) {
    if (isDrawing) {
      e.target.classList.replace("square", "color");

      if (
        e.target.classList.contains("color") &&
        !btnEraser.classList.contains("active")
      ) {
        e.target.style.backgroundColor = color.value;
      }

      console.log(color.value);
      console.log(e.target);
    }
  });

  divSquare.addEventListener("mouseup", function (e) {
    if (isDrawing) {
      isDrawing = false;
    }
  });
}

function eraseGrid() {
  let isDrawing = false;
  const divSquare = document.querySelector("div");

  divSquare.addEventListener("mousedown", function (e) {
    isDrawing = true;
    e.target.classList.replace("square", "color");

    if (
      e.target.classList.contains("color") &&
      btnEraser.classList.contains("active")
    ) {
      e.target.style.backgroundColor = "#fff";
    }
    console.log(color.value);
    console.log(e.target);
  });

  divSquare.addEventListener("mousemove", function (e) {
    if (isDrawing) {
      e.target.classList.replace("square", "color");

      if (
        e.target.classList.contains("color") &&
        btnEraser.classList.contains("active")
      ) {
        e.target.style.backgroundColor = "#fff";
      }

      console.log(color.value);
      console.log(e.target);
    }
  });

  divSquare.addEventListener("mouseup", function (e) {
    if (isDrawing) {
      isDrawing = false;
    }
  });
}

updateGrid();

function drawRainbow() {
  let isDrawing = false;
  const randomR = Math.floor(Math.random() * 256) + 1;
  const randomG = Math.floor(Math.random() * 256) + 1;
  const randomB = Math.floor(Math.random() * 256) + 1;

  let rgb = `rgb(${randomR}, ${randomG}, ${randomB})`;
  const divSquare = document.querySelector("div");

  divSquare.addEventListener("mousedown", function (e) {
    isDrawing = true;
    e.target.classList.replace("square", "color");

    if (
      e.target.classList.contains("color") &&
      !btnEraser.classList.contains("active")
    ) {
      e.target.style.backgroundColor = getRandomColor();
    }
    console.log(color.value);
    console.log(e.target);
  });

  divSquare.addEventListener("mousemove", function (e) {
    if (isDrawing) {
      e.target.classList.replace("square", "color");

      if (
        e.target.classList.contains("color") &&
        !btnEraser.classList.contains("active")
      ) {
        e.target.style.backgroundColor = getRandomColor();
      }

      console.log(color.value);
      console.log(e.target);
    }
  });

  divSquare.addEventListener("mouseup", function (e) {
    if (isDrawing) {
      isDrawing = false;
    }
  });
}

function getRandomColor() {
  const randomR = Math.floor(Math.random() * 256) + 1;
  const randomG = Math.floor(Math.random() * 256) + 1;
  const randomB = Math.floor(Math.random() * 256) + 1;

  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
