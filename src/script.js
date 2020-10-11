var size = 20;
var color = "black";
// Getting the container div DOM element
const containerDiv = document.querySelector("#container");

function generateGrid(size, color) {
  // Resetting the container
  containerDiv.innerHTML = "";

  // Creating the row container
  const rowGrid = document.createElement("div");
  rowGrid.classList.add("row");

  // Creting the col div
  const colGrid = document.createElement("div");
  colGrid.classList.add("col");

  // Put 16 col div insed one row container
  for (let i = 0; i < size; i++) {
    rowGrid.appendChild(colGrid.cloneNode(true));
  }

  // Put 16 row container inside the container div
  for (let i = 0; i < size; i++) {
    containerDiv.appendChild(rowGrid.cloneNode(true));
  }

  const cells = Array.from(document.querySelectorAll(".col"));
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", function (e) {
      event.target.style.backgroundColor = color;
    })
  );
}

generateGrid(16, color);

function resetGrid() {
  while (true) {
    size = Number(prompt("How many tiles per row and column do you want?"));
    if (size) {
      break;
    }
    alert("Please input number only");
  }
  generateGrid(size, color);
}

function ChangeColor() {
  document.getElementsByClassName('color_picker')[0].click();
}

document.getElementsByClassName('color_picker')[0]
  .addEventListener("change", (event)=>{
    event.target.style.backgroundColor = event.target.value;
    generateGrid(size, event.target.value);
})
