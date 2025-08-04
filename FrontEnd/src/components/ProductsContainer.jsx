import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../context/contextProduct.jsx";
import CardProduct from "./CardProduct";
import ButtonType from "./ButtonType";

const ProductsContainer = () => {
    const containerRef = useRef(null);
    const lastScrollTop = useRef(0);
    const [showButton, setShowButton] = useState(false);
    const { filters } = useProduct();
    const [message, setMessage] = useState("");
    const [categoryExists, setCategoryExists] = useState(true)

    //Array de productos
    const [products, setProducts] = useState([]);

    const scrollToTop = () => {
        containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        console.table("Filtros actuales:", filters);
        axios.get(`http://localhost:5000/api/products?price=${filters.price}&category=${filters.category}`)
            .then(response => {
                setProducts(response.data.products)
                setCategoryExists(response.data.success)
            })
            .catch(error => {
                console.warn(error.response.data.message)
                setMessage(error.response.data.message)
                setCategoryExists(error.response.data.success)
            });
    }, [filters]);

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

    const validateProducts = ({ message }) => {
        if (products.length <= 0 || products === null || categoryExists === false) {
            return <h1 className="text-2xl">{message}</h1>
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
            className="relative h-full w-full max-w-600 flex flex-col items-start gap-2 p-2 overflow-y-auto bg-gray-900 text-white rounded-lg
  shadow-blue-950 border border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
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
            {validateProducts({ message })}
        </div>
    );
};

export default ProductsContainer;
