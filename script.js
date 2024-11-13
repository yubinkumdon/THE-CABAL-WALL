document.addEventListener("DOMContentLoaded", function () {
  const flyContainer = document.getElementById("flyContainer");
  const flyCount = 20;

  // Create and position each fly randomly
  for (let i = 0; i < flyCount; i++) {
    const fly = document.createElement("div");
    fly.classList.add("fly");

    // Set random initial position
    fly.style.top = `${Math.random() * window.innerHeight}px`;
    fly.style.left = `${Math.random() * window.innerWidth}px`;

    // Append fly to container
    flyContainer.appendChild(fly);
  }

  console.log("Flies are now animating. Make sure 'fly.png' is in the same folder.");
});
