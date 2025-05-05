import { useNavigate } from 'react-router-dom';

const OptionAside = ({ text, icon, route }) => {
    const navigate = useNavigate();
    return (
        <button className="flex items-start justify-start gap-2 w-full cursor-pointer hover:bg-gray-800 p-3 rounded transition duration-300 ease-in-out"
            onClick={() => { route == false ? null : navigate(route) }}>
            {icon}
            <div className="pl-1">
                {text}
            </div>
        </button>
    )
}

export default OptionAside;