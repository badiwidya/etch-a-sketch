let gridSize = 16;
const container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", displayGrid);

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

//? When the mouse is out of container area, set each grid elements background to white (reset it)
container.addEventListener("mouseleave", () => {
  const gridElement = document.querySelectorAll(".grid");
  gridElement.forEach((element) => {
    element.style.background = "white";
  });
});

//? When DOM is loaded or user inputted grid size, 
//? this function will display grids that fill the container
function displayGrid() {
  const containerSize = parseInt(window.getComputedStyle(container).getPropertyValue("width"));
  const gridElementSize = String(containerSize / gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");

    gridElement.style.cssText = `width: ${gridElementSize}px; height: ${gridElementSize}px;`;
    gridElement.classList.add("grid");

    container.appendChild(gridElement);
  }
}
