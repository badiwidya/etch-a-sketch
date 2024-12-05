const container = document.querySelector("#container");

//? Idk why the page screen cannot be scrolled through the top LOL (the button isn't visible)
document.addEventListener("DOMContentLoaded", () => {
  alert("Please zoom out the page if the container is not in full view.");
  displayGrid();
});

const resetBtn = document.querySelector("#reset");
const changeGridBtn = document.querySelector("#change");
changeGridBtn.addEventListener("click", () => {
  const gridSize = parseInt(prompt("Enter your desired grid size: (max 100)"));
  if (gridSize > 100) {
    alert("Maximum number of input is 100");
    return;
  }
  //? remove container grid first
  container.innerHTML = "";
  displayGrid(gridSize);
});

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
  displayGrid();
});

//? This function will listen to mouse over event, when it occurs change the target element
//? background color to a random hex number achieved using Math.random
container.addEventListener("mouseover", (e) => {
  let randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  if (e.target.getAttribute("class") === "grid") {
    e.target.style.background = `#${randomColor}`;
  }
});

//? When DOM is loaded or user inputted grid size,
//? this function will display grids that fill the container
function displayGrid(gridSize = 16) {
  const containerSize = parseInt(window.getComputedStyle(container).getPropertyValue("width"));
  const gridElementSize = String(containerSize / gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");

    gridElement.style.cssText = `width: ${gridElementSize}px; height: ${gridElementSize}px;`;
    gridElement.classList.add("grid");

    container.appendChild(gridElement);
  }
}
