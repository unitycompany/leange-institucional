import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
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
      }}
`

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
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${waterWave} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none;
    border-radius: 25px 0 25px 0;
    height: 80vh;
  }
`;

const SlideContent = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 16px;
  margin: 0px 0;

  @media (max-width: 768px){
    font-size: 13px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`;

const Features = styled(motion.div)`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px){
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
      font-family: var(--font--comfortaa);

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
  const navigate = useNavigate(); // Criando uma instância do useNavigate

  const handleButtonClick = (suiteId) => {
    navigate('/acomoda', { state: { suiteId } }); // Navega para /acomoda e passa o ID da suíte
  };

  return (
    <SliderWrapper>
      <SwiperStyles />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={showNavigation}
        pagination={false}
        spaceBetween={spaceBetween}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
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
                  onClick={() => handleButtonClick(item.id)} // Passa o ID da suíte para o botão
                  text="Conhecer acomodações"
                  suiteId={item.id}
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
