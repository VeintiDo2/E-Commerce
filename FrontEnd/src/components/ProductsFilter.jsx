import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ProductsFilter = () => {
    const [value, setValue] = useState(3000);       // Valor final
    const [tempValue, setTempValue] = useState(3000); // Valor mientras se mueve

    const handleCommit = () => {
        setValue(tempValue);
        console.log("Value:", tempValue);
    };

    return (
        <header className="w-full flex justify-center items-center flex-row p-2 bg-gray-900 border border-black rounded-lg text-white">
            <article className="w-full max-w-600 flex items-center justify-between gap-2">
                <div className="relative w-full">
                    <select className="appearance-none cursor-pointer grow w-full bg-gray-800 border border-black p-2 rounded pr-10">
                        <option value="default" disabled>Selecciona una opción</option>
                        <option value="todos">Todos</option>
                        <option>No</option>
                        <option>Maybe</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>

                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <span className="text-sm text-left">
                        Rango de precios: $0 - ${value}
                    </span>
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        step="50"
                        value={tempValue}
                        onChange={(e) => {
                            setTempValue(e.target.value)
                            setValue(e.target.value)
                        }}
                        onMouseUp={handleCommit}
                        onTouchEnd={handleCommit}
                        className="w-full bg-gray-800 accent-blue-500 rounded-lg appearance-none cursor-pointer custom-range"
                    />
                </div>

            </article>
        </header>
    );
};

export default ProductsFilter;
