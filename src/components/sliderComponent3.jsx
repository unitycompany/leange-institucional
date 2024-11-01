import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import ButtonAcomoda from './button2';

// Global styles for Swiper
const SwiperStyles = createGlobalStyle`

.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`;

const waterWave = keyframes`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`;

const StyledImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`;

const SlideContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${waterWave} 5s ease-in-out infinite;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const BorderOverlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`;

const SlideContent = styled(motion.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`;

const Title = styled(motion.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`;

const Subtitle = styled(motion.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`;

const Features = styled(motion.div)`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`;

// Container for Slider
const SliderWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`;

// Main Slider Component
const SliderComponent = ({
    content = [],
    contentType = 'image',
    spaceBetween = 10,
    slidesPerView = 1,
    height = '300px',
    autoplayDelay = 3000,
    showPagination = true,
    showNavigation = true,
}) => {
    const { scrollY } = useScroll();
    const titleY = useTransform(scrollY, [0, 300], [0, -30]);
    const subtitleY = useTransform(scrollY, [0, 300], [0, -20]);
    const featuresY = useTransform(scrollY, [0, 300], [0, -10]);
    const buttonY = useTransform(scrollY, [0, 300], [0, -5]);

    return (
        <SliderWrapper>
            <SwiperStyles />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={showNavigation}
                pagination={showPagination ? { clickable: true } : false}
                spaceBetween={spaceBetween}
                loop={true}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: true,
                }}
                style={{ height: height }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        height: '200px',
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        height: '250px',
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        height: '300px',
                    },
                }}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index}>
                        {contentType === 'image' ? (
                            <StyledImage 
                                src={item.src} 
                                alt={item.alt || `Slide ${index + 1}`} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            />
                        ) : (
                            <SlideContainer 
                                backgroundImage={item.backgroundImage}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <BorderOverlay />
                                <SlideContent
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                                >
                                    <Title style={{ y: titleY }}>
                                        {item.title}
                                    </Title>
                                    <Subtitle style={{ y: subtitleY }}>
                                        {item.subtitle}
                                    </Subtitle>
                                    <Features style={{ y: featuresY }}>
                                        {item.features.map((feature, idx) => (
                                            <span key={idx}>
                                                {feature.icon} {feature.text}
                                            </span>
                                        ))}
                                    </Features>
                                    <ButtonAcomoda text="Conhecer todas as acomodações" style={{ y: buttonY }} />
                                </SlideContent>
                            </SlideContainer>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderWrapper>
    );
};

export default SliderComponent;
