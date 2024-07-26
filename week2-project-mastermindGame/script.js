let selectedColor = "";

function selectColor(color) {
  selectedColor = color;
}
function applyColor(element) {
  if (selectedColor) {
    element.style.backgroundColor = selectedColor;
  }
}

document.querySelector(".showRules").addEventListener("click", function () {
  let rulee = document.querySelector(".rules");
  if (rulee.style.display === "none" || rulee.style.display === " ") {
    rulee.style.display = "block";
  } else {
    rulee.style.display = "none";
  }
});

function clickBtn(num) {
  console.log(`click Button row ${num}`);
  //   const li = document.createElement("li");
  //   li.classList.add("color1");
  //   li.appendChild(document.createTextNode("hello"));
  //   const test = document.querySelector(".solution");
  //   test.appendChild(li);
}

// random geerate solution
function getRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomCombination() {
  const combination = [];
  for (let i = 0; i < 4; i++) {
    combination.push(getRandomColor());
  }
  return combination;
}

function applyCombinationToSolution() {
  const solutionCircles = document.querySelectorAll(".solution .circle");
  const combination = generateRandomCombination();
  solutionCircles.forEach((circle, index) => {
    circle.style.backgroundColor = combination[index];
  });
}
// Apply the combination to the solution circles on page load
window.onload = applyCombinationToSolution;

// Get colors from circles in a row
// function getRowColors(rowId) {
//   const row = document.getElementById(rowId);
//   const circles = row.querySelectorAll(".circle");
//   return Array.from(circles).map((circle) => circle.style.backgroundColor);
// }

//  Compare applied colors with the solution
// function checkRow(rowId) {
//   const rowColors = getRowColors(rowId);
//   const solutionColors = getSolutionColors();
//   const match = rowColors.every(
//     (color, index) => color === solutionColors[index]
//   );

//   const reviewDivs = document.querySelectorAll(
//     `#${rowId} .masterReview .review`
//   );
//   reviewDivs.forEach(
//     (div) => (div.style.backgroundColor = match ? "green" : "red")
//   );
// }

// Get the colors from the solution section
// function getSolutionColors() {
//   const solutionCircles = document.querySelectorAll(".solution .circle");
//   return Array.from(solutionCircles).map(
//     (circle) => circle.style.backgroundColor
//   );
// }
// Handle the check button click for a specific row
// function clickBtn(num) {
//   const rowId = `row${num}`;
//   console.log(`Click Button row ${num}`);
//   checkRow(rowId);
// }
