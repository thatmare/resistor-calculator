import { useState, useEffect } from "react";
import { OhmValueCalculator } from "../utils/OhmCalculator.class.js";
//import { formatNumber } from "../utils/NumberFormat.js";
import { ColorPicker } from "./ColorPicker.jsx";
import { Digits } from "../models/Digits.js";
import { Multiplier } from "../models/Multiplier.js";
import { Tolerance } from "../models/Tolerance.js";
import { ResistorDrawing } from "./ResistorDrawing.jsx";

export function Calculator() {
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
    }
  };

  useEffect(() => {
    calculateResistance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bandAColor, bandBColor, bandCColor, bandDColor]);

  return (
    <div className="max-w-3xl m-auto">
      <h1 className="font-black text-5xl text-center my-8 bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">
        Resistor Color Code Calculator
      </h1>
      <p className="text-2xl text-slate-200 my-1 text-justify">
        Pick a color for each band. The calculator will instantly determine the
        resistance value based on your color selections. Currently, only 4-color
        band resistors are supported.
      </p>
      <hr />
      <div className="flex flex-row">
        <div>
          <p className="mx-3 my-1 text-slate-200 text-xl font-bold italic">
            1st Band
          </p>
          <ColorPicker
            band="A"
            onColorChange={handleBandColorChange}
            colors={Digits}
          ></ColorPicker>
          <p className="mx-3 my-1 text-slate-200 text-xl font-bold italic">
            2nd Band
          </p>
          <ColorPicker
            band="B"
            onColorChange={handleBandColorChange}
            colors={Digits}
          ></ColorPicker>
          <p className="mx-3 my-1 text-slate-200 text-xl font-bold italic">
            Multiplier
          </p>
          <ColorPicker
            band="C"
            onColorChange={handleBandColorChange}
            colors={Multiplier}
          ></ColorPicker>
          <p className="mx-3 my-1 text-slate-200 text-xl font-bold italic">
            Tolerance
          </p>
          <ColorPicker
            band="D"
            onColorChange={handleBandColorChange}
            colors={Tolerance}
          ></ColorPicker>
        </div>
        <div className="flex flex-col justify-center">
          <ResistorDrawing result={result} message={message}></ResistorDrawing>
        </div>
      </div>
    </div>
  );
}
