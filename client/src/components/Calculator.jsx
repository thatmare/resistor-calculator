import { useState, useEffect } from "react";
import { OhmValueCalculator } from "../utils/OhmCalculator.class.js";
import { formatNumber } from "../utils/NumberFormat.js";
import { ColorPicker } from "./ColorPicker.js";
import { Digits } from "../models/Digits.js";
import { Multiplier } from "../models/Multiplier.js";
import { Tolerance } from "../models/Tolerance.js";

export function ResistorCalculator() {
  const [bandAColor, setBandAColor] = useState("");
  const [bandBColor, setBandBColor] = useState("");
  const [bandCColor, setBandCColor] = useState("");
  const [bandDColor, setBandDColor] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

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
        setMessage("");
      } catch (error) {
        setMessage("Cannot calculate resistance");
        console.error(error);
      }
    } else {
      setMessage("Select all band colors.");
      console.error("Select all band colors.");
    }
  };

  useEffect(() => {
    calculateResistance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bandAColor, bandBColor, bandCColor, bandDColor]);

  return (
    <div>
      <div>
        <ColorPicker
          band="A"
          onColorChange={handleBandColorChange}
          colors={Digits}
        ></ColorPicker>
        <ColorPicker
          band="B"
          onColorChange={handleBandColorChange}
          colors={Digits}
        ></ColorPicker>
        <ColorPicker
          band="C"
          onColorChange={handleBandColorChange}
          colors={Multiplier}
        ></ColorPicker>
        <ColorPicker
          band="D"
          onColorChange={handleBandColorChange}
          colors={Tolerance}
        ></ColorPicker>
      </div>
      {result && (
        <div className="result">
          Resistor value: {formatNumber(result.ohmValue)} Ohms
          <br />
          Tolerance: {result.tolerance}%
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}
