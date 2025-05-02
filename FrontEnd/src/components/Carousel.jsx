import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 700);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="flex justify-center items-center overflow-hidden animate-fade-left animate-duration-2000 animate-ease-in-out">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel"
                className={` aspect-[14/10] w-100 object-cover animate-fade-up md:animate-fade-left animate-duration-1000 animate-ease-in-out select-none`}
            />
        </section>
    );
};

export default Carousel;
