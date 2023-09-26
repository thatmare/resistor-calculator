import { formatNumber } from "../utils/NumberFormat.js";

export function ResistorDrawing({
  bandAColor,
  bandBColor,
  bandCColor,
  bandDColor,
  result,
  message,
}) {
  const bandColorToClass = (color) => {
    switch (color) {
      case "black":
        return "bg-black";
      case "brown":
        return "bg-yellow-900";
      case "red":
        return "bg-red-600";
      case "orange":
        return "bg-orange-600";
      case "yellow":
        return "bg-amber-400";
      case "green":
        return "bg-green-600";
      case "blue":
        return "bg-blue-600";
      case "violet":
        return "bg-indigo-700";
      case "grey":
        return "bg-gray-600";
      case "white":
        return "bg-white";
      case "gold":
        return "bg-yellow-600";
      case "silver":
        return "bg-zinc-500";
      default:
        return `bg-${color}-600`;
    }
  };

  const bandAClass = bandAColor ? bandColorToClass(bandAColor) : "";
  const bandBClass = bandBColor ? bandColorToClass(bandBColor) : "";
  const bandCClass = bandCColor ? bandColorToClass(bandCColor) : "";
  const bandDClass = bandDColor ? bandColorToClass(bandDColor) : "";

  return (
    <>
      <div className="p-12 flex items-center">
        {/* r1 */}
        <div className="bg-gradient-to-t from-slate-200 from-20% via-gray-500 via-50% to-slate-200 to-80% w-20 h-28 rounded-lg border-4 border-gray-500">
          <div className={`w-4 h-full ${bandAClass} m-auto`}></div>
        </div>
        {/* r2 */}
        <div className="bg-gradient-to-t from-slate-200 from-10% via-gray-500 via-50% to-slate-200 to-90% w-44 h-20 border-4 border-l-0 border-r-0 border-gray-500 relative -left-1 z-10 flex shadow-[0px 0px 60px -10px rgba(223, 240, 240, 0.42)]">
          <div className={`w-4 h-full ${bandBClass} mx-4`}></div>
          <div className={`w-4 h-full ${bandCClass} mx-4`}></div>
        </div>
        {/* r3 */}
        <div className="bg-gradient-to-t from-slate-200 from-20% via-gray-500 via-50% to-slate-200 to-80% w-20 h-28 rounded-lg border-4 border-gray-500 relative -left-2">
          <div className={`w-4 h-full ${bandDClass} mx-4`}></div>
        </div>
      </div>
      <div className="mx-auto">
        {result && (
          <p className="text-slate-200 font-bold text-2xl border-2 rounded-md border-slate-500 shadow shadow-slate-600 p-2">
            Resistor value: {formatNumber(result.ohmValue)} Ohms
            <br />
            Tolerance: {result.tolerance}%
          </p>
        )}
        {message && <p className="text-xl text-amber-300">{message}</p>}
      </div>
    </>
  );
}
