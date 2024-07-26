// NAvbar *********************************
window.onscroll = function () {
  checkSticky();
};

var stickyDiv = document.getElementById("stickyDiv");
var stickyPoint = 100; // Change this value to the number of pixels you want to scroll before sticking

function checkSticky() {
  if (window.pageYOffset > stickyPoint) {
    stickyDiv.classList.add("sticky");
    stickyDiv.style.backgroundColor = "#dfdfdf";
  } else {
    stickyDiv.classList.remove("sticky");
    stickyDiv.style.backgroundColor = "white";
  }
}

// ********************************************************8
let selectedColor = "";
var rowCircleColors = ["", "", "", ""]; // Initialize with empty strings to hold colors
let elementColorMap = new Map(); // To track colors applied to each element

function selectColor(color) {
  selectedColor = color;
}

function applyColor(element, index) {
  // Apply new color
  if (selectedColor) {
    element.style.backgroundColor = selectedColor;
    rowCircleColors[index] = selectedColor; // Update color at specific index
    elementColorMap.set(element, selectedColor);
  }

  console.log(rowCircleColors);
}

document.querySelector(".showRules").addEventListener("click", function () {
  let rulee = document.querySelector(".rules");
  if (rulee.style.display === "none" || rulee.style.display === " ") {
    rulee.style.display = "block";
  } else {
    rulee.style.display = "none";
  }
});

//   const li = document.createElement("li");
//   li.classList.add("color1");
//   li.appendChild(document.createTextNode("hello"));
//   const test = document.querySelector(".solution");
//   test.appendChild(li);
function clickBtn(num) {
  const result = compareArrays(rowCircleColors, secretCombination);
  console.log(`Same index: ${result.sameIndexCount}`);
  console.log(`Different index: ${result.differentIndexCount}`);

  //   apply colors to mastermind review
  const masterReviews = [
    document.querySelector(`.masterReview${num} .review1`),
    document.querySelector(`.masterReview${num} .review2`),
    document.querySelector(`.masterReview${num} .review3`),
    document.querySelector(`.masterReview${num} .review4`),
  ];

  //   check rowCircleColors must be filled

  if (rowCircleColors.every((color) => color !== "")) {
    console.log("All colors are filled:", rowCircleColors);
    // Additional logic can be added here if needed
  } else {
    console.log("Not all colors are filled yet.");
    sameIndexCount = 0;
    differentIndexCount = 0;
    return;
  }

  if (sameIndexCount > 0 || differentIndexCount > 0) {
    for (let i = 0; i < sameIndexCount; i++) {
      if (masterReviews[i]) {
        masterReviews[i].style.backgroundColor = "green";
      }
    }
    for (
      let i = sameIndexCount;
      i < masterReviews.length && i - sameIndexCount < differentIndexCount;
      i++
    ) {
      if (masterReviews[i]) {
        // Ensure the element exists
        masterReviews[i].style.backgroundColor = "yellow";
      }
    }
  }

  if (sameIndexCount === 4 && differentIndexCount === 0) {
    document.querySelector(".youWin").style.display = "block";
    document.querySelector(".solution").style.display = "block";
  } else if (num === 10) {
    document.querySelector(".youLost").style.display = "block";
    document.querySelector(".solution").style.display = "block";
  } else {
    rowCircleColors = ["", "", "", ""];
    sameIndexCount = 0;
    differentIndexCount = 0;

    const rowNum = document.getElementById(`row${num}`);
    rowNum.classList.add("disabled");
    const nextRowNum = document.getElementById(`row${num + 1}`);
    nextRowNum.classList.remove("disabled");
  }
}

var sameIndexCount = 0;
var differentIndexCount = 0;
function compareArrays(rowCircleColors, secretCombination) {
  if (rowCircleColors.length !== 4 || secretCombination.length !== 4) {
    throw new Error("Both arrays must have exactly 4 elements.");
  }

  const secretCombinationMap = {};

  // First pass: Count same index matches and build the secret combination map
  for (let i = 0; i < 4; i++) {
    if (rowCircleColors[i] === secretCombination[i]) {
      sameIndexCount++;
    } else {
      // Build the map only for elements that are not in the same index
      if (secretCombinationMap[secretCombination[i]]) {
        secretCombinationMap[secretCombination[i]]++;
      } else {
        secretCombinationMap[secretCombination[i]] = 1;
      }
    }
  }

  // Second pass: Count different index matches
  for (let i = 0; i < 4; i++) {
    if (
      rowCircleColors[i] !== secretCombination[i] &&
      secretCombinationMap[rowCircleColors[i]]
    ) {
      differentIndexCount++;
      secretCombinationMap[rowCircleColors[i]]--;
    }
  }

  return {
    sameIndexCount,
    differentIndexCount,
  };
}

// random geerate solution
function getRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}

var secretCombination = [];
function generateRandomCombination() {
  for (let i = 0; i < 4; i++) {
    secretCombination.push(getRandomColor());
  }
  console.log("solution : " + secretCombination);
  return secretCombination;
}

function applyCombinationToSolution() {
  const solutionCircles = document.querySelectorAll(".solution .circle");
  const secretCombination = generateRandomCombination();
  solutionCircles.forEach((circle, index) => {
    circle.style.backgroundColor = secretCombination[index];
  });
}
// Apply the combination to the solution circles on page load
window.onload = applyCombinationToSolution;

// // Get colors from circles in a row
// function getRowColors(rowId) {
//   const row = document.getElementById(rowId);
//   const circles = row.querySelectorAll(".circle");
//   return Array.from(circles).map((circle) => circle.style.backgroundColor);
// }
