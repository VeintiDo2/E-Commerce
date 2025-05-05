import { HomeIcon, ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline'

//Iconos que se utilizan en el proyecto.
const icons = {
    home: <HomeIcon />,
    us: <UsersIcon />,
    cart: <ShoppingCartIcon />
}

//Función que recibe el nombre del icono, color, valor del color y tamaño. Devuelve el icono correspondiente dentro de un div con las clases corresponsientes.
//Clases en tailwind --- Importante
//Funciona en todo el proyecto (Frontend).
export const iconRequired = ({ iconName, colorClass, sizeClass }) => {
    return (
        <div className={`flex items-center justify-center min-w-6 ${colorClass} ${sizeClass}`}>
            {icons[iconName]}
        </div>
    );
}
