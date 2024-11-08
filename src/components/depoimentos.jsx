import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from "styled-components";
import CustomButton from "./button3";

const StyledTextDepoimentos = styled.section`
    width: 100%;
    margin-top: 5vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    height: 12vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`;

const Container = styled.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; 
    position: relative; 
    overflow: hidden; 

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`;

const DepoimentoText = styled.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; 
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; 
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: .7rem;
        text-align: center;
        width: 60%;
        display: inline-block;
        left: -75px;
        bottom: 72.5%;
        width: 55%;
    }
`;

const depoimentosData = [
    {
        id: 1,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899114/3_nxmzvb.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/2_kck8ru.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/5_tb7gyj.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/4_zkfafk.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899113/6_y0fjmz.jpg"],
    },
    {
        id: 2,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899371/1_yigwnv.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/3_ji6uzq.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/2_v8reyz.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/4_u1pvbr.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899370/5_ty6zqr.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899369/6_dovfum.jpg"],
    },
    {
        id: 3,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899583/1_fddk63.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899583/2_eomyvd.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899581/3_islkto.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899580/4_tds2ap.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899580/5_cvbsbp.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899579/6_cs2odp.jpg"],
    },
    {
        id: 4,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899737/1_vw8gku.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899736/2_u9soep.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899735/3_aryhje.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899735/4_g2prnk.jpg"],
    },
    {
        id: 5,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899833/1_urlgor.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899832/2_elrwj3.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899831/3_scnvzz.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899831/4_j7wxsn.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899830/5_jn3xrs.jpg"],
    },
    {
        id: 6,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730899980/1_zt1frt.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899979/2_m6a7pn.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899978/3_f1nazk.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899977/4_al1kde.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730899976/5_fz3g46.jpg"],
    },
    {
        id: 6,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730900129/1_adshm2.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730900127/2_gvo2bk.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730900126/3_eqkktf.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730900125/4_pw8xsl.jpg", "https://res.cloudinary.com/dupg7clzc/image/upload/v1730900125/5_abwhg7.jpg"],
    }
];

const Depoimentos = () => {
    return (
        <>
            <StyledTextDepoimentos>
                <h1>Palavra do Hóspede</h1>
            </StyledTextDepoimentos>

            <CarouselContainer>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[ Navigation, Pagination, Autoplay ]}
                    pagination={false ? { clickable: true } : false}
                    navigation={true}
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3, 
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        480: {
                            slidesPerView: 1, 
                        },
                    }}
                >
                    {depoimentosData.map((depoimento) => (
                        <SwiperSlide key={depoimento.id}>
                            <Container>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    style={{ width: '100%', height: '100%' }}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                    }}
                                    onMouseEnter={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    {depoimento.bgImages.map((bgImage, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${bgImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '25px 0 25px 0'
                                                }}
                                                loading="lazy"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <DepoimentoText>{depoimento.text}</DepoimentoText>
                            </Container>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CarouselContainer>

            <StyledTextDepoimentos>
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
            </StyledTextDepoimentos>
        </>
    );
}

export default Depoimentos;
