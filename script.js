// 1. Keys changed to lowercase to perfectly match the HTML values
const dynamicData = {
  length: [
    "Millimeter",
    "Centimeter",
    "Meter",
    "Kilometer",
    "Inch",
    "Foot",
    "Yard",
    "Mile",
  ],
  weight: ["Milligram", "Gram", "Kilogram", "Ounce", "Pound"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
};

const categorySelect = document.getElementById("categorySelect");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const dynamicTitle = document.getElementById("dynamicTitle");

// Function to populate dropdowns
function updateUnits(selectedValue) {
  // Clear out the old options
  inputUnit.innerHTML = "";
  outputUnit.innerHTML = "";

  // Update Title text
  const formattedTitle =
    selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);
  dynamicTitle.textContent = formattedTitle;

  const optionsArray = dynamicData[selectedValue];

  if (optionsArray) {
    optionsArray.forEach((item) => {
      // FIX: Create a separate option element for the Input Unit
      const inputOption = document.createElement("option");
      inputOption.value = item.toLowerCase();
      inputOption.textContent = item;
      inputUnit.appendChild(inputOption);

      // FIX: Create a separate option element for the Output Unit
      const outputOption = document.createElement("option");
      outputOption.value = item.toLowerCase();
      outputOption.textContent = item;
      outputUnit.appendChild(outputOption);
    });
  }
}

// 3. Listen for changes on the dropdown
categorySelect.addEventListener("change", function () {
  updateUnits(this.value);
});

// BONUS FIX: Run this once on page load so the initial "Length" units actually show up!
updateUnits(categorySelect.value);
