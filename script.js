document.addEventListener("DOMContentLoaded", function () {
  const flyContainer = document.getElementById("flyContainer");

  // Updated number of flies to 20
  const flyCount = 20;

  for (let i = 0; i < flyCount; i++) {
    const fly = document.createElement("div");
    fly.classList.add("fly");

    // Set random starting position
    fly.style.top = `${Math.random() * window.innerHeight}px`;
    fly.style.left = `${Math.random() * window.innerWidth}px`;

    // Add to container
    flyContainer.appendChild(fly);
  }
});
