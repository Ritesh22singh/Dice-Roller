// const inputBox = document.getElementById("inputBox").value;
// const btn = document.getElementById("btn");
// const diceImages = document.getElementById("diceImage");
// const image = [];
// const values = [];

// diceImages.innerHTML = "";
// function rollDice() {
//   for (let i = 1; i < inputBox; i++) {
//     if (inputBox == i) {
//       image.push(`<img src="image/${inputBox}.jpg">`);
//       diceImages.innerHTML = image;
//     }
//   }
// }

function rollDice() {
  // Get the input value
  const inputBox = document.querySelector('input[type="number"]');
  const diceImages = document.getElementById("diceImage");

  // Parse the input value
  const numDice = parseInt(inputBox.value);

  // Validate the input (should be between 1 and 6)
  if (isNaN(numDice) || numDice < 1 || numDice > 6) {
    alert("Please enter a number between 1 and 6.");
    return;
  }

  // Clear previous images
  diceImages.innerHTML = "";

  // Loop to generate images
  for (let i = 0; i < numDice; i++) {
    // Create a new image element
    const img = document.createElement("img");
    img.src = `image/${i + 1}.jpg`; // Assume images are named 1.jpg, 2.jpg, ..., 6.jpg
    img.alt = `Dice ${i + 1}`;
    img.style.width = "100px"; // Optional: Set image size
    img.style.margin = "10px"; // Optional: Add spacing between images
    img.style.textAlign = "center";

    // Append the image to the container
    diceImages.appendChild(img);
  }
}
