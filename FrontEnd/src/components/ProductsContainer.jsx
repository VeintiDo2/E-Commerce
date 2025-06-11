import { useRef, useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import ButtonType from "./ButtonType";

const ProductsContainer = () => {
    const containerRef = useRef(null);
    const lastScrollTop = useRef(0);
    const [showButton, setShowButton] = useState(false);

    //Array de productos
    const [products, setProducts] = useState([]);

    const scrollToTop = () => {
        containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(response => {
                setProducts(response.data.products)
            })
            .catch(error => console.error("Error al obtener datos:", error));
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;

            if (scrollTop > lastScrollTop.current && scrollTop > 100) {
                setShowButton(true);
            } else if (scrollTop <= 100) {
                setShowButton(false);
            }

            lastScrollTop.current = scrollTop;
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const validateProducts = () => {
        if (products.length <= 0 || products === null) {
            return <h1 className="text-2xl">No hay resultados</h1>
        } else {
            return (
                <>
                    {products.map((product, i) => (
                        <CardProduct key={i} product={product} />
                    ))}
                </>
            )
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative h-full w-full max-w-600 flex justify-start items-center flex-wrap gap-4 p-2 overflow-y-auto bg-gray-900 text-white rounded-lg shadow-blue-950 border border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#4a90e2 #2d3748" }}
        >

            {showButton && (
                <div className="absolute bottom-2 right-2 z-10 animate-fade animate-once animate-ease-in-out">
                    <ButtonType
                        type="fixed"
                        iconName="arrowUp"
                        sizeClass="size-6"
                        buttonFunction={scrollToTop}
                    />
                </div>
            )}
            {validateProducts()}
        </div>
    );
};

export default ProductsContainer;
