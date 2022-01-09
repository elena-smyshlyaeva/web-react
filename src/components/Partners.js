import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partners.css';
import Partner2 from "../components/images/image3.svg";
import Partner1 from "../components/images/image1.svg";
import Partner3 from "../components/images/image5.svg";
import Partner4 from "../components/images/image7.svg";

export default function Partners() {
    const settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="partners">
            <div className="partners-container">
                <h2 className="partners-title">С нами работают</h2>
                <div className="partners-desc">
                    Десятки компаний доверяют нам самое ценное, что у них есть в
                    интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество
                    было долгим.
                </div>
            
            <Slider {...settings1}>

                <div>
                    <div className="partners-item">
                        <img src={Partner1} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner2} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner3} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner4} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner1} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner2} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner3} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner4} alt="img" className="partners-item-img" />
                    </div>
                </div>

            </Slider>
            <Slider {...settings2}>

                <div>
                    <div className="partners-item">
                        <img src={Partner1} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner2} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner3} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner4} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner1} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner2} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner3} alt="img" className="partners-item-img" />
                    </div>
                </div>
                <div>
                    <div className="partners-item">
                        <img src={Partner4} alt="img" className="partners-item-img" />
                    </div>
                </div>

            </Slider>
            </div>
        </div>
    );
}