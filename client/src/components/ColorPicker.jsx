import { useState } from "react";

export function ColorPicker({ band, onColorChange, colors }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectChange = (e) => {
    setSelectedColor(e.target.value);
    onColorChange(band, e.target.value);
  };

  return (
    <select
      className={`${selectedColor}`}
      onChange={handleSelectChange}
      value={selectedColor}
    >
      <option value="">Select a color</option>
      {colors.map((color) => (
        <option key={color.value} value={color.value}>
          {color.label}
        </option>
      ))}
    </select>
  );
}

// export function Options({ color, children }) {
//   // const [selectedColor, setSelectedColor] = useState(""); // Estado para almacenar el color seleccionado

//   // // Función que se ejecuta cuando se selecciona una opción
//   // const handleSelectChange = (e) => {
//   //   setSelectedColor(e.target.value);
//   // };

//   // return (
//   //     <select>
//   //       <option value="">Select a color</option>
//   //       <option value="red">Red</option>
//   //       <option value="yellow">Yellow</option>
//   //     </select>
//   // );

//   const colorVariants = {
//     blue: 'bg-blue-600 hover:bg-blue-500',
//     red: 'bg-red-600 hover:bg-red-500',
//   }

//   return (
//     <button className={`${colorVariants[color]} ...`}>
//       {children}
//     </button>
//   )
// }
