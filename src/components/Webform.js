import React from 'react';
import Form from "./Form";
import './Webform.css'
import { ReactComponent as Phone} from "../components/images/phone-line.svg";
import { ReactComponent as Mail} from "../components/images/mail.svg";


const Webform = () => {
    return (
        <div className="webform" id="contacts">
            <div className="webform-container">
                <div className="webform-contacts">
                    <div className="webform-text">
                        <div className="webform-title">Оставить заявку на поддержку сайта</div>
                        <div className="webform-desc">Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</div>
                    </div>
                    <div className="webform-info">
                        <div className="webform-number">
                            <div className="phone-icon">
                                <Phone/>
                            </div>
                            8 800 222-26-73
                        </div>
                        <div className="webform-mail">
                            <div className="mail-icon">
                                <Mail/>
                            </div>
                            info@drupal-coder.ru</div>
                    </div>
                </div>
                <div className="webform-form">
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Webform;