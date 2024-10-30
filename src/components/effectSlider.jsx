import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ButtonAcomoda from './button2';

const SwiperStyles = createGlobalStyle`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`;

const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        width: 90%;
        margin-left: 5%;
        border-image: fill 0 linear-gradient(#0001, #00000080)
        }
`;

const BorderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px; /* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    z-index: 1;
`;

const SlideContent = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    gap: 20px;
    z-index: 2;

    @media (max-width: 768px){
        gap: 30px;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;

    @media (max-width: 768px){
        font-weight: 100;
        font-size: 28px;
    }
`;

const Description = styled.p`
    font-size: 14px;
    width: 80%;
    margin: 2px 0 10px;
    font-family: var(--font--avenir);

    @media (max-width: 768px){
        width: 100%;
        text-align: left!important;
        font-size: 13px!important;
    }
`;

const CoverflowSliderComponent = ({
    content = [],
    height = '300px',
    width = '100%',
    autoplayDelay = 3000,
    showPagination = true,
    showNavigation = true,
}) => {
    return (
        <>
            <SwiperStyles />
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={showNavigation}
                pagination={showPagination ? { clickable: true } : false}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: { slidesPerView: 2 }, // Desktop
                    768: { slidesPerView: 2 },  // Tablet
                    0: { slidesPerView: 1 }     // Telefone
                }}
                style={{ width: width, height: height }}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '60%' }}>
                        <SlideContainer backgroundImage={item.backgroundImage}>
                            <BorderOverlay />
                            <SlideContent>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <ButtonAcomoda text="Fazer minha reserva agora"/>
                            </SlideContent>
                        </SlideContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CoverflowSliderComponent;
