import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ButtonAcomoda from './button2';
import 'aos/dist/aos.css';

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

const waterWave = keyframes`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`;

const BorderOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${waterWave} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${waterWave} 5s ease-in-out infinite;
  

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

const Subtitle = styled.p`
  font-size: 13px;
  margin: 0px 0;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-size: 12px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`;

const Features = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px){
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 5px 0 5px 0;
      font-size: 10px;
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
      font-size: 12px;

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

const SliderAcomodaHome = ({
  content = [],
  spaceBetween = 10,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (suiteId) => {
    navigate('/acomoda', { state: { suiteId } });
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
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <BorderOverlay />
            <SlideContainer style={{ backgroundImage: `url(${item.backgroundImage})` }}>
              <SlideContent data-aos="fade-down" data-aos-delay="100">
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
                <Features>
                  {item.features.map((feature, idx) => (
                    <span key={idx}>
                      {feature.icon} {feature.text}
                    </span>
                  ))}
                </Features>
                <ButtonAcomoda
                    onClick={() => navigate(`/acomoda${item.id}`)}
                    text="Conhecer essa acomodação"
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
