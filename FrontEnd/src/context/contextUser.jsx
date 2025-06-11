import { createContext, useContext, useState, useEffect } from "react";

//1- Cramos el contexto que vamos a utilizar.
const ContextUser = createContext();

//2- Esta función la vamos a utilizar en el componente principal de la aplicación para proveer a todos los hijos.
export const UserProvider = ({ children }) => {

    //3- Variables de estado que vamos a utilizar para guardar la información del usuario.
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    // Podemos crear mas variables de estado si es necesario.

    //Guardamos en localStorage cuando cambia.
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    //4- Proveemos el estado a todos los hijos
    return (
        <ContextUser.Provider value={{ user, setUser }}>
            {children}
        </ContextUser.Provider>
    );
};

//5- Hook personalizado para acceder al contexto de usuario.
export const useUser = () => useContext(ContextUser);
