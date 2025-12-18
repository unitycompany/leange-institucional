import React from 'react';
import ImageCarouselSliderComponent from './infinitiSlider';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './button3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { openBookingEngine } from '../utils/openBookingEngine';

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
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 15vh;
    align-items: center;
    margin-top: 5vh;
    padding: 0 5%;

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

const PetFriendlyCarousel = ({ carousels, propertyKey = 'serra' }) => {
    return (
        <>
            <StyledTextPet>
                <h1 data-aos="fade-up" data-aos-delay="200"><b>100%</b> Pet Friendly</h1>
                <CustomButton 
                    idBtn="clickwpp"
                    text="Reservar agora!"
                    textColor="var(--color--black)"
                    backgroundColor="transparent"
                    borderColor="var(--color--black)"
                    iconColor="var(--color--black)"
                    hoverBackgroundColor="var(--color--black)"
                    hoverBorderColor="var(--color--black)"
                    hoverColor="var(--color--white)"
                    hoverIconColor="var(--color--white)"
                    onClick={() => openBookingEngine({ propertyKey })}
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
