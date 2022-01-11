import React from 'react';
import './Cases.css';
import {Button} from "./Button";
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';

function Cases() {
    return (
        <div className="cases" id="cases">
            <div className="cases-container">
                <div className="cases-title">
                    Последние кейсы
                </div>

                <div className="cases-items">
                    <div className="cases-item">
                        <div>
                            <img src={image1} alt="1"/>
                        </div>
                        <div className="cases-text block">
                            <div className="cases-item-title">
                                Настройка выгрузки YML для Яндекс.Маркета
                            </div>
                            <div className="cases-item-date block">
                                22.04.2019
                            </div>
                            <div className="cases-item-desc block">
                                Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div className="cases-img">
                            <img src={image2} alt="2"/>
                            <div className="cases-text">
                                <div className="cases-item-title">
                                    Настройка выгрузки YML для Яндекс.Маркета
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div className="cases-img">
                            <img src={image3} alt="3"/>

                            <div className="cases-text">
                                <div className="cases-item-title">
                                    Настройка выгрузки YML для Яндекс.Маркета
                                </div>
                                <div className="cases-item-date">
                                    22.04.2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div className="cases-img">
                            <img src={image4} alt="4"/>

                            <div className="cases-text">
                                <div className="cases-item-title">
                                    Настройка выгрузки YML для Яндекс.Маркета
                                </div>
                                <div className="cases-item-date">
                                    22.04.2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div>
                            <img src={image5} alt="5"/>
                        </div>
                        <div className="cases-text block">
                            <div className="cases-item-title">
                                Настройка выгрузки YML для Яндекс.Маркета
                            </div>
                            <div className="cases-item-date block">
                                22.04.2019
                            </div>
                            <div className="cases-item-desc block">
                                Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div className="cases-img">
                            <img src={image6} alt="6"/>

                            <div className="cases-text">
                                <div className="cases-item-title">
                                    Настройка выгрузки YML для Яндекс.Маркета
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cases-item">
                        <div className="cases-img">
                            <img src={image7} alt="7"/>
                            <div className="cases-text">
                                <div className="cases-item-title">
                                    Настройка выгрузки YML для Яндекс.Маркета
                                </div>
                                <div className="cases-item-date">
                                    22.04.2019
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cases-btn">
                    <Button buttonStyle="btn--black">ПОКАЗАТЬ ЕЩЕ</Button>
                </div>
            </div>
        </div>
    );
}

export default Cases;