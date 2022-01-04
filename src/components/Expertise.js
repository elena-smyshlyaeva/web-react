import React from 'react';
import "./Expertise.css";
import Laptop from "./images/laptop.png";

function Expertise() {
    return (
        <div className="expertise">
            <div className="wrapper">
                <div className="expertise-container">
                    <div className="expertise-content">
                        <div className="expertise-title">
                            Экспертиза в Drupal, опыт 14 лет!
                        </div>

                        <div className="expertise-items">
                            <div className="expertise-item">
                                Только системный подход – контроль версий, резервирование
                                и тестирование!
                            </div>
                            <div className="expertise-item">
                                Только Drupal сайты,
                                не берем на поддержку сайты на других CMS!
                            </div>
                        </div>

                        <div className="expertise-laptop">
                            <img src={Laptop} className="expertise-laptop-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;