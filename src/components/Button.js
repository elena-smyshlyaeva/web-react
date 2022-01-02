import React from "react";
import './Button.css'

export const Button = ({
                           children, //аргумент внутри тега
                           onClick //функция, реагирующая на клик
}) => {
    return(
        <button
            onClick={onClick}
            className={`btn btn--outline btn--medium`}
        >
            {children}
        </button>
    )
}