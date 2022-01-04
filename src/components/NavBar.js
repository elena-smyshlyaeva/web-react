import React, {useEffect, useState} from 'react';
import { ReactComponent as LogoSvg} from "../components/images/logo.svg";
import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
    //состояние нажатия на элемент изменяется функцией setClick
    const [click, setClick] = useState(false);

    //состояние скроллинга: прокручивает ли пользователь страницу (для фиксирования навбара)
    const [scrolled, setScrolled] = useState(false);

    //отслеживание скроллинга с помощью window.scrollY
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let navbarClasses = ['navbar'];

    //если пользователь листает страницу, добавим класс в навбар, который закрепит его снизу
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    //при нажатии на иконку меню, значение нажатия меняется на противоположное
    //(если меню было открыто, станет закрыто, и наоборот)
    const handleClick = () => {
        setClick(!click);
    }

    //при нажатии на любой пункт навигации, навбар закрывается
    const closeMobileMenu = () => {
        setClick(false)
    }
    return (
        <>
            <nav className="navbar" id={navbarClasses.join('-')}>
                <div className='navbar-container'>
                    <div className="navbar-logo-menu">
                        <Link to='Home' className='navbar-logo' onClick={closeMobileMenu}>
                            <LogoSvg/>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/support' className='nav-links' onClick={closeMobileMenu} spy={true} offset={10}
                                      activeClass="active"
                                >
                                    ПОДДЕРЖКА САЙТОВ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/rates' className='nav-links' onClick={closeMobileMenu} spy={true} offset={-100}
                                      activeClass="active"
                                >
                                    ТАРИФЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/cases' className='nav-links' onClick={closeMobileMenu} spy={true} offset={-70}
                                      activeClass="active"
                                >
                                    НАШИ РАБОТЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/reviews' className='nav-links' onClick={closeMobileMenu} spy={true} offset={50}
                                      activeClass="active"
                                >
                                    ОТЗЫВЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/contacts' className='nav-links' onClick={closeMobileMenu} spy={true} offset={0}
                                      activeClass="active"
                                >
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-info">
                        <a href="tel:88002222673" className="tel">
                            8 800 222-26-73
                        </a>
                        <div className="dropdown">
                            <div className="dropdown-button">RU</div>
                            <div className="dropdown-content">
                                <div className="drop-lang">RU</div>
                                <div className="drop-lang">EN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;