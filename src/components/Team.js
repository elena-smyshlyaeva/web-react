import React from 'react'
import './Team.css';
import Member1 from "../components/images/image2.svg";
import Member2 from "../components/images/image6.svg";
import Member3 from "../components/images/image4.svg";
import Member4 from "../components/images/image4.svg";
import Member5 from "../components/images/image2.svg";
import Member6 from "../components/images/image6.svg";

function Team() {
    return (
        <div className="team">
            <div className="team-container">
                <h1 className="team-title">Команда</h1>
                <div className="team-items">
                    <div className="team-item">
                        <img src={Member1} alt="img" className="team-item-img"/>
                        <div className="team-item-title">Лёша</div>
                        <div className="team-item-desc">руководитель поддержки, планирование задач</div>
                    </div>
                    <div className="team-item">
                        <img src={Member2} alt="img" className="team-item-img" />
                        <div className="team-item-title">Роман</div>
                        <div className="team-item-desc">инфраструктура веб-проектов</div>
                    </div>
                    <div className="team-item">
                        <img src={Member3} alt="img" className="team-item-img" />
                        <div className="team-item-title">Ирина</div>
                        <div className="team-item-desc">менеджер по работе
                                     с клинетами, организация оказания услуг</div>
                    </div>
                    <div className="team-item">
                        <img src={Member4} alt="img" className="team-item-img" />
                        <div className="team-item-title">Даша</div>
                        <div className="team-item-desc">SEO, веб-маркетинг</div>
                    </div>
                    <div className="team-item">
                        <img src={Member5} alt="img" className="team-item-img" />
                        <div className="team-item-title">Сергей</div>
                        <div className="team-item-desc">технический директор, 14 лет опыт работы с Drupal</div>
                    </div>
                    <div className="team-item">
                        <img src={Member6} alt="img" className="team-item-img" />
                        <div className="team-item-title">Вадим</div>
                        <div className="team-item-desc">UX/UI дизайн</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
