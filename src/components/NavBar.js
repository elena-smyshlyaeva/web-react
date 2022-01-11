import React, {useEffect, useState} from 'react';
import { ReactComponent as LogoSvg} from "../components/images/logo.svg";
import './NavBar.css';
import { Link } from 'react-scroll';

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
                        <Link to='header' className='navbar-logo' onClick={closeMobileMenu}>
                            <LogoSvg/>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link
                                    to='support' /*id компонента, куда ведет ссылка*/
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                    spy={true} /*позволяет оставлять ссылку выбранной, когда скролл на нужной секции*/
                                    activeClass="active" /*название класса, который добавляется, когда на нужной секции*/
                                >
                                    ПОДДЕРЖКА САЙТОВ
                                </Link>
                                <div className="dropdown-button-menu"/>
                                <ul className="nav-dropdown-list">
                                    <li className="nav-dropdown-item">
                                        МИГРАЦИЯ
                                    </li>
                                    <li className="nav-dropdown-item">
                                        БЭКАПЫ
                                    </li>
                                    <li className="nav-dropdown-item">
                                        АУДИТ БЕЗОПАСНОСТИ
                                    </li>
                                    <li className="nav-dropdown-item">
                                        ОПТИМИЗАЦИЯ СКОРОСТИ
                                    </li>
                                    <li className="nav-dropdown-item">
                                        ПЕРЕЕЗД НА HTTPS
                                    </li>
                                </ul>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='plans'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                    spy={true}
                                    activeClass="active"
                                >
                                    ТАРИФЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='cases'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                    spy={true}
                                    offset={-100}
                                    activeClass="active"
                                >
                                    НАШИ РАБОТЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='rewiews'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                    spy={true}
                                    activeClass="active"
                                >
                                    ОТЗЫВЫ
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='contacts'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                    spy={true}
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