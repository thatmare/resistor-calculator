import { useState } from "react";

export function Options() {
  const [selectedColor, setSelectedColor] = useState(""); // Estado para almacenar el color seleccionado

  // Función que se ejecuta cuando se selecciona una opción
  const handleSelectChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const red = 'red'
  return (
      <select
        className={`bg-${red}-200`}
        onChange={handleSelectChange}
        value={selectedColor}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>
  );
}

