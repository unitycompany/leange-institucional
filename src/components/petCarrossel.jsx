import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    height: ${(props) => (props.index % 2 === 0 ? '50vh' : '30vh')};
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
    margin-top: 5vh;

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

const images5 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901643/1_sxf4fc.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901642/2_cldel9.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901641/3_i0ctxp.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901638/5_flrzdf.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901554/16_mwucoo.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901555/15_epymcf.jpg", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901637/6_b6jtbs.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/8_zr7p3o.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
];

const images6 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901636/7_gutmna.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901633/10_olepft.png", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901631/11_wlyxbh.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901634/9_iinz0o.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901566/12_epl2gw.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901565/13_hhitda.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901556/14_ybyv7y.png", alt: 'Pousada Le Ange Serra', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901490/17_awkinq.png", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg", alt: 'Pousada Le Ange Mar', loading: "lazy", label: 'Le Ange Mar' },
];

const PetFriendlyCarousel = () => {
    const autoplayDelay = 1000;

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
                    onClick={() => alert("Reservado!")}
                />
            </StyledTextPet>

            <ImageCarouselSliderComponent images={images5} />
            <ImageCarouselSliderComponent images={images6} reverse={true} />
        </>
    );
};

export default PetFriendlyCarousel;
