import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
                <div className="footer-container">
                    <div className="footer-text">
                        Проект ООО «Инитлаб», Краснодар, Россия. <br /> Drupal является
                        зарегистрированной торговой маркой Dries Buytaert.
                    </div>
                </div>
                <div className='space-for-navbar'></div>
        </footer>
    );
}

export default Footer;
