import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './button3';

const images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142186/pet10_yvsbk7.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142192/pet9_vighbx.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142194/pet7_q7qi0y.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142193/pet8_vdoyh2.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142195/pet6_tuwm6x.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142204/pet5_lrhzej.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142204/pet4_zw9sc2.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142218/pet3_g6dhdo.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142219/pet2_aztjoa.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg',
];

const CarouselContainer = styled.div`
    height: 80vh;

    @media (max-width: 768px){
        height: auto;
    }
`;

const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 10px;

    @media (max-width: 768px){
    }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px){
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: ${(props) => (props.index % 2 === 0 ? '40vh' : '30vh')};
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 768px){
        width: 95%;
        margin-left: 2.5%;
    }
`;

const StyledTextPet = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10px;
        margin-top: -5vh;
        margin-bottom: 20px;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }
`;

const PetFriendlyCarousel = () => {
    const autoplayDelay = 1000;

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
                    breakpoints={{
                        1024: { slidesPerView: 5 }, // 5 slides para telas grandes
                        768: { slidesPerView: 2 },  // 4 slides para tablets
                        480: { slidesPerView: 1 },  // 3 slides para celulares
                    }}
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
