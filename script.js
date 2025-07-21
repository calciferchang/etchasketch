const input = document.querySelector("input");
const button = document.querySelector("button");
const gridContainer = document.querySelector("#gridContainer");
const errorMessage = document.querySelector("#errorMessage");

button.addEventListener("click", function newGrid() {
  let inputValue = document.querySelector("input").value;
  document.querySelector("input").value = "";
  errorMessage.textContent = "";
  if (inputValue > 1 && inputValue <= 40) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    generateGrid(inputValue);
  } else errorMessage.textContent = "pls input a number between 1 and 40";
});

function randomRGB() {
  return Math.floor(Math.random() * 255);
}

function generateGrid(count) {
  for (let i = 0; i < count * count; i++) {
    const square = document.createElement("div");
    square.className = "gridbox";
    square.style.width = 100 / count + "%";
    square.style.backgroundColor = `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, 0)`
    square.addEventListener("mouseover", (event) => {

    });
    gridContainer.appendChild(square);
  }
}

generateGrid(4);