import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from "styled-components";
import CustomButton from "./button3";
import 'aos/dist/aos.css';

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
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: auto;
    

    @media (max-width: 768px){
        height: auto;
        padding: 0 5%;
    }
`;

const Container = styled.div`
    width: 95%; 
    height: 600px; 
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
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f192299-26a5-4cba-0d3d-f042f7cc4100/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96048cf4-e533-42ef-631c-17c79f758300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/53ddb117-9d86-42b5-0188-2733003a8400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/95f365f9-0cf7-4a99-de39-71618b26a300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/86f7d35e-3494-439d-483c-48e036d31a00/public"],
    },

    {
        id: 2,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e872f9c-0035-4872-cf50-e7eac0bf1600/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/532a9b10-7c75-4668-65bc-97a13ace5600/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abd1748a-6b4f-4c8d-4dfa-af0a83aaaf00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f04125f-47d3-4abd-c359-9e3c129f6500/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6c7bed9-f486-4be9-db47-7087f6943500/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/122827e6-c434-44a2-0546-d37d2ffeaf00/public"],
    },

    {
        id: 3,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cac55f28-555d-4ce5-6e3b-457af8476c00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a38d49ef-f498-4f03-cecd-d4ac8c69ac00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ffcf23fa-d075-4682-9bda-844c527d7f00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d0f29504-829a-4c8f-8720-4c8ae3d27f00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f1ccf0e-8406-4164-0955-29087e5a0f00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/480b1655-49d4-4323-86c1-345224294000/public"],
    },

    {
        id: 4,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3908ea8d-5d8e-4a13-ac75-dc312f545100/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66aa3be9-dd1d-460a-2a0d-4da92e68dc00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf5974c4-3129-43bb-db61-23404c00d600/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/def5ad59-dc78-4e9a-320b-28d28ec6c500/public"],
    },

    {
        id: 5,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0afec340-71f1-42f3-3ffe-5af2438d7500/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2603ac07-7df2-43eb-697f-99e79942c200/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2c446cd-cffd-49f1-cb59-65ace1b57a00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca778cf7-62d4-48fb-6e1c-1e6d1fc29400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67bb7d62-0ff9-490f-160a-1335e4800200/public"],
    },

    {
        id: 6,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5abab547-8a8a-408f-013d-0ec1ce1b7a00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/faa5f682-d069-4b1c-c022-6d7f99612700/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a78d689b-9028-473c-6edd-b0d0c4912400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e5748ca-ff68-4da1-bff2-e852fa441a00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2ac9fb3-1ba9-422f-ccee-9aea2852df00/public"],
    },

    {
        id: 7,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/695f6ec1-0347-4549-4f16-663780080f00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ddb51ed-4ba4-44ed-06a2-7d6c21838700/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cb252e21-68b5-495b-d8fc-3a1dbe454600/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2e35092-b9d0-49c7-701a-082307a62400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be407d5c-724c-4ebd-9873-a4057f301100/public"],
    }
];

const Depoimentos = () => {
    return (
        <>
            <StyledTextDepoimentos>
                <h1>Palavra do Hóspede</h1>
            </StyledTextDepoimentos>

            <CarouselContainer>
                {/* Primeiro Swiper - Carrossel de depoimentos */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[ Navigation, Pagination, Autoplay ]}
                    pagination={false ? { clickable: true } : false}
                    navigation={true}
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                            <Container data-aos="fade-up" data-aos-delay="200">
                                {/* Segundo Swiper - Carrossel de imagens de fundo dentro de cada depoimento */}
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    style={{ width: '100%', height: '100%' }}
                                    autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                    onClick={() => window.open("https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329", "_blank")}
                />
            </StyledTextDepoimentos>
        </>
    );
}

export default Depoimentos;
