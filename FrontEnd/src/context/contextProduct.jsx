import { createContext, useContext, useState } from "react";

const ContextProduct = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProductID, setSelectedProductID] = useState(null);

    return (
        <ContextProduct.Provider value={{ selectedProductID, setSelectedProductID }}>
            {children}
        </ContextProduct.Provider>
    );
};

export const useProductID = () => useContext(ContextProduct);
