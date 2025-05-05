import ButtonHome from "./ButtonHome";

const CardProduct = ({ }) => {
    return (
        <div className="bg-gray-800 rounded flex flex-col transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-xl border-2 border-black ">
            <div>
                <img className="aspect-4/3 object-cover w-full overflow-hidden rounded-t" src="/Images/Icono Dust.png" />
            </div>
            <div className="p-1">
                <span>Nombre</span>
                <div className="flex items-center justify-center">
                    <span className="grow">$599</span>
                    <ButtonHome text="Añadir" color="bg-blue-500"></ButtonHome>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;