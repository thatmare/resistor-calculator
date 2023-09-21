import Value from "../models/value.model.js";

export const postValue = async (req, res) => {
  const { type, color, value } = req.body;

  try {
    const newValue = new Value({
      type,
      color,
      value,
    });

    const valueSaved = await newValue.save();
    res.json({
      type: valueSaved.type,
      color: valueSaved.color,
      value: valueSaved.value,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const getValue = async (req, res) => {
  try {
    const { color, type } = req.query;

    const filter = {};

    if (color) {
      filter.color = color;
    }

    if (type) {
      filter.type = type;
    }

    const valueFound = await Value.findOne(filter);

    if (valueFound) {
      return res.json({
        type: valueFound.type,
        color: valueFound.color,
        value: valueFound.value,
      });
    } else {
      return res
        .status(404)
        .json({
          message:
            "No se encontraron valores para los parámetros proporcionados",
        });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
