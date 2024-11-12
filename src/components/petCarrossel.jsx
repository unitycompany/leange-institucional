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
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335871/1_sxf4fc_a9uljb.webp", alt: 'Foto de cachorro com uma bola na boca', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335872/2_cldel9_wnqquw.webp", alt: 'Foto do cachorro sentado tomando sol', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335873/3_i0ctxp_megfsi.webp", alt: 'Cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335875/5_flrzdf_wyxn6v.webp", alt: 'Cachorro com a lingua para fora', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335890/16_mwucoo_qw5inq.webp", alt: 'Mulher na cachoeira com cachorros brincando', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335889/15_epymcf_vqg5qs.webp", alt: 'Mulher e cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335877/6_b6jtbs_dfnbyu.webp", alt: 'Cachorro com óculos escuros', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335880/8_zr7p3o_czbag1.webp", alt: 'Cachorro e um cachorro pequeno', loading: "lazy", label: 'Le Ange Mar' },
];

const imagesCarrossel02 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335878/7_gutmna_mncfkn.webp", alt: 'Foto de um cachorro com uma taça do lado', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335881/10_olepft_mfx8nm.webp", alt: '3 cachorros e um homem na piscina', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335883/11_wlyxbh_wxtele.webp", alt: 'Um cachorro no cola de um humano sorrindo', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335884/12_epl2gw_oc9uc0.webp", alt: 'Cachorro brincando na grama', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335885/13_hhitda_hfolhl.webp", alt: '2 cachorros sorrindo na rede', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335887/14_ybyv7y_wt3zn2.webp", alt: 'Uma mulher e um cachorro do lado dela', loading: "lazy", label: 'Le Ange Serra' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335892/17_awkinq_ommg1k.webp", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
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

            {/* Passando a lógica de autoplay pausado para o Swiper em ambos os carrosséis */}
            <ImageCarouselSliderComponent images={imagesCarrossel01} />
            <ImageCarouselSliderComponent images={imagesCarrossel02} reverse={true} />
        </>
    );
};

export default PetFriendlyCarousel;
