import { useState } from "react";
import { useProduct } from "../context/contextProduct.jsx"
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ProductsFilter = () => {
    const { filters, setFilters } = useProduct();
    const [tempValue, setTempValue] = useState(3000);

    // Categorias
    const categories = ["Todos", "Monitores", "Teclados", "Mouses", "Sillas", "Graficas", "Procesadores", "Placas Madre", "Almacenamiento", "Gabinetes", "Memoria RAM"]

    // Cambiar categoría
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setFilters(prev => {
            const updated = { ...prev, category: newCategory };
            return updated;
        });
    };

    // Confirmar el cambio de precio
    const handleCommit = () => {
        setFilters(prev => {
            const updated = { ...prev, price: Number(tempValue) };
            return updated;
        });
    };

    return (
        <header className="w-full flex justify-center items-center flex-row p-2 bg-gray-900 border border-black rounded-lg text-white">
            <article className=" flex-col w-full max-w-600 flex items-center justify-between gap-2">

                <div className="w-full flex justify-center items-center">
                    <span>Buscador 🔎</span>
                </div>

                <article className="w-full flex gap-3 justify-center items-center flex-row text-white">
                    <div className="relative w-full">
                        <select
                            value={filters.category}
                            onChange={handleCategoryChange}
                            className="appearance-none cursor-pointer grow w-full bg-gray-800 border border-black p-2 rounded pr-10"
                        >
                            <option value="default" disabled>Selecciona una opción</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <span className="text-sm text-left">
                            Rango de precios: $0 - ${tempValue}
                        </span>
                        <input
                            type="range"
                            min="0"
                            max="3000"
                            step="50"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            onMouseUp={handleCommit}
                            onTouchEnd={handleCommit}
                            className="w-full bg-gray-800 accent-blue-500 rounded-lg appearance-none cursor-pointer custom-range"
                        />
                    </div>
                </article>

            </article>
        </header>
    );
};

export default ProductsFilter;
