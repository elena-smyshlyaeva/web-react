import React from 'react';
import "./Services.css";
import { ReactComponent as Competency1} from "../components/images/competency-1.svg";
import { ReactComponent as Competency2} from "../components/images/competency-2.svg";
import { ReactComponent as Competency3} from "../components/images/competency-3.svg";
import { ReactComponent as Competency4} from "../components/images/competency-4.svg";
import { ReactComponent as Competency5} from "../components/images/competency-5.svg";
import { ReactComponent as Competency6} from "../components/images/competency-6.svg";
import { ReactComponent as Competency7} from "../components/images/competency-7.svg";
import { ReactComponent as Competency8} from "../components/images/competency-8.svg";
import BackgroundD from "./images/D.png"

function Services() {
    return (
        <div className="services">
            <div className="services-container">
                <div className="services-text">
                    13  лет совершенствуем компетенции в Drupal поддержке!
                </div>
                <div className="services-subtitle">
                    Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн
                </div>

                <div className="services-items">
                    <div className="service-item">
                        <Competency1/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Добавление информации на сайт, создание новых разделов
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency2/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Разработка и оптимизация модулей сайта
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency3/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency4/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Любые доработки функционала и дизайна
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency5/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Аудит и мониторинг безопасности Drupal сайтов
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency6/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Миграция, импорт контента и апгрейд Drupal
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency7/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Оптимизация и ускорение Drupal-сайтов
                        </div>
                    </div>

                    <div className="service-item">
                        <Competency8/>
                        <img src={BackgroundD} className="background-d"/>
                        <div className="services-desc">
                            Веб-маркетинг, консультации и работы по SEO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;