export function calculateTolerance(bandDColor) {
  switch (bandDColor) {
    case "brown":
      return 1;
    case "red":
      return 2;
    case "green":
      return 0.5;
    case "blue":
      return 0.25;
    case "violet":
      return 0.1;
    case "gray":
      return 0.05;
    case "gold":
      return 5;
    case "silver":
      return 10;
    default:
      return 20;
  }
}
