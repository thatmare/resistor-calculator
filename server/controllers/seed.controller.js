import mongoose from "mongoose";
import Value from "../models/value.model.js";

export async function seedDatabase(req, res) {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/seed_resistor", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const seedData = [
      {
        type: "multiplier",
        color: "black",
        value: 1,
      },
      {
        type: "multiplier",
        color: "brown",
        value: 10,
      },
      {
        type: "multiplier",
        color: "red",
        value: 100,
      },
      {
        type: "multiplier",
        color: "orange",
        value: 1000,
      },
      {
        type: "multiplier",
        color: "yellow",
        value: 10000,
      },
      {
        type: "multiplier",
        color: "green",
        value: 100000,
      },
      {
        type: "multiplier",
        color: "blue",
        value: 1000000,
      },
      {
        type: "multiplier",
        color: "violet",
        value: 10000000,
      },
      {
        type: "multiplier",
        color: "grey",
        value: 100000000,
      },
      {
        type: "multiplier",
        color: "white",
        value: 1000000000,
      },
      {
        type: "multiplier",
        color: "gold",
        value: 0.1,
      },
      {
        type: "multiplier",
        color: "silver",
        value: 0.01,
      },
      {
        type: "tolerance",
        color: "brown",
        value: 1,
      },
      {
        type: "tolerance",
        color: "red",
        value: 2,
      },
      {
        type: "tolerance",
        color: "green",
        value: 0.5,
      },
      {
        type: "tolerance",
        color: "blue",
        value: 0.25,
      },
      {
        type: "tolerance",
        color: "violet",
        value: 0.1,
      },
      {
        type: "tolerance",
        color: "grey",
        value: 0.05,
      },
      {
        type: "tolerance",
        color: "gold",
        value: 5,
      },
      {
        type: "tolerance",
        color: "silver",
        value: 10,
      },
    ];

    for (const data of seedData) {
      const newDoc = new Value(data);
      await newDoc.save();
    }

    console.log("Data seed successful");
    res.status(200).json({ message: "Successfully completed data seeding" });
  } catch (e) {
    console.error("Error in data seeding", e);
    res.status(500).json({ message: "Error in data seeding" });
  }
}
