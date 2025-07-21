const input = document.querySelector("input");
const button = document.querySelector("button");


for (let i = 0; i < 16; i++) {
  const square = document.createElement('div');
  const gridContainer = document.querySelector('#gridContainer')
  square.className = 'gridbox';
  square.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "red";
  })
  gridContainer.appendChild(square);
}
