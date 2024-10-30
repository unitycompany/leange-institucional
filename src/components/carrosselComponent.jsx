import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButton from "./button3";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";

const SlideContent = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  height: 80vh;
  gap: 50px;
  padding: 0 5%;
  flex-direction: ${({ imagePosition }) => (imagePosition === 'right' ? 'row-reverse' : 'row')};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 10px;
    height: auto;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 20px;
  }
`;

const SlideText = styled.div`
  flex: 1;
  height: 100%;

  @media (max-width: 768px){
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 3.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({ $colorDefined }) => $colorDefined || 'var(--color--green)'}; // Prefixo $ adicionado

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.2rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    width: 100%;
    font-size: 1rem;
    height: 10vh;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
  }
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({ $bgColor }) => $bgColor || 'var(--color--green)'}; // Prefixo $ adicionado
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
    bottom: 10px !important;
    top: 90% !important;

    @media (max-width: 768px){

      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-right: 5px; /* Espaço entre os botões */

    @media (max-width: 768px){
      left: 40px!important;
    }
  }

  .swiper-button-next {
    left: 150px; /* Coloca o botão "next" próximo ao botão "prev" */

    @media (max-width: 768px){
      left: 90px!important;
    }
  }
`;

const CarouselComponent = ({ slides, titleColor, buttonBgColor, imagePosition = 'left' }) => {
  return (
    <StyledSwiper
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      $bgColor={buttonBgColor} // Passando a cor com prefixo $
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent imagePosition={imagePosition}>
            <SlideText>
              <Title $colorDefined={titleColor}>{slide.title}</Title> {/* Prefixo $ adicionado */}
              <Description>{slide.description}</Description>
              <CustomButton 
                text="Reservar agora!"
                textColor="var(--color--black)"
                borderColor="var(--color--black)"
                iconColor="var(--color--black)"
                hoverBackgroundColor="var(--color--black)"
                hoverBorderColor="var(--color--black)"
                hoverColor="var(--color--white)"
                hoverIconColor="var(--color--white)"
                onClick={() => alert("Reservado!")}
              />
            </SlideText>
            <ImageContainer>
              <SlideImage src={slide.imageUrl} alt={slide.title} />
            </ImageContainer>
          </SlideContent>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default CarouselComponent;
