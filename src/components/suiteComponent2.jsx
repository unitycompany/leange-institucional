import styled from "styled-components";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import IconButton from "./button4";
import { RxRulerSquare } from "react-icons/rx";
import { GrGroup } from "react-icons/gr";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Footer from "./footer";


// Estilos para o container principal
const AcomodaContainer = styled.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SuiteContainer = styled.section`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 125vh;
        justify-content: center;
        flex-direction: column-reverse;
    }
`;

const ImageCarousel = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`;

const MainImage = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 10px 0 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media (max-width: 768px){
        height: 70%;        
    }
`;

const Thumbnails = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;

    @media (max-width: 768px){
        height: 30%;
    }
`;

const ThumbnailImage = styled.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px 0 10px 0;
    transition: border 0.3s;

    &.active {
        border: 3px solid var(--color--black);

        @media (max-width: 768px){
            border: 1.5px solid var(--color--black);
        }
    }

    &:hover {
        border: 2px solid var(--color--green);
    }
`;

const SuiteContent = styled.main`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    border: 2px solid var(--color--black);
    border-radius: 0px 30px 0px 30px;

    @media (max-width: 768px){
        width: 100%;
        border: 1px solid var(--color--black);
        padding: 30px 20px;
        height: 70vh;
    }

    & > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            height: 10%;
        }
    }

    & > section > div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
            font-family: var(--font--avenir);
            font-size: 1.2em;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1rem;

                width: 100%;
                text-align: center;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        & > hr {
            width: 100%;
            height: 2px;
            background-color: var(--color--black);
            border-color: var(--color--black);

            @media (max-width: 768px){
                margin-top: 5px;
            }
        }
    }
`;

const SuiteTitle = styled.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        display: none;
    }
`;

const SuiteDescription = styled.p`
    font-size: 1rem;
    color: var(--color--black); 

    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;

    @media (max-width: 768px){
        display: none;
    }

    & > div:nth-child(1), & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;

        @media (max-width: 768px){
            display: none;
        }
    }
`;

const Features = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 6px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */

    @media (max-width: 768px){
        right: 15px;
        width: 25%;
        bottom: 40px;
    }
`;

const SwiperButton = styled.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50px; /* Largura do botão */
    height: 50px; /* Altura do botão */

    @media (max-width: 768px){
        width: 30px;
        height: 30px;
        padding: 10px;
    }

    &:after {
        font-size: 0px;
    }

    &:hover {
        background-color: var(--color--white);
        color: var(--color--black);
        border: 1px solid var(--color--black);
    }
`;

const Espace = styled.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 4vh;
    }
`;

const SuiteComponent2 = ({ suites }) => {
    // const { id } = useParams(); // Captura o ID da URL
    // const suite = suites.find(suite => suite.id === id); // Encontra a suíte correspondente

    // if (!suite) {
    //     return <p>Suíte não encontrada.</p>; // Mensagem de erro se a suíte não for encontrada
    // }

    // const [currentImage, setCurrentImage] = useState(suite.images[0]);
    return (
        <>
            <Helmet>
                <title>Acomodações - Pousada Le Ange</title>
            </Helmet>

            <Espace />

            <AcomodaContainer>
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next.custom',
                        prevEl: '.swiper-button-prev.custom',
                    }}
                    pagination={false} 
                    spaceBetween={20}
                    modules={[Navigation, Pagination]}
                >
                    {suites.map((suite, index) => {
                        const [currentImage, setCurrentImage] = useState(suite.images[0]);

                        return (
                            <SwiperSlide key={index}>
                                <SuiteContainer>
                                
                                    <SuiteContent>
                                        <section>
                                            <div>
                                                <SuiteTitle>{suite.NomedaPousada}</SuiteTitle>
                                                <p>Suíte: {suite.NomedaSuite}</p>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                        </section>
                                        <Features>
                                            {suite.features.map((feature, idx) => (
                                                <span key={idx}>
                                                    {feature.icon} {feature.text}
                                                </span>
                                            ))}
                                        </Features>
                                        <InfoContainer>
                                            <div>
                                                <RxRulerSquare size={30} /> {suite.medida}
                                            </div>
                                            <div>
                                                <GrGroup size={30} /> {suite.adultos}
                                            </div>
                                        </InfoContainer>
                                        <SuiteDescription>{suite.Description}</SuiteDescription>
                                        <IconButton text="Fazer reserva!" text2="Vamos lá!" />
                                    </SuiteContent>
                                    <ImageCarousel>
                                        <MainImage src={currentImage} alt={suite.NomedaSuite} />
                                        <Thumbnails>
                                            {suite.images.map((image, imgIndex) => (
                                                <ThumbnailImage
                                                    key={imgIndex}
                                                    src={image}
                                                    alt={`Thumbnail ${imgIndex + 1}`}
                                                    onClick={() => setCurrentImage(image)}
                                                    className={currentImage === image ? 'active' : ''}
                                                />
                                            ))}
                                        </Thumbnails>
                                    </ImageCarousel>
                                </SuiteContainer>
                            </SwiperSlide>
                        );
                    })}

                    <ButtonContainer>
                        <SwiperButton className="swiper-button-prev custom">
                            <AiOutlineArrowLeft />
                        </SwiperButton>
                        <SwiperButton className="swiper-button-next custom">
                            <AiOutlineArrowRight />
                        </SwiperButton>
                    </ButtonContainer>
                </Swiper>
            </AcomodaContainer>
        

            <Footer />
        </>
    );
};

export default SuiteComponent2;
