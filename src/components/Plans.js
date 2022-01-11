import React, { useState } from 'react';
import "./Plans.css";
import { Link } from 'react-router-dom';
import D from "./images/D.svg";
import Modal from './Modal';
import { Button } from "./Button";

function Plans() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="plans" id="plans">
            <img src={D} alt="D" className="plans-background" />
            <div className="plans-container">
                <div className="plans-title">
                    Тарифы
                </div>

                <div className="plans-items">
                    <div className="plans-item">
                        <div className="plans-item-wrap">
                            <div className="plans-item-title">
                                <p className="name">Стартовый</p>
                                <p className="price">2000</p>
                                <p className="hour">в час</p>
                            </div>
                            <div className="plans-item-desc">
                                <ul className="plans-ul">
                                    <li className="plans-li">
                                        Предоплата от 2 часов
                                    </li>
                                    <li className="plans-li">
                                        Консультация и работы по SEO
                                    </li>
                                    <li className="plans-li">
                                        Услуги дизайнера
                                    </li>
                                    <li className="plans-li">
                                        Стандартное время реакции
                                    </li>
                                    <li className="plans-li">
                                        Неиспользованные оплаченные часы переносятся на следующий месяц
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="plans-btn">
                            <Link to="/modal">
                            <Button onClick={() => setModalActive(true)} buttonStyle="btn--orange">ОСТАВИТЬ ЗАЯВКУ!</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="plans-item">
                        <div className="plans-item-wrap">
                            <div className="plans-item-title">
                                <p className="name">Бизнес</p>
                                <p className="price">2000</p>
                                <p className="hour">в час</p>
                            </div>
                            <div className="plans-item-desc">
                                <ul>
                                    <li className="plans-li">
                                        Предоплата от 10 часов
                                    </li>
                                    <li className="plans-li">
                                        Консультация и работы по SEO
                                    </li>
                                    <li className="plans-li">
                                        Услуги дизайнера
                                    </li>
                                    <li className="plans-li">
                                        Высокое время реакции - до 2 рабочих дней
                                    </li>
                                    <li className="plans-li">
                                        Неиспользованные часы не переносятся
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="plans-btn">
                            <Link to="/modal">
                            <Button onClick={() => setModalActive(true)} buttonStyle="btn--orange">ОСТАВИТЬ ЗАЯВКУ!</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="plans-item">
                        <div className="plans-item-wrap">
                            <div className="plans-item-title">
                                <p className="name">VIP</p>
                                <p className="price">1800</p>
                                <p className="hour">в час</p>
                            </div>
                            <div className="plans-item-desc">
                                <ul>
                                    <li className="plans-li">
                                        Предоплата от 100 часов
                                    </li>
                                    <li className="plans-li">
                                        Консультация и работы по SEO
                                    </li>
                                    <li className="plans-li">
                                        Услуги дизайнера
                                    </li>
                                    <li className="plans-li">
                                        Максимальное время реакции – в день обращения
                                    </li>
                                    <li className="plans-li">
                                        Неиспользованные часы не переносятся
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="plans-btn">
                            <Link to="/modal">
                            <Button onClick={() => setModalActive(true)} buttonStyle="btn--orange">ОСТАВИТЬ ЗАЯВКУ!</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="plans-subtitle">
                    <div className="plans-subtitle-up">
                        Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
                    </div>
                    <div className="plans-subtitle-link">
                        <a href="/">получить индивидуальный тариф </a>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
}

export default Plans;