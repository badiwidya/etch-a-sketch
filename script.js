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
