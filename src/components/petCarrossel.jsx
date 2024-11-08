import React from 'react';
import { SwiperSlide } from 'swiper/react';
import ImageCarouselSliderComponent from './infinitiSlider';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './button3';

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

const imagesCarrossel01 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901643/1_sxf4fc.jpg", alt: 'Foto de cachorro com uma bola na boca', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901642/2_cldel9.jpg", alt: 'Foto do cachorro sentado tomando sol', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901641/3_i0ctxp.jpg", alt: 'Cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901638/5_flrzdf.jpg", alt: 'Cachorro com a lingua para fora', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901554/16_mwucoo.png", alt: 'Mulher na cachoeira com cachorros brincando', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901555/15_epymcf.jpg", alt: 'Mulher e cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901637/6_b6jtbs.jpg", alt: 'Cachorro com óculos escuros', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/8_zr7p3o.jpg", alt: 'Cachorro e um cachorro pequeno', loading: "lazy", label: 'Le Ange Mar' },
];

const imagesCarrossel02 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/7_gutmna.jpg", alt: 'Foto de um cachorro com uma taça do lado', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901633/10_olepft.png", alt: '3 cachorros e um homem na piscina', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901631/11_wlyxbh.png", alt: 'Um cachorro no cola de um humano sorrindo', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901566/12_epl2gw.png", alt: 'Cachorro brincando na grama', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901565/13_hhitda.png", alt: '2 cachorros sorrindo na rede', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901556/14_ybyv7y.png", alt: 'Uma mulher e um cachorro do lado dela', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901490/17_awkinq.png", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
];

const PetFriendlyCarousel = () => {

    const autoplayDelay = 100;

    return (
        <>
            <StyledTextPet>
                <h1>Pet Friendly</h1>
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

            <ImageCarouselSliderComponent images={imagesCarrossel01} />
            <ImageCarouselSliderComponent images={imagesCarrossel02} reverse={true} />
        </>
    );
};

export default PetFriendlyCarousel;
