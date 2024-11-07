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
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({ imagePosition }) => (imagePosition === 'right' ? 'row-reverse' : 'row')};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 15px 0 15px 0;
    height: auto;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 20px;
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
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({ $colorDefined }) => $colorDefined || 'var(--color--green)'}; // Prefixo $ adicionado
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  margin-bottom: 1.2em;
  font-size: .9rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
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
  border-radius: 25px 0 25px 0;
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
    bottom: 20px!important;
    top: 90% !important;

    @media (max-width: 768px){

      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-top: -40px!important;
    margin-right: 5px; /* Espaço entre os botões */

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: 0;
    }
  }

  .swiper-button-next {
    left: 150px; /* Coloca o botão "next" próximo ao botão "prev" */
    margin-top: -40px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: 0;
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
                hoverColor="var(--color--black)"
                hoverIconColor="var(--color--black)"
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
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
