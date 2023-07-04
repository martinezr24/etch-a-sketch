var gridLength = 16; 
const gridContainer = document.querySelector(".grid-container");
const gridButton = document.querySelector(".grid-button");

function createGrid(gridSize) {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      var box = document.createElement("div");
      box.className = "grid-box-white";
      gridContainer.appendChild(box);
    }
  }
  gridBoxWhite = document.querySelectorAll(".grid-box-white");
  changeColor();
}
createGrid(gridLength);

gridButton.addEventListener("click", () => {
  gridLength = prompt("Grid Size:");
  createNewGrid(gridLength);
  gridBoxWhite = document.querySelectorAll(".grid-box-white");
  changeColor();
})

function createNewGrid(gridSize) {
  removeAllChildNodes(gridContainer);
  var gridPixelSize = (712 - 3 * gridSize) / gridSize;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      var box = document.createElement("div");
      box.className = "grid-box-white";
      box.style.height = "" + gridPixelSize + "px";
      box.style.width = "" + gridPixelSize + "px";
      gridContainer.appendChild(box);
    }
  }
}

function changeColor() {
  for (let i = 0; i < gridBoxWhite.length; i++) {
    gridBoxWhite[i].addEventListener("mouseover", () => {
      if (gridBoxWhite[i].className == "grid-box-white") {
        gridBoxWhite[i].className = "grid-box-black";
      } else {
        gridBoxWhite[i].className = "grid-box-white";
      }
    });
  }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




