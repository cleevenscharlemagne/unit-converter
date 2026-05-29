# 🔄 Unit Converter

A clean, responsive web app for converting between common units of measurement — built with vanilla HTML, CSS, and JavaScript.

🔗 **Project URL:** [https://roadmap.sh/projects/unit-converter](https://roadmap.sh/projects/unit-converter)

---

## 📸 Preview

> A simple, card-style interface with a gradient background. Select a category, choose your units, enter a value, and hit **Convert**.

---

## ✨ Features

- **3 conversion categories:**
  - 📏 **Length** — Millimeter, Centimeter, Meter, Kilometer, Inch, Foot, Yard, Mile
  - ⚖️ **Weight** — Milligram, Gram, Kilogram, Ounce, Pound
  - 🌡️ **Temperature** — Celsius, Fahrenheit, Kelvin
- Dynamic dropdowns that update instantly when a category is selected
- Smart default unit pairs per category (e.g., Meter → Kilometer for Length)
- Accurate temperature conversion via a dedicated formula (not just a factor)
- Result displayed to 3 decimal places
- Input validation with a user-friendly error message
- Responsive, mobile-friendly design with tap-highlight suppression

---

## 🗂️ Project Structure

```
unit-converter/
├── index.html      # App markup and layout
├── style.css       # Styling and gradient theme
└── converter.js    # Conversion logic and DOM interactions
```

---

## 🚀 Getting Started

No build tools or dependencies required — just open the file in a browser.

**Option 1 — Open directly:**

```bash
# Clone the repo
git clone https://github.com/your-username/unit-converter.git

# Open in your browser
open index.html
```

**Option 2 — Use a local server (recommended):**

```bash
# With VS Code Live Server extension, or:
npx serve .
```

---

## 🧠 How It Works

### Length & Weight

Conversions use a base-unit factor table. Each unit stores its value relative to a base unit (meters for length, grams for weight). The formula is:

```
result = (inputValue × fromFactor) / toFactor
```

### Temperature

A dedicated `convertTemperature()` function handles temperature — first converting the input to Celsius as an intermediate step, then converting from Celsius to the target unit.

| From → To | Formula                |
| --------- | ---------------------- |
| °F → °C   | `(value - 32) × 5/9`   |
| K → °C    | `value - 273.15`       |
| °C → °F   | `(celsius × 9/5) + 32` |
| °C → K    | `celsius + 273.15`     |

---

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3** — Gradient backgrounds, glassmorphism-style containers, hover transitions
- **Vanilla JavaScript** — DOM manipulation, event listeners, conversion logic

---

## 🔮 Possible Future Improvements

- [ ] Add more categories (Volume, Speed, Area, Currency)
- [ ] Keyboard support — press `Enter` to convert
- [ ] Swap input/output units button
- [ ] Conversion history log
- [ ] Dark mode toggle

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
