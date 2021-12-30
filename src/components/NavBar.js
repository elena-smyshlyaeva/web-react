import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as LogoSvg} from "../components/images/logo.svg";
import {Button} from "./Button";
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false)
    }
    return (
        <nav className="navbar">
            <nav className='navbar-container'>
                <div className="navbar-logo-menu">
                    <Link to='/' className='navbar-logo'>
                        <LogoSvg/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
                                ПОДДЕРЖКА САЙТОВ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/rates' className='nav-links' onClick={closeMobileMenu}>
                                ТАРИФЫ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/cases' className='nav-links' onClick={closeMobileMenu}>
                                НАШИ РАБОТЫ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                                ОТЗЫВЫ
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                                КОНТАКТЫ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar--info">
                    <a href="tel:88002222673" className="navbar--info--tel">
                        8 800 222-26-73
                    </a>
                    <div className="dropdown">
                        <div className="dropbtn">RU</div>
                        <div className="dropdown-content">
                            <div className="drop-lang">RU</div>
                            <div className="drop-lang">EN</div>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;