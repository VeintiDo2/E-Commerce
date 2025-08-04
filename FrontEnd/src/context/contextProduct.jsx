import { createContext, useContext, useState } from "react";

const ContextProduct = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProductID, setSelectedProductID] = useState(null);
    const [filters, setFilters] = useState({
        price: 3000,
        category: "Todos"
    });

    return (
        <ContextProduct.Provider value={{ selectedProductID, setSelectedProductID, filters, setFilters }}>
            {children}
        </ContextProduct.Provider>
    );
};

export const useProduct = () => useContext(ContextProduct);
