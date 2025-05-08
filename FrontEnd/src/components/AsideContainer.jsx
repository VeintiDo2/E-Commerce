import ButtonType from "./ButtonType";
import CardUserProfile from "./CardUserProfile";

const Aside = () => {
    return (
        <aside className=" h-full border  border-black shadow-[0_3px_10px_rgb(0,0,0,0.5)] shadow-blue-950 flex md:flex-col flex-row justify-center items-center gap-5 p-3 bg-gray-900 text-white rounded-lg">
            <img className="select-none w-50 hidden md:flex" src="/Images/LogoNombre.png" alt="Logo" />
            <article className="h-full hidden md:flex md:flex-col items-start justify-start  gap-1.5 mt-2 w-full overflow-hidden">
                <ButtonType
                    text="Inicio"
                    type="invisible"
                    route="/"
                    iconName="home"
                    sizeClass="size-6"
                />
                <ButtonType
                    text="Nosotros"
                    type="invisible"
                    route="/"
                    iconName="us"
                    sizeClass="size-6"
                />
                <ButtonType
                    text="Ofertas"
                    type="invisible"
                    route="/"
                    iconName="dollar"
                    sizeClass="size-6"
                />
            </article>
            <div className="relative flex md:flex-col items-start justify-start gap-0.5 mt-10 w-full">
                <div className="absolute left-6 top-1 rounded-full bg-blue-400 w-6 h-4 flex items-center justify-center">3</div>
                <ButtonType
                    text="Carrito"
                    type="invisible"
                    route="/"
                    iconName="cart"
                    sizeClass="size-6"
                />
                <ButtonType
                    text="Favoritos"
                    type="invisible"
                    route="/"
                    iconName="star"
                    sizeClass="size-6"
                />
            </div>
            <div className="h-25 w-full flex flex-col items-center justify-center overflow-hidden">
                <CardUserProfile />
            </div>
        </aside>
    )
}

export default Aside;