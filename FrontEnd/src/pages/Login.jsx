import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/contextUser.jsx";
import InputType from "../components/Inputs/InputType.jsx"
import ButtonType from '../components/ButtonType';

const Login = () => {
    document.title = "UltraTec - Login and Register";
    const navigate = useNavigate();
    const { setUser } = useUser();
    const [isRegistering, setIsRegistering] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [registerData, setRegisterData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const checkLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", userData)
            if (response.data.success) {
                console.table(response.data.user)
                setUser(response.data.user);
                navigate("/store");
            }
        } catch (error) {
            console.error("Error al iniciar Sesión", error);
        }
    }

    const checkRegister = async (e) => {
        e.preventDefault();
        validateEmail(registerData.email) ? console.log("Email válido") : console.warn("Email inválido");

        try {
            const response = await axios.post("http://localhost:5000/api/users/", registerData);
            const message = response.data.message;
            console.log(message);
        } catch (error) {
            if (error.response) {
                console.warn("Registro fallido:", error.response.data.message);
            } else {
                console.error("Error de red o del cliente:", error.message);
            }
        }
    };


    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    };

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-grow relative flex items-center justify-center bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-[url('Images/HomeBackground.jpg')] bg-center bg-no-repeat bg-cover brightness-40 z-0"></div>
                <article className="w-full relative z-10 text-white flex flex-col md:flex-row items-start justify-center gap-10 h-auto mx-auto overflow-hidden">

                    <form onSubmit={checkRegister} className={`h-150 transform transition duration-1500 ease-in-out ${isRegistering ? "translate-y-0" : "-translate-y-full"} absolute w-full lg:w-150 flex  justify-center items-center flex-col p-2 overflow-hidden bg-gray-800 border border-black rounded-lg text-white`}>
                        <div className='flex flex-col w-100 items-center justify-center'>
                            <img className="select-none w-50" src="/Images/LogoNombre.png" alt="Logo" />
                            <div className="mb-7 mt-12 w-full flex flex-col items-center justify-center">

                                <InputType placeHolder="Nombre" iconName="user" inputType="text" inputName="name" value={registerData.name} inputFuncion={handleRegisterChange} />
                                <InputType placeHolder="Nombre de usuario" iconName="id" inputType="text" inputName="username" value={registerData.username} inputFuncion={handleRegisterChange} />
                                <InputType placeHolder="Correo Electronico" iconName="email" inputType="text" inputName="email" value={registerData.email} inputFuncion={handleRegisterChange} />
                                <InputType placeHolder="Contraseña" iconName="lock" inputType="password" inputName="password" value={registerData.password} inputFuncion={handleRegisterChange} />

                            </div>
                            <ButtonType
                                text="Registrarse"
                                type="primary"
                                isSubmitButton={true}
                                sizeClass="w-6"
                            />
                            <div className="mt-4 text-gray-400">
                                ¿Ya tiene una cuenta? <span className="text-blue-500 cursor-pointer" onClick={() => setIsRegistering(false)}>Inicie sesión aquí</span>
                            </div>
                        </div>
                    </form>


                    <form onSubmit={checkLogin} className="h-150 w-full lg:w-150 flex justify-center items-center flex-col p-2 bg-gray-900 border border-black rounded-lg text-white">
                        <div className='flex flex-col w-100 items-center justify-center'>
                            <img className="select-none w-50" src="/Images/LogoNombre.png" alt="Logo" />
                            <div className="mb-7 mt-12 w-full flex flex-col items-center justify-center">

                                <InputType placeHolder="Nombre de usuario" iconName="user" inputType="text" inputName="username" value={userData.username} inputFuncion={handleChange} />
                                <InputType placeHolder="Contraseña" iconName="lock" inputType="password" inputName="password" value={userData.password} inputFuncion={handleChange} />

                            </div>
                            <ButtonType
                                text="Iniciar Sesión"
                                type="primary"
                                isSubmitButton={true}
                                sizeClass="w-6"
                            />
                            <div className="mt-4 text-gray-400">
                                ¿No tienes una cuenta? <span className="text-blue-500 cursor-pointer" onClick={() => setIsRegistering(true)}>Regístrate aquí</span>
                            </div>
                        </div>
                    </form>


                </article>
            </div >
        </main >
    )
}

export default Login;