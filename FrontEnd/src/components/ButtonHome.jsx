import { useNavigate } from 'react-router-dom';

const ButtonHome = ({ text, color, route }) => {
    const navigate = useNavigate();
    return (
        <div className={`${color} text-white font-bold py-2 px-4 rounded-br-lg border-2 border-transparent hover:border-pink-500 hover:bg-blue-700 transition duration-300 
        ease-in-out cursor-pointer m-2 select-none shadow-lg hover:shadow-pink-500/50 `}
            onClick={() => { route == false ? null : navigate(route) }}>
            {text}
        </div>
    )
}

export default ButtonHome;