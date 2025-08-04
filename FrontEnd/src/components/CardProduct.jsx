import ButtonType from "./ButtonType";
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../context/contextProduct';

const CardProduct = ({ product }) => {
    const navigate = useNavigate();
    const { setSelectedProductID } = useProduct();

    return (
        <div className="w-full max-w-600 min-w-150 bg-gray-800 rounded flex flex-row transition duration-300 ease-in-out hover:-translate-y-0.5 cursor-pointer hover:shadow-xl border-2 border-black"
            onClick={() => {
                navigate("/Product");
                setSelectedProductID(product._id);
            }}>
            <div>
                <img
                    className="w-100 h-auto object-contain rounded-l select-none"
                    src={`http://localhost:5000/${product.productImage}`}
                    alt={product.name}
                />
            </div>
            <div className="w-full p-1 flex flex-col gap-2 justify-between">
                <div className="ml-2 flex flex-col gap-1 grow">
                    <span className="text-2xl">{product.name}</span>
                    <p className="text-sm text-gray-400">
                        {product.description}
                    </p>
                </div>
                <section className="flex flex-col items-start justify-end grow">
                    <span className="ml-2 text-2xl">${product.price}</span>
                    <div className="flex flex-row gap-3 ml-2">
                        <ButtonType
                            type="onlyIcon"
                            iconName="star"
                            defaultColor="text-white"
                            activeColor="text-yellow-400"
                            sizeClass="w-6"
                            buttonFunction={(e) => {
                                e.stopPropagation(); // "e.stopPropagation()" sirve para evitar que el clic en el botón se propague al contendor padre.
                                console.log("Favorito");
                            }}
                        />
                        <ButtonType
                            text="Agregar al carrito"
                            type="primary"
                            iconName="cart"
                            sizeClass="w-6"
                            buttonFunction={(e) => {
                                e.stopPropagation();
                                console.log("Agregar");
                            }}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CardProduct;