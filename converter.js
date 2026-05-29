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

const convertionFactors = {
  length: {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  },
  weight: {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
  },
  temperature: {
    celsius: (value) => value,
    fahrenheit: (value) => ((value - 32) * 5) / 9,
    kelvin: (value) => value - 273.15,
  },
};

const categorySelect = document.getElementById("categorySelect");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const dynamicTitle = document.getElementById("dynamicTitle");
const inputValue = document.getElementById("inputValue");
const convertButton = document.getElementById("convertButton");
const resultDisplay = document.getElementById("result");

// Function to populate dropdowns
function updateUnits(selectedValue) {
  // Clear old options
  inputUnit.innerHTML = "";
  outputUnit.innerHTML = "";
  resultDisplay.textContent = "";

  // Update title
  const formattedTitle =
    selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);

  dynamicTitle.textContent = formattedTitle;

  const optionsArray = dynamicData[selectedValue];

  if (optionsArray) {
    optionsArray.forEach((item) => {
      const inputOption = document.createElement("option");
      inputOption.value = item.toLowerCase();
      inputOption.textContent = item;
      inputUnit.appendChild(inputOption);

      const outputOption = document.createElement("option");
      outputOption.value = item.toLowerCase();
      outputOption.textContent = item;
      outputUnit.appendChild(outputOption);
    });

    // DEFAULT VALUES
    if (selectedValue === "length") {
      inputUnit.value = "meter";
      outputUnit.value = "kilometer";
    }

    if (selectedValue === "weight") {
      inputUnit.value = "gram";
      outputUnit.value = "kilogram";
    }

    if (selectedValue === "temperature") {
      inputUnit.value = "celsius";
      outputUnit.value = "fahrenheit";
    }
  }
}

// 3. Listen for changes on the dropdown
categorySelect.addEventListener("change", function () {
  updateUnits(this.value);
});

// BONUS FIX: Run this once on page load so the initial "Length" units actually show up!
updateUnits(categorySelect.value);

function convertTemperature(fromUnit, toUnit, value) {
  let celsius;

  // convert FROM input → Celsius
  if (fromUnit === "celsius") {
    celsius = value;
  } else if (fromUnit === "fahrenheit") {
    celsius = (value - 32) * (5 / 9);
  } else if (fromUnit === "kelvin") {
    celsius = value - 273.15;
  }

  // convert Celsius → target unit
  if (toUnit === "celsius") {
    result = celsius;
  } else if (toUnit === "fahrenheit") {
    result = (celsius * 9) / 5 + 32;
  } else if (toUnit === "kelvin") {
    result = celsius + 273.15;
  }

  return result;
}

function convert() {
  const category = categorySelect.value;
  const fromUnit = inputUnit.value;
  const toUnit = outputUnit.value;
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  let result;

  if (category === "length" || category === "weight") {
    const valueInBaseUnit = value * convertionFactors[category][fromUnit];
    result = valueInBaseUnit / convertionFactors[category][toUnit];
  } else if (category === "temperature") {
    result = convertTemperature(fromUnit, toUnit, value);
  }

  resultDisplay.textContent = result.toFixed(3);
}

convertButton.addEventListener("click", convert);
