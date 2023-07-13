import React, { useState, useEffect } from 'react';
import SlickSlider from '../components/SlickSlider';
import '../scss/GalleryPage.scss';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const importImages = async () => {
            const importedImages = [];
            for (let i = 1; i <= 6; i++) {
                const image = await import(`../assets/apartmentgold/gold${i}.webp`);
                importedImages.push(image.default);
            }
            setImages(importedImages);
        };

        importImages();
    }, []);

    const openSlider = (index) => {
        setSelectedImage(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <div className="gallery-content">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => openSlider(index)}
                    className="gallery-image"
                />
            ))}
            <SlickSlider
                isOpen={isOpen}
                closeSlider={closeSlider}
                images={images}
                selectedImage={selectedImage}
            />
        </div>
    );
};

export default Gallery;
