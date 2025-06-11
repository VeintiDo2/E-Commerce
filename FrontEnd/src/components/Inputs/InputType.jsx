import { icons } from '../../data/IconsComponents';

const Input = ({ placeHolder, iconName, inputType, inputName, value, inputFuncion }) => {
    return (
        <div className="m-2 w-full">
            <div className="bg-gray-800 flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-black has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500">
                <div className="text-white select-none w-6 mr-3">{icons[iconName]}</div>
                <input type={inputType} name={inputName} value={value} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none" required placeholder={placeHolder}
                    onChange={inputFuncion}
                />
            </div>
        </div>
    )
}

export default Input;