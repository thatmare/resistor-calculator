import { formatNumber } from "../utils/NumberFormat.js";

export function ResistorDrawing({ result, message }) {
  return (
    <>
      <div className="p-12 flex items-center">
        {/* r1 */}
        <div className="bg-gradient-to-t from-slate-200 from-20% via-gray-500 via-50% to-slate-200 to-80% w-20 h-28 rounded-lg border-4 border-gray-500">
          <div className={`w-4 h-full bg-red-600 m-auto`}></div>
        </div>
        {/* r2 */}
        <div className="bg-gradient-to-t from-slate-200 from-10% via-gray-500 via-50% to-slate-200 to-90% w-44 h-20 border-4 border-l-0 border-r-0 border-gray-500 relative -left-1 z-10 flex shadow-[0px 0px 60px -10px rgba(223, 240, 240, 0.42)]">
          <div className="w-4 h-full bg-red-600 mx-4"></div>
          <div className="w-4 h-full bg-red-600 mx-4"></div>
        </div>
        {/* r3 */}
        <div className="bg-gradient-to-t from-slate-200 from-20% via-gray-500 via-50% to-slate-200 to-80% w-20 h-28 rounded-lg border-4 border-gray-500 relative -left-2">
          <div className="w-4 h-full bg-red-600 m-auto"></div>
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
