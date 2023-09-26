import { getValues } from "../services/fetchValues.js"

export class OhmValueCalculator {
  async CalculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor) {
    const colorValues = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    };

    const digit1 = colorValues[bandAColor];
    const digit2 = colorValues[bandBColor];
    const multiplier = await getValues("multiplier", `${bandCColor}`);
    const tolerance = await getValues("tolerance", `${bandDColor}`);

    if (multiplier === undefined || tolerance === undefined) {
      console.log(
        "Error: Could not get multiplier and tolerance values."
      );
      return null;
    }

    const ohmValue = ((digit1 * 10) + digit2) * multiplier;

    return {
      ohmValue,
      tolerance,
    };
  }
}
