import { useNavigate } from 'react-router-dom';
import { types } from '../data/Types';
import { icons } from '../data/IconsComponents';
import React, { useState } from 'react';

const ButtonType = ({ text, type, route, iconName, defaultColor, activeColor, sizeClass, buttonFunction }) => {
    const navigate = useNavigate();
    const [iconColor, setIconColor] = useState(defaultColor);
    const [active, setActive] = useState(false);

    const handleCheckRoute = () => {
        if (route) navigate(route);
    };

    const handleToggleColor = () => {
        if (iconName === "star") {
            setActive(!active);
            setIconColor(active ? defaultColor : activeColor);
        }
    };

    return (
        <button
            className={`${types[type]} ${iconColor}`}
            onClick={() => {
                handleCheckRoute();
                handleToggleColor();
                buttonFunction()
            }}
        >
            {iconName && <span className={`${sizeClass} ${text ? "mr-2" : null}`}>{icons[iconName]}</span>}
            {text}
        </button>
    );
};

export default ButtonType;