import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Rewiews.css';
import Logo from "../components/images/image6.5.svg";
import Member1 from "../components/images/right-quote-sign.svg";



export default function Rewiews()  {

const[count, setCount]=useState(1);
const[zero, setZero]=useState("0");

function increment(){
    if(count!=14)
    {
        setCount(count+1);
    }
    else{
        setCount(1);
    }
    if(count>8 && count!=14){
        setZero("");
    }
    else{
        setZero("0");
    }
}
function decrement(){
    if (count != 1) {
        setCount(count - 1);
    }
    else {
        setCount(14);
    }
    if (count > 10 || count==1) {
        setZero("");
    }
    else {
        setZero("0");
    }
}

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={(e) => {
                       increment();
                    onClick(e);
                }}
            />
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={(e) => {
                     decrement();
                    onClick(e);
                }}
            />
        );
    }
        const settings = {
            dots: false,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="rewiews">
                <h1 className="rewiews-title">Отзывы</h1>
                <img src={Member1} alt="img" className="image" />
                <div className="slider">
                    <div className="box-1"><div className="box-2"></div></div>
                    <div className="slider-window">
                    <Slider {...settings}>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img"/>  
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                        <div >
                            <img src={Logo} alt="img" className="slider-item-img" />
                            <div className="slider-item-title">Команда Drupal Coder вызвала только положительные впечатления!</div>
                            <div className="slider-item-text">Нуреев Александр, менеджер проекта Winamp Russian Community</div>
                        </div>
                    </Slider>
                        
                    </div>
                    <h1>{zero}{count}<p className="num"> / 14</p></h1>
                </div>
            </div>
        );
}
