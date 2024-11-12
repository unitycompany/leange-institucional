import React, { useState } from 'react';
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

    @media (max-width: 768px){
        height: 25vh;
    }
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
    const [isPaused, setIsPaused] = useState(false); // Estado para controlar o autoplay

    // Função para pausar o autoplay
    const handleMouseEnter = () => {
        setIsPaused(true); // Pausar o autoplay
    };

    // Função para retomar o autoplay
    const handleMouseLeave = () => {
        setIsPaused(false); // Retomar o autoplay
    };

    // Função para pausar o autoplay no mobile
    const handleTouchStart = () => {
        setIsPaused(true); // Pausar o autoplay ao tocar na tela
    };

    // Função para retomar o autoplay no mobile
    const handleTouchEnd = () => {
        setIsPaused(false); // Retomar o autoplay
    };

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: reverse,
                stopOnLastSlide: false,
            }}
            speed={1500}
            freeMode={true}
            freeModeMomentum={false}
            pauseOnMouseEnter={isPaused}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd} 
            breakpoints={{
                320: { slidesPerView: 3 }, 
                768: { slidesPerView: 4 }, 
                1024: { slidesPerView: 5 } 
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <ImageContainer
                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <Image 
                            src={image.src} 
                            alt={image.alt || `Imagem ${index + 1}`} 
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                        />
                        <OverlayText
                            initial={{ y: 30, opacity: 0 }}
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
