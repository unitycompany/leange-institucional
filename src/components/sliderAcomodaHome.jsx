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
      color: white; 
      background-color: black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      
      &:hover {
          background-color: white;
          color: black;
          transform: scale(1.05);
      }
  }
  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`;

// Keyframes for animation
const waterWave = keyframes`
  0% { border-radius: 0 60px 20px 0; }
  25% { border-radius: 20px 0 60px 20px; }
  50% { border-radius: 60px 20px 0 60px; }
  75% { border-radius: 60px 60px 20px 0; }
  100% { border-radius: 0 20px 60px 0; }
`;

// Styled components
const SlideContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${waterWave} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none;
    border: 1px solid red;
    border-radius: 0;
    border-image: fill 0 linear-gradient(#0001, #00000080);
  }
`;

const SlideContent = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;

  @media (max-width: 768px){
    border: 1px solid red;
  }
`;

const Title = styled(motion.h2)`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px){
    border: 1px solid red;
    font-family: var(--font--comfortaa);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px){
    border: 1px solid red;
    font-size: 12px;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
  }
`;

const Features = styled(motion.div)`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px){
    border: 1px solid red;
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 12px;
      font-size: 12px;

      @media (max-width: 768px){
        font-size: 10px;
        padding: 5px 8px;
        border-radius: 6px;
      }

      &:hover {
          color: black;
          background-color: white;
      }
  }

  svg {
      font-size: 16px;

      @media (max-width: 768px){
        font-size: 12px;
      }
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

// Main Slider Component
const SliderAcomodaHome = ({
  content = [],
  spaceBetween = 10,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
}) => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -30]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -20]);
  const featuresY = useTransform(scrollY, [0, 300], [0, -10]);

  return (
    <SliderWrapper>
      <SwiperStyles />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={showNavigation}
        pagination={false}
        spaceBetween={spaceBetween}
        loop={true}
        slidesPerView={1} // 1 por vez em telas menores
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide em telas pequenas
          1024: { slidesPerView: 2 }, // 2 slides em telas grandes
        }}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideContainer style={{ backgroundImage: `url(${item.backgroundImage})` }}>
              <SlideContent>
                <Title style={{ y: titleY }}>{item.title}</Title>
                <Subtitle style={{ y: subtitleY }}>{item.subtitle}</Subtitle>
                <Features style={{ y: featuresY }}>
                  {item.features.map((feature, idx) => (
                    <span key={idx}>
                      {feature.icon} {feature.text}
                    </span>
                  ))}
                </Features>
                <ButtonAcomoda 
                text="Conferir todas as acomodações"
                />
              </SlideContent>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default SliderAcomodaHome;
