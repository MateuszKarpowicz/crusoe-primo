import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/apartmentgold/gold1.webp';
import Image2 from '../assets/apartmentgold/gold2.webp';
import Image3 from '../assets/apartmentgold/gold3.webp';
import Image4 from '../assets/apartmentgold/gold4.webp';
import Image5 from '../assets/apartmentgold/gold5.webp';
import ImageBigGold from '../assets/apartmentgold/image1.webp'
import ImageBigSilver from '../assets/apartmentsilver/silv1.webp'
import Gold from '../assets/apartmentgold/AP-GOLD.png'
import Silver from '../assets/apartmentgold/AP-SILVER.png'
import HighlightsApartmentCard from "./HighlightsApartmentCard";
import ApartmentCardGraphic from "../assets/apartmentcard/apartments-card-texture-down.png";
import Silver1 from '../assets/apartmentsilver/silv1.webp';
import Silver2 from '../assets/apartmentsilver/silv2.webp';
import Silver3 from '../assets/apartmentsilver/silv3.webp';
import Silver4 from '../assets/apartmentsilver/silv4.webp';
import Silver5 from '../assets/apartmentsilver/silv5.webp';
import "../scss/ApartmentCard.scss";

const ApartmentCard = () => {
    const { t } = useTranslation();
    const [apartmentType, setApartmentType] = useState('gold');

    const goldImages = [Image1, Image2, Image3, Image4, Image5];
    const silverImages = [Silver1, Silver2, Silver3, Silver4, Silver5];

    const images = apartmentType === 'gold' ? goldImages : silverImages;
    const ImageBig = apartmentType === 'gold' ? ImageBigGold : ImageBigSilver;

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
                <div className="apartment-card-apartments-button-silver" onClick={() => setApartmentType('silver')}>
                    <img src={Silver} alt="apartment-silver-icon" />
                    <span>Apartment Silver</span>
                </div>
                <div className="apartment-card-apartments-button-gold" onClick={() => setApartmentType('gold')}>
                    <img src={Gold} alt="apartment-gold-icon" />
                    <span>Apartment Gold</span>
                </div>
            </div>
            <div className="apartment-card-title">
                <h3>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.title`)}</h3>
                <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.titlePS`)}</p>
            </div>
            <div className="apartment-card-content">
                <div className="apartment-card-content-up">
                    <div className="apartment-card-image">
                        <img src={ImageBig} alt="apartment" />
                        <div className="apartment-card-features-txt">
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature1`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature2`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature3`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature4`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature5`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature6`)}</p>
                            <p>{t(`apartmentCard${apartmentType.charAt(0).toUpperCase() + apartmentType.slice(1)}.feature7`)}</p>
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
