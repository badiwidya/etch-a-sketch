let gridSize = 16;
const container = document.querySelector("#container");

//? When DOM is loaded, this function will display grids that fill the container
document.addEventListener("DOMContentLoaded", () => {
  const containerSize = parseInt(window.getComputedStyle(container).getPropertyValue("width"));
  const gridElementSize = String(containerSize / gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");

    gridElement.style.cssText = `width: ${gridElementSize}px; height: ${gridElementSize}px;`;
    gridElement.classList.add("grid");

    container.appendChild(gridElement);
  }
});

//? This function will listen to mouse over event, when it occurs change the target element
//? background color to a random hex number achieved using Math.random
container.addEventListener("mouseover", (e) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  if (e.target.getAttribute('class') === 'grid') {
    e.target.style.background = `#${randomColor}`;
  }
});

//? When the mouse is out of container area, set each grid elements background to white (reset it)
container.addEventListener("mouseleave", () => {
  const gridElement = document.querySelectorAll('.grid');
  gridElement.forEach(element => {
    element.style.background = "white";
  });
});
