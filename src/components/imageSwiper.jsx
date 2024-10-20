import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Certifique-se de que você tenha importado o CSS do Swiper
import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const StyledImage = styled.img`
    width: 90%;
    margin-left: 5%;
    height: 70vh;
    border-radius: 30px;
    object-fit: cover; // Para garantir que a imagem cubra o espaço do slide
`;

const StyledTextOverlay = styled.div`
    position: absolute;
    top: 5%;
    left: 7%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-family: var(--font--comfortaa);
    font-size: 0.7rem;
`;

const ImageSwiper = ({ images }) => {
    const autoplayDelay = 3000; // Defina o valor do delay do autoplay em milissegundos

    return (
        <Swiper 
            spaceBetween={10} 
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                    <StyledImage src={image.src} alt={`Atração ${index + 1}`} />
                    <StyledTextOverlay>
                        <h3>{image.text}</h3> 
                    </StyledTextOverlay>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSwiper;
