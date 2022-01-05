import React from 'react';
import "./Support.css";
import { ReactComponent as Support1} from "../components/images/support1.svg";
import { ReactComponent as Support2} from "../components/images/support2.svg";
import { ReactComponent as Support3} from "../components/images/support3.svg";
import { ReactComponent as Support4} from "../components/images/support4.svg";
import { ReactComponent as Support5} from "../components/images/support5.svg";
import { ReactComponent as Support6} from "../components/images/support6.svg";
import { ReactComponent as Support7} from "../components/images/support7.svg";
import { ReactComponent as Support8} from "../components/images/support8.svg";

function Support() {
    return (
        <div className="support" id="support">
            <div className="support-container">
                <div className="support-title">
                    Поддержка от Drupal-coder
                </div>
                <div className="support-items">
                    <div className="support-item">
                        <div className="support-item-num">01.</div>
                        <div className="support-item-title">
                            Постановка задачи по Email
                        </div>
                        <div className="support-item-desc">
                            Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.
                        </div>
                        <div className="support-img">
                            <Support1/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">02.</div>
                        <div className="support-item-title">
                            Система Helpdesk – отчетность, прозрачность
                        </div>
                        <div className="support-item-desc">
                            Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
                        </div>
                        <div className="support-img">
                            <Support2/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">03.</div>
                        <div className="support-item-title">
                            Расширенная техническая поддержка
                        </div>
                        <div className="support-item-desc">
                            Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
                        </div>
                        <div className="support-img">
                            <Support3/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">04.</div>
                        <div className="support-item-title">
                            Персональный менеджер проекта
                        </div>
                        <div className="support-item-desc">
                            Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.
                        </div>
                        <div className="support-img">
                            <Support4/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">05.</div>
                        <div className="support-item-title">
                            Удобные способы оплаты
                        </div>
                        <div className="support-item-desc">
                            Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
                        </div>
                        <div className="support-img">
                            <Support5/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">06.</div>
                        <div className="support-item-title">
                            Работаем с SLA и NDA
                        </div>
                        <div className="support-item-desc">
                            Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
                        </div>
                        <div className="support-img">
                            <Support6/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">07.</div>
                        <div className="support-item-title">
                            Штатные специалисты
                        </div>
                        <div className="support-item-desc">
                            Надежные штатные специалисты, никаких фрилансеров.
                        </div>
                        <div className="support-img">
                            <Support7/>
                        </div>
                    </div>

                    <div className="support-item">
                        <div className="support-item-num">08.</div>
                        <div className="support-item-title">
                            Удобные каналы связи
                        </div>
                        <div className="support-item-desc">
                            Консультации по телефону, скайпу, в месенджерах.
                        </div>
                        <div className="support-img">
                            <Support8/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;