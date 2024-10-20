import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const ImageContainer = styled(motion.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`;

const OverlayText = styled(motion.div)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--color--black);
    padding: 3px 10px;
    font-family: var(--font--comfortaa);
    background-color: var(--color--white);
    cursor: default;
    font-size: 8px;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); // Sombra para destacar o texto
`;

const ImageCarouselSliderComponent = ({ images = [], reverse = false }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: reverse,
            }}
            speed={2500}
            freeMode={true}
            freeModeMomentum={false}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <ImageContainer
                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }} // Entrada com scale-down e rotação
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <Image 
                            src={image.src} 
                            alt={image.alt || `Imagem ${index + 1}`} 
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: 3 }} // Zoom e leve rotação no hover
                            transition={{ duration: 0.3 }}
                        />
                        <OverlayText
                            initial={{ y: 30, opacity: 0 }} // Entrada com parallax mais dramática
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: 'backOut' }}
                        >
                            {image.label}
                        </OverlayText>
                    </ImageContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarouselSliderComponent;
