import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/apartment/image6.webp';
import Image2 from '../assets/apartment/image2.webp';
import Image3 from '../assets/apartment/image7.webp';
import Image4 from '../assets/apartment/image4.webp';
import Image5 from '../assets/apartment/image5.webp';
import ImageBig from '../assets/apartment/image1.webp'
import Gold from '../assets/apartment/AP-GOLD.png'
import Silver from '../assets/apartment/AP-SILVER.png'
import HighlightsApartmentCard from "./HighlightsApartmentCard";
import ApartmentCardGraphic from "../assets/apartmentcard/apartments-card-texture-down.png";

import "../scss/ApartmentCard.scss";

const ApartmentCard = () => {
    const { t } = useTranslation();

    const images = [Image1, Image2, Image3, Image4, Image5];

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    return (
        <div className="apartment-card">
            <div className="apartment-card-apartments">
                <div className="apartment-card-apartments-button-silver">
                    <img src={Silver} alt="apartment-silver-icon" />
                    <span>Apartment Silver</span>
                </div>
                <div className="apartment-card-apartments-button-gold">
                    <img src={Gold} alt="apartment-gold-icon" />
                    <span>Apartment Gold</span>
                </div>
            </div>
            <div className="apartment-card-title">
                <h3>{t('apartmentCard.title')}</h3>
                <p>{t('apartmentCard.titlePS')}</p>
            </div>
            <div className="apartment-card-content">
                <div className="apartment-card-content-up">
                    <div className="apartment-card-image">
                        <img src={ImageBig} alt="apartment" />
                        <div className="apartment-card-features-txt">
                            <p>{t('apartmentCard.feature1')}</p>
                            <p>{t('apartmentCard.feature2')}</p>
                            <p>{t('apartmentCard.feature3')}</p>
                            <p>{t('apartmentCard.feature4')}</p>
                            <p>{t('apartmentCard.feature5')}</p>
                            <p>{t('apartmentCard.feature6')}</p>
                            <p>{t('apartmentCard.feature7')}</p>
                        </div>
                    </div>
                </div>

                <div className="apartment-card-content-down">
                    <div className="apartment-card-content-highlights">
                        <HighlightsApartmentCard />
                    </div>
                    <div className="apartment-card-content-mid">
                        <div className="apartment-card-slick-slide">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div className='key' key={index}>
                                    <img src={image} alt={`apartment ${index}`} className="apartment-card-small-image"/>
                                </div>
                            ))}
                        </Slider>
                        </div>
                    </div>
                    <div className="apartment-card-graphic">
                        <img src={ApartmentCardGraphic} alt="apartment-card-graphic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;