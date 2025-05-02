import React from "react";
import { imagesHome } from "../data/Images";
import ButtonHome from "../components/ButtonHome";
import Carousel from "../components/Carousel";

const Home = () => {
    document.title = "Ultra-Tec - Home";

    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-grow relative flex items-center justify-center bg-center bg-no-repeat bg-cover">
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0 bg-[url('Images/HomeBackground.jpg')] bg-center bg-no-repeat bg-cover brightness-40 z-0"></div>

                {/* Contenido principal con diseño responsive */}
                <article className="relative z-10 text-white flex flex-col md:flex-row items-center justify-center gap-10 h-auto mx-auto p-6">
                    {/* Fondo negro con bordes suaves */}
                    <div className="absolute inset-0 bg-black shadow-[0_3px_10px_rgb(0,0,0,0.7)] rounded-2xl opacity-70"></div>

                    {/* Sección del texto con tamaño responsive */}
                    <section className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-down animate-duration-2000 animate-ease-in-out">
                        <div className="mask-b-from-90% mask-b-to-100%">
                            <p className="text-6xl sm:text-7xl md:text-9xl">UltraTec</p>
                            <p className="text-xl sm:text-2xl md:text-4xl mt-2">Tecnología de punta, a tan solo unos clics.</p>
                        </div>

                        {/* Botones con diseño adaptable */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center md:justify-start">
                            <ButtonHome text="Ver Productos 🔍" color="bg-blue-500" route="/Store" />
                            <ButtonHome text="Iniciar Sección 🔥" color="bg-blue-500" route={false} />
                        </div>
                    </section>

                    {/* Carousel adaptado para móviles */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <Carousel images={imagesHome} />
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Home;