import React from 'react';
import {Link} from "react-scroll";
import './Header.css'
import Background from './videos/video.mp4';
import Cup from './images/cup.png'
import {Button} from "./Button";
import Drupalicon from "./images/druplicon.svg"

const Header = () => {
    return (
        <div className="header">
            {/* фоновое видео */}
            <video src={Background} autoPlay loop muted/>
            {/* затемняющий слой */}
            <div className="dark-layer">
                <div className="drupal-container">
                    <img src={Drupalicon} className="drupal-img"/>
                </div>
            </div>
            <div className="header-container">
                <div className="header-inner">
                    {/* левая сторона макета */}
                    <div className="header-support">
                        <h1 className="title">Поддержка сайтов на Drupal</h1>
                        <h2 className="subtitle">
                            Сопровождение и поддержка сайтов <br /> на CMS Drupal любых версий
                            и запущенности
                        </h2>
                        <Link to='plans'>
                            <Button buttonStyle={'btn--white'}>ТАРИФЫ</Button>
                        </Link>
                    </div>
                    {/* правая сторона макета */}
                    <div className="header-rating">

                        <div className="rating-item">
                            <div className="rating№1">#1</div>
                            <img src={Cup} alt="cup" className="cup-img" />
                            <div className="description">
                                Drupal-разработчик в России по версии Рейтинга Рунета
                            </div>
                        </div>

                        <div className="rating-item">
                            <div className="rating">3+</div>
                            <div className="description">
                                средний опыт специалистов более 3 лет
                            </div>
                        </div>

                        <div className="rating-item">
                            <div className="rating">14</div>
                            <div className="description">
                                лет опыта в сфере Drupal
                            </div>
                        </div>

                        <div className="rating-item">
                            <div className="rating">200+</div>
                            <div className="description">
                                модулей и тем в формате DrupalGive
                            </div>
                        </div>

                        <div className="rating-item">
                            <div className="rating">35 000</div>
                            <div className="description">
                                часов поддержки сайтов на Drupal
                            </div>
                        </div>

                        <div className="rating-item">
                            <div className="rating">200+</div>
                            <div className="description">
                                проектов на поддержке
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;