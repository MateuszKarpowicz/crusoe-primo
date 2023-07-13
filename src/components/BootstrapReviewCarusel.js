import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row, Col } from 'react-bootstrap';
import InstagramWidget from './InstagramWidget';
import '../scss/BootstrapReviewCarusel.scss';

import image1 from '../assets/apartmentgold/image1.webp';
import image2 from '../assets/apartmentgold/gold2.webp';

const BootstrapReviewCarusel = () => {
    const { t } = useTranslation();

    const review = (id) => ({
        id,
        author: t(`reviews.${id}.author`),
        text: t(`reviews.${id}.text`),
    });

    const reviews = ['review1', 'review2', 'review3'].map(review);

    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            setImages([image1, image2]);
        };
        loadImages();
    }, []);

    return (
        <div className="review-container">
            <Row className="align-items-start">
                <Col md={6}>
                    <h2 className="reviews-header">{t('reviews.header')}</h2>
                    <Carousel className="mb-4">
                        {reviews.map((review) => (
                            <Carousel.Item key={review.id}>
                                <div className="review-container text-center">
                                    <p className="review-text">{review.text}</p>
                                    <p className="review-author">- {review.author}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default BootstrapReviewCarusel;
