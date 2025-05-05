import React from "react";
import CardUserProfile from "../components/CardUserProfile";
import OptionAside from "../components/OptionAside";
import CardProduct from "../components/CardProduct";
import { iconRequired } from "../data/Icons";

const Store = () => {
    document.title = "UltraTec - Store";

    return (
        <main className="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-2 min-h-screen h-screen p-2 bg-gray-800">
            <aside className="border border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)] shadow-blue-950 row-span-1 md:row-span-5 flex md:flex-col flex-row justify-center items-center gap-5 p-3 bg-gray-900 text-white rounded-lg">
                <img className="select-none w-50 hidden md:flex" src="/Images/LogoNombre.png" alt="Logo" />
                <article className="h-full hidden md:flex md:flex-col items-start justify-start  gap-1.5 mt-2 w-full overflow-hidden">
                    <OptionAside text="Inicio" icon={iconRequired({ iconName: "home", colorClass: "text-white", sizeClass: "w-6" })} route="/" />
                    <OptionAside text="Nosotros" icon={iconRequired({ iconName: "us", colorClass: "text-white", sizeClass: "w-6" })} route={false} />
                </article>
                <div className="relative flex md:flex-col items-start justify-start  gap-1.5 mt-2 w-full">
                    <div className="absolute left-6 top-1 rounded-full bg-blue-400 w-6 h-4 flex items-center justify-center ">5</div>
                    <OptionAside text="Carrito" icon={iconRequired({ iconName: "cart", colorClass: "text-white", sizeClass: "w-6" })} route={false} />
                </div>
                <div className="h-25 w-full flex flex-col items-center justify-center overflow-hidden">
                    <CardUserProfile />
                </div>
            </aside>
            <div className="col-span-1 md:col-span-4 row-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-3 overflow-auto h-full bg-gray-900 text-white rounded-lg shadow-blue-950 border border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)]" style={{ scrollbarWidth: "thin", scrollbarColor: "#4a90e2 #2d3748" }}>

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />

                <CardProduct />
            </div>
        </main>
    )
}

export default Store;