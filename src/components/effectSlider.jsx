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
import Button from './button';
import IconButton from './button4';

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
    border-radius: 25px 0 25px 0;
    overflow: hidden;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0px 20px 0px;
        }
`;

const BorderOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    border-radius: 25px 0 25px 0;/* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
    }
`;

const SlideContent = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 768px){
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

const TopLeftText = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 15px;
    color: white;
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    color: var(--color--black);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px){
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: .7rem;
        background-color: var(--color--white);
        border-radius: 10px 0 10px 0;
        backdrop-filter: blur(10px);
        color: var(--color--black);
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        text-align: center;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;
    font-weight: 100;

    @media (max-width: 768px){
        font-weight: 100;
        font-size: 26px;
        margin-bottom: 0px;
    }
`;

const Description = styled.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    text-align: left!important;

    @media (max-width: 768px){
        width: 100%;
        text-align: left!important;
        font-size: 13px!important;
        margin-bottom: 0px;
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
                    depth: 300,
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
                        <TopLeftText>{item.topLeftText}</TopLeftText>
                            <BorderOverlay />
                            <SlideContent>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <IconButton
                                 text="Reservar agora"
                                 text2="Clique e reserve agora"
                                 borderColor="var(--color--white)"
                                 textColor="var(--color--white)"
                                 hoverColor="var(--color--green)"
                                 hoverTextColor="var(--color--black)"/>
                            </SlideContent>
                        </SlideContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CoverflowSliderComponent;
