import ButtonType from "./ButtonType";

const CardProduct = ({ }) => {
    return (
        <div className="w-full bg-gray-800 rounded flex flex-row transition duration-300 ease-in-out hover:-translate-y-0.5 cursor-pointer hover:shadow-xl border-2 border-black">
            <div className="">
                <img className="h-full w-250 md:w-150 aspect-3/2 object-cover overflow-hidden rounded-l select-none" src="/Images/Icono Dust.png" />
            </div>
            <div className="p-1 flex flex-col gap-2 justify-between">
                <div className="ml-2 flex flex-col gap-1 grow">
                    <span className="text-2xl">Nombre</span>
                    <p className="text-sm text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, natus? Iste et molestiae quae eaque enim libero laudantium
                        neque accusamus iusto. Eveniet animi vero laboriosam facilis molestias blanditiis ad dignissimos!
                    </p>
                </div>
                <section className="flex flex-col items-start justify-end grow">
                    <span className="ml-2 text-2xl">$599</span>
                    <div className="flex flex-row">
                        <ButtonType
                            type="onlyIcon"
                            iconName="star"
                            defaultColor="text-white"
                            activeColor="text-yellow-400"
                            sizeClass="w-6"
                        />
                        <ButtonType
                            text="Agregar al carrito"
                            type="primary"
                            sizeClass="w-6"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CardProduct;