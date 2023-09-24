import { useState } from "react";
import { OhmValueCalculator } from "../utils/OhmCalculator.class";
import { Options } from "./Options";

export function ResistorCalculator() {
  const [bandAColor, setBandAColor] = useState("");
  const [bandBColor, setBandBColor] = useState("");
  const [bandCColor, setBandCColor] = useState("");
  const [bandDColor, setBandDColor] = useState("");
  const [result, setResult] = useState(null);

  const handleBandColorChange = (band, color) => {
    switch (band) {
      case "A":
        setBandAColor(color);
        break;
      case "B":
        setBandBColor(color);
        break;
      case "C":
        setBandCColor(color);
        break;
      case "D":
        setBandDColor(color);
        break;
      default:
        break;
    }
  };

  const calculateResistance = async () => {
    if (bandAColor && bandBColor && bandCColor && bandDColor) {
      const calculator = new OhmValueCalculator();
      try {
        const total = await calculator.CalculateOhmValue(
          bandAColor,
          bandBColor,
          bandCColor,
          bandDColor
        );
        setResult(total);
      } catch (error) {
        console.error("Cannot calculate resistance", error);
      }
    } else {
      console.error("Select all band colors.");
    }
  };

  return (
    <div>
      <div>
        <Options band="A" onColorChange={handleBandColorChange}></Options>
        <Options band="B" onColorChange={handleBandColorChange}></Options>
        <Options band="C" onColorChange={handleBandColorChange}></Options>
        <Options band="D" onColorChange={handleBandColorChange}></Options>
      </div>
      <button onClick={calculateResistance}>Calcular resistencia</button>
      {result && (
        <div className="result">
          Valor de la Resistencia: {result.ohmValue} Ohms
          <br />
          Tolerancia: {result.tolerance}%
        </div>
      )}
    </div>
  );
}
