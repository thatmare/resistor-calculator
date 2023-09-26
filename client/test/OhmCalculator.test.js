import { expect, vi, describe, afterEach, beforeEach, it } from "vitest";
import { OhmValueCalculator } from "../src/utils/OhmCalculator.class.js";
import { getValues } from "../src/services/fetchValues.js";

vi.mock("../src/services/fetchValues.js", () => ({
  getValues: vi.fn(),
}));

describe("OhmValueCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new OhmValueCalculator();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should correctly calculate the Ohm value and tolerance when provided with 4-color band arguments", async () => {
    getValues.mockResolvedValueOnce(0.01);
    getValues.mockResolvedValueOnce(5);

    const result = await calculator.CalculateOhmValue(
      "grey",
      "yellow",
      "silver",
      "gold"
    );

    expect(result).toEqual({ ohmValue: 0.84, tolerance: 5 });
    expect(getValues).toHaveBeenCalledTimes(2);
    expect(getValues).toHaveBeenCalledWith("multiplier", "silver");
    expect(getValues).toHaveBeenCalledWith("tolerance", "gold");
  });

  it("should correctly calculate the Ohm value and tolerance when provided with the highest limit values", async () => {
    getValues.mockResolvedValueOnce(1000000000);
    getValues.mockResolvedValueOnce(10);

    const result = await calculator.CalculateOhmValue(
      "white",
      "white",
      "white",
      "silver"
    );

    expect(result).toEqual({ ohmValue: 99000000000, tolerance: 10 });
  });

  it("should correctly calculate the Ohm value and tolerance when provided with the lowest limit values", async () => {
    getValues.mockResolvedValueOnce(1);
    getValues.mockResolvedValueOnce(1);

    const result = await calculator.CalculateOhmValue(
      "black",
      "black",
      "black",
      "brown"
    );

    expect(result).toEqual({ ohmValue: 0, tolerance: 1 });
  });

  it("should throw an error when unable to fetch a value", async () => {
    getValues.mockRejectedValue(new Error("Failed to fetch"));

    const calculator = new OhmValueCalculator();

    try {
      await calculator.CalculateOhmValue("grey", "yellow", "silver", "gold");
    } catch (error) {
      expect(error.message).toBe("Failed to fetch");
    }

    expect(getValues).toHaveBeenCalledWith("multiplier", "silver");
  });

  it("should return null when provided with a non-existent tolerance color", async () => {
    getValues.mockResolvedValueOnce(0.01);
    getValues.mockResolvedValueOnce(undefined);

    const result = await calculator.CalculateOhmValue(
      "grey",
      "yellow",
      "silver",
      "pink"
    );

    expect(result).toEqual(null);
  });

  it("should return NaN when provided with a non-existent digit color", async () => {
    getValues.mockResolvedValueOnce(0.01);
    getValues.mockResolvedValueOnce(5);

    const result = await calculator.CalculateOhmValue(
      "grey",
      "pink",
      "silver",
      "gold"
    );

    expect(result).toEqual({ ohmValue: NaN, tolerance: 5 });
  });
});
