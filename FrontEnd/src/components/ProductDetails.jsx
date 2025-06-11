import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonType from "./ButtonType";
import { useProductID } from '../context/contextProduct';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ProductDetails = () => {
    const { selectedProductID } = useProductID();
    const [product, setProduct] = useState(() => {
        //El "localStorage" sirve para guardar datos en el navegador del usuario.
        // Intentar obtener los datos guardados del `localStorage`
        const savedIDProduct = localStorage.getItem('product');
        return savedIDProduct ? JSON.parse(savedIDProduct) : null;
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${selectedProductID}`)
            .then(response => {
                setProduct(response.data.product);
            })
    }, [selectedProductID])

    useEffect(() => {
        if (product) {
            localStorage.setItem('product', JSON.stringify(product));
        }
    }, [product]);

    const ProductDetail = () => {
        return (
            <>
                {Object.values(product.specs).map(spec =>
                    <section key={spec.key} className="w-full flex flex-row gap-2 rounded border border-blue-500">
                        <span className="min-w-75 h-full flex items-center bg-blue-500 p-1 rounded-l-1xl">
                            {spec.key}
                        </span>
                        <span className="p-1">
                            {spec.value}
                        </span>
                    </section>
                )}
            </>
        )
    }

    return (
        <section className="w-full h-full flex flex-wrap gap-2 max-w-600 rounded-lg p-2 overflow-y-auto border border-black bg-gray-900 text-white"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#4a90e2 #2d3748", scrollBehavior: "smooth" }}>
            <article className="w-full h-auto flex flex-col lg:flex-row items-center gap-4 rounded p-2 border border-black bg-gray-800">

                <div className="w-full lg:w-1/2">
                    <img
                        className="w-full h-full aspect-[1/1] object-cover rounded select-none"
                        src={product ? `http://localhost:5000/${product.productImage}` : null}
                        alt={product?.name || "Producto"}
                    />
                </div>

                <aside className="w-full h-full flex  justify-between flex-col">
                    <div>
                        <span className="text-4xl font-semibold pl-1 w-full">
                            {product ? product.name : "Cargando..."}
                        </span>
                        <p className="text-base text-gray-300 pt-3 pl-1 w-full">
                            {product ? product.description : "Cargando..."}
                        </p>
                    </div>

                    <div>
                        <span className="text-3xl font-semibold pl-1 w-full">{product ? `$${product.price}` : "Cargando..."}</span>
                        <div className="w-full flex flex-row items-center">
                            <ButtonType
                                type="onlyIcon"
                                iconName="star"
                                defaultColor="text-white"
                                activeColor="text-yellow-400"
                                sizeClass="w-6"
                                buttonFunction={(e) => {
                                    e.stopPropagation();
                                    console.log("Favorito");
                                }}
                            />

                            <ButtonType
                                type="primary"
                                iconName="cart"
                                text="Agregar Producto"
                                sizeClass="w-6"
                                buttonFunction={(e) => {
                                    e.stopPropagation();
                                    console.log("Comprar");
                                }}
                            />

                            <div className="relative">
                                <select className="ml-2 appearance-none cursor-pointer grow w-full bg-gray-800 border border-blue-500 p-2 rounded-br-lg pr-10">
                                    {[...Array(product.stock)].map((_, i) => (
                                        <option key={i} value={i + 1}>Cantidad: {i + 1}</option>
                                    ))}
                                </select>
                                <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                            </div>

                        </div>
                    </div>
                </aside>
            </article>
            <article className="w-full flex flex-col items-center gap-4 rounded p-2 border border-black bg-gray-800">
                <span className="w-full text-2xl">Detalles</span>
                <ProductDetail />
            </article>

            <article className="p-2 rounded border border-black bg-gray-800">
                <span className="w-full text-2xl">Relacionados</span>
                <div className="overflow-x-auto snap-x scroll-smooth pt-2 w-full">
                    <div className="flex flex-row gap-4">
                        {Array(6).fill(0).map((_, i) => (
                            <div key={i} className="snap-center shrink-0">
                                <img className="w-100 h-auto rounded" src="/Images/Icono Dust.png" alt={`Imagen ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </article>

        </section>
    )
}

export default ProductDetails;
