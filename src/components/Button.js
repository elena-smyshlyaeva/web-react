import React from "react";
import './Button.css'

export const Button = ({
                           children, //аргумент внутри тега
                           onClick, //функция, реагирующая на клик
                           buttonStyle
}) => {
    const STYLES = [
        'btn--white',
        'btn--orange',
        'btn--black'
    ];

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return(
        <button
            onClick={onClick}
            className={`btn ${checkButtonStyle} btn--medium`}
        >
            {children}
        </button>
    )
}