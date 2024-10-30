import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import styled from "styled-components";
import CustomButton from "./button3";

// Styled components
const StyledTextDepoimentos = styled.section`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    height: 15vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
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
    height: 70vh;
    padding: 0 5%;

    @media (max-width: 768px){
        border: 2px solid red;
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
    border-radius: 10px; /* Bordas arredondadas */
    position: relative; /* Para posicionar o texto em cima da imagem */
    overflow: hidden; /* Para esconder qualquer conteúdo que extrapole o container */

    @media (max-width: 768px){
        border: 1px solid red;
        height: 65vh;
    }
`;

const Name = styled.h2`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 6px 20px;
        border-radius: 5px;
        top: 5px;
        left: 10px;
        font-size: .9rem;
    }
`;

const DepoimentoText = styled.p`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        font-size: .9rem;
        border: 1px solid red;
        width: 90%;
    }
`;

// Exemplo de dados dos depoimentos
const depoimentosData = [
    {
        id: 1,
        name: "João Silva",
        text: "Ótima experiência!",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/2.JPG", "/public/serra/3.JPG"],
    },
    {
        id: 2,
        name: "Maria Oliveira",
        text: "Atendimento excepcional.",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/5.JPG", "/public/serra/6.JPG"],
    },
    {
        id: 3,
        name: "Carlos Pereira",
        text: "Recomendo a todos!",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/8.JPG", "/public/serra/9.JPG"],
    },
    {
        id: 4,
        name: "Ana Santos",
        text: "Fiquei encantado!",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/11.JPG", "/public/serra/12.JPG"],
    },
    {
        id: 5,
        name: "Pedro Lima",
        text: "Voltarei com certeza.",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/14.JPG", "/public/serra/15.JPG"],
    },
    {
        id: 6,
        name: "Fernanda Costa",
        text: "Uma experiência inesquecível!",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/v1730142220/pet1_krkmac.jpg", "/public/serra/17.JPG", "/public/serra/18.JPG"],
    },
];

const Depoimentos = () => {
    return (
        <>
            <StyledTextDepoimentos>
                <h1>Palavra do Hóspede</h1>
            </StyledTextDepoimentos>

            <CarouselContainer>
                <Swiper
                    slidesPerView={1} // Valor padrão para desktop
                    spaceBetween={10}
                    modules={[ Autoplay ]}
                    grabCursor={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3, // Desktop
                        },
                        768: {
                            slidesPerView: 2, // Tablet
                        },
                        480: {
                            slidesPerView: 1, // Telefone
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
                                                    borderRadius: '10px',
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Name>{depoimento.name}</Name>
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
                    onClick={() => alert("Reservado!")}
                />
            </StyledTextDepoimentos>
        </>
    );
}

export default Depoimentos;
