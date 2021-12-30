import React from 'react';
import {Link} from "react-router-dom";

function NavbarItem(props) {
    return (
        <Link
        to={props.to}
        className="nav-links"
        >
            {props.title}
        </Link>
    );
}

export default NavbarItem;
