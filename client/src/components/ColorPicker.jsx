import { useState } from "react";

export function ColorPicker({ band, onColorChange, colors }) {
  const [selectedClass, setSelectedClass] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedColor = colors.find((color) => color.value === selectedValue);

    if (selectedColor) {
      setSelectedClass(selectedColor.class);
    } else {
      setSelectedClass("");
    }
    onColorChange(band, selectedValue);
  };

  return (
    <select
      onChange={handleSelectChange}
      className={`w-80 h-10 m-3 rounded-md text-xl text-center text-slate-950 ${selectedClass} `}
    >
      <option value="" className="">
        Select a color
      </option>
      {colors.map((color) => (
        <option
          key={color.value}
          value={color.value}
          className={`text-gray-300 font-bold ${color.class}`}
        >
          {color.label}
        </option>
      ))}
    </select>
  );
}
