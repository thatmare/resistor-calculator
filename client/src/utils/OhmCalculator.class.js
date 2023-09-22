import { ToleranceCalculator } from "./ToleranceCalculator";

class OhmValueCalculator {
  CalculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor) {
    const colorValues = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
    };

    const digit1 = colorValues[bandAColor];
    const digit2 = colorValues[bandBColor];

    let multiplier;
    if (bandCColor === "gold") {
      multiplier = 0.1;
    } else if (bandCColor === "silver") {
      multiplier = 0.01;
    } else {
      multiplier = 10 ** colorValues[bandCColor];
    }

    const tolerance = ToleranceCalculator(bandDColor);

    const ohmValue = (digit1 * 10 + digit2) * multiplier;

    return {
      ohmValue,
      tolerance,
    };
  }
}

const calculator = new OhmValueCalculator();

const result = calculator.CalculateOhmValue("blue", "orange", "red", "gray");

console.log(result);
