export function Resistor() {
    return(
        <div className="p-10 flex items-center">
            {/* r1 */}
            <div className="bg-slate-300 w-20 h-28 rounded-lg border-4 border-gray-500">
                <div className="w-4 h-full bg-red-600 m-auto"></div>
            </div>
            {/* r2 */}
            <div className="bg-slate-300 w-44 h-20 border-4 border-l-0 border-r-0 border-gray-500 relative -left-1 z-10 flex shadow-[0px 0px 60px -10px rgba(223, 240, 240, 0.42)]">
                <div className="w-4 h-full bg-red-600 mx-4"></div>
                <div className="w-4 h-full bg-red-600 mx-4"></div>
            </div>
            {/* r3 */}
            <div className="bg-slate-300 w-20 h-28 rounded-lg border-4 border-gray-500 relative -left-2">
                <div className="w-4 h-full bg-red-600 m-auto"></div>
            </div>
        </div>
    )
}