import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import styled, { createGlobalStyle } from 'styled-components';
import IconButton from './button4';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    height: 600px;
    border-radius: 25px 0 25px 0;
    overflow: hidden;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0 20px 0;
    }
`;

const BorderOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    pointer-events: none;
    z-index: 1;

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
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
    color: var(--color--black);
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px) {
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: 0.7rem;
        text-align: center;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`;

const Description = styled.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    font-weight: 300;
    text-align: left!important;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 13px!important;
        margin-bottom: 0;
    }
`;

const CoverflowSliderComponent = ({
    content = [],
    height = '300px',
    width = '100%',
    autoplayDelay = 1500,
    showPagination = true,
    showNavigation = true,
}) => {
    const tiltRef = useRef([]);

    useEffect(() => {
        if (tiltRef.current) {
            tiltRef.current.forEach((tiltElement) => {
                if (tiltElement) {
                    window.VanillaTilt.init(tiltElement, {
                        max: 2,
                        speed: 400,
                        glare: false,
                    });
                }
            });
        }
    }, []);

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
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    1024: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 }
                }}
                style={{ width: width, height: height }}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '60%' }}>
                        <SlideContainer
                            ref={(el) => (tiltRef.current[index] = el)}
                            backgroundImage={item.backgroundImage}
                        >
                            <TopLeftText>{item.topLeftText}</TopLeftText>
                            <BorderOverlay />
                            <SlideContent data-aos="fade-up" data-aos-delay="100">
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <IconButton
                                    IdBtn="clickwpp"
                                    text="Reservar agora"
                                    text2="Clique e reserve agora"
                                    borderColor="var(--color--white)"
                                    textColor="var(--color--black)"
                                    hoverColor="var(--color--white)"
                                    hoverTextColor="var(--color--black)"
                                />
                            </SlideContent>
                        </SlideContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CoverflowSliderComponent;
