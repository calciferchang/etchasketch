const input = document.querySelector("input");
const button = document.querySelector("button");
const gridContainer = document.querySelector("#gridContainer");
const errorMessage = document.querySelector("#errorMessage");

button.addEventListener("click", function newGrid() {
  const inputValue = document.querySelector("input").value;
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
    square.addEventListener('mouseover', (event) => {
      const squareColor = event.target.style.backgroundColor.slice(0, -1).split(" ");
      const newOpacity = Math.min(parseFloat(squareColor[3]) + .1, 1)
      squareColor.splice(3, 1, newOpacity + ')')
      event.target.style.backgroundColor = squareColor.join(" ")
      console.log(event.target.style.backgroundColor)
      console.log(squareColor)
    });
    gridContainer.appendChild(square);
  }
}

generateGrid(4);