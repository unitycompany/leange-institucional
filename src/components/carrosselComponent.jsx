import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButton from "./button3";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styled, { createGlobalStyle } from "styled-components";
import IconButton from "./button4";

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

const SlideContent = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({ imagePosition }) => (imagePosition === 'right' ? 'row-reverse' : 'row')};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 15px 0 15px 0;
    height: 75vh;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 15px;
    background: none;
  
  }
`;

const SlideText = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  border-radius: 0px 40px 0px 40px;
  background-color: var(--color--white);
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    height: 40vh;
  
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({ $colorDefined }) => $colorDefined || 'var(--color--green)'}; 
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
    height: auto;
  }
`;

const Description = styled.p`
  margin-bottom: 1.2em;
  font-size: 1rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`;

const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({ $bgColor }) => $bgColor || 'var(--color--green)'};
    box-shadow: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom: 20px!important;
    top: 95% !important;

    @media (max-width: 768px){
      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-top: -80px!important;
    margin-right: 5px; 

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: -50px!important;
    }
  }

  .swiper-button-next {
    left: 150px;
    margin-top: -80px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: -50px!important;
    }
  }
`;

const CarouselComponent = ({ slides, titleColor, buttonBgColor, imagePosition = 'left' }) => {
  return (  
    <> 
      <SwiperStyles />
      <StyledSwiper
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,  
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        $bgColor={buttonBgColor}
        onMouseEnter={() => {}}  
        onMouseLeave={() => {}}  
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent imagePosition={imagePosition}>
              <SlideText>
                <Title $colorDefined={titleColor}>{slide.title}</Title> 
                <Description>{slide.description}</Description>
                <IconButton
                    text = "Fazer reserva!"
                    text2 = "Clique e reserve"
                    borderColor = "var(--color--black)"
                    textColor = "var(--color--black)"
                    hoverColor = "var(--color--black)"
                    hoverTextColor = "var(--color--white)"
                />
              </SlideText>
              <ImageContainer>
                <SlideImage src={slide.imageUrl} alt={slide.title} />
              </ImageContainer>
            </SlideContent>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </> 
  );
};

export default CarouselComponent;
