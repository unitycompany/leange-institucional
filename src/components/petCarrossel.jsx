import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './button3';

const images = [
    '/serra/1.JPG',
    '/serra/2.JPG',
    '/serra/1.JPG',
    '/serra/2.JPG',
    '/serra/1.JPG',
    '/serra/2.JPG',
    '/serra/1.JPG',
    '/serra/2.JPG',
    '/serra/1.JPG',
    '/serra/2.JPG',
];

// Styled component for the carousel container
const CarouselContainer = styled.div`
    height: 80vh;
`;

// Styled component for the slide pairs
const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 10px;
`;

// Styled component for slides
const StyledSwiperSlide = styled(SwiperSlide)`
    width: 100%; // Ajusta a largura para 100% para evitar espaço vazio
    height: 100%;
    display: flex;
    flex-direction: column;
`;

// Styled component for images
const StyledImage = styled.img`
    width: 100%;
    height: ${(props) => (props.index % 2 === 0 ? '40vh' : '30vh')}; /* Alternating height */
    object-fit: cover;
    border-radius: 15px;
`;

const StyledTextPet = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
    }
`;

const PetFriendlyCarousel = () => {
    const autoplayDelay = 1000; // Define o delay do autoplay em milissegundos

    return (
        <>
            <StyledTextPet>
                <CustomButton 
                    text="Reservar agora!"
                    textColor="var(--color--black)"
                    backgroundColor="transparent"
                    borderColor="var(--color--black)"
                    iconColor="var(--color--black)"
                    hoverBackgroundColor="var(--color--black)"
                    hoverBorderColor="var(--color--black)"
                    hoverColor="var(--color--white)"
                    hoverIconColor="var(--color--white)"
                    onClick={() => alert("Reservado!")}
                />
                <h1>Pet Friendly</h1>
            </StyledTextPet>

            <CarouselContainer>
                <Swiper
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    slidesPerView={5} // Ajuste o número conforme necessário
                >
                    {images.map((image, index) => (
                        <StyledSwiperSlide key={index}>
                            <SlideContainer>
                                <StyledImage src={image} alt={`Pet ${index}`} index={index} />
                                {index + 1 < images.length && (
                                    <StyledImage src={images[index + 1]} alt={`Pet ${index + 1}`} index={index + 1} />
                                )}
                            </SlideContainer>
                        </StyledSwiperSlide>
                    ))}
                </Swiper>
            </CarouselContainer>
        </>
    );
};

export default PetFriendlyCarousel;
