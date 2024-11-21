import React from 'react';
import ImageCarouselSliderComponent from './infinitiSlider';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './button3';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarouselContainer = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;

const StyledTextPet = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: -5vh;
        margin-bottom: 20px;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.6rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }
`;

const PetFriendlyCarousel = ({ carousels }) => {
    return (
        <>
            <StyledTextPet>
                <h1 data-aos="fade-up" data-aos-delay="200">Pet Friendly</h1>
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
                    onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
            </StyledTextPet>

            {carousels.map((carousel, index) => (
                <ImageCarouselSliderComponent
                    key={index}
                    images={carousel.images}
                    reverse={carousel.reverse || false}
                />
            ))}
        </>
    );
};

export default PetFriendlyCarousel;
