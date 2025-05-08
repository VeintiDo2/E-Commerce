import { useRef, useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import ButtonType from "./ButtonType";

const ProductsContainer = () => {
    const containerRef = useRef(null);
    const lastScrollTop = useRef(0);
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

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

    return (
        <div
            ref={containerRef}
            className="relative max-w-600 flex flex-wrap gap-4 p-2 overflow-y-auto bg-gray-900 text-white rounded-lg shadow-blue-950 border border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
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

            {Array.from({ length: 22 }).map((_, i) => (
                <CardProduct key={i} />
            ))}
        </div>
    );
};

export default ProductsContainer;
