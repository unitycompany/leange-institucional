import styled from "styled-components";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import IconButton from "./button4";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const AcomodaContainer = styled.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(0 ,0, 0 ,0.1);

    @media(max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`;

const SuiteContainer = styled.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px){
        height: auto;
        justify-content: center;
        flex-direction: column-reverse;
        margin-top: 0vh;
        gap: 10px;
    }
`;

const ImageCarousel = styled.div`
    width: 55%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
        height: 45vh;
    }
`;

const MainImage = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 30px 0 20px;
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
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: var(--color--white);
    border-radius: 0px 30px 0px 10px;
    
    @media (max-width: 768px){
        width: 100%;
        justify-content: space-around;
        padding: 30px 20px;
        height: 60vh;
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
            font-family: var(--font--comfortaa);
            font-size: 1.6rem;
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 1.4rem;
                font-weight: 800;
                width: 100%;
                text-align: left;
            }
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        display: none;

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
    display: none;

    @media (max-width: 768px){
        display: none;
    }
`;

const SuiteDescription = styled.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa);
    
    @media (max-width: 768px){
        font-size: 0.8rem;
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
        font-size: 10px;
        transition: all .2s ease;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 5px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 50px; 
    left: 25px; 
    display: flex;
    width: 10%;
    gap: 5px; 

    @media (max-width: 768px){
        left: 70%;
        border: 1px solid red;
        width: 27%;
        bottom: 40px;
    }
`;

const SwiperButton = styled.div`
    background-color: var(--color--black);
    color: var(--color--white);
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 45px;
    height: 45px;

    @media (max-width: 768px){
        width: 35px;
        height: 35px;
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

const SuiteComponent2 = ({ suites }) => {
    return (
        <>
            <Helmet>
                <title>Acomodações - Pousada Le Ange</title>
            </Helmet>

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
                                                <p>{suite.NomedaSuite}</p>
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
                                        <SuiteDescription>{suite.Description}</SuiteDescription>
                                        <IconButton text="Fazer reserva!" text2="Clique e reserve!" />
                                    </SuiteContent>

                                    <ImageCarousel>
                                        <MainImage src={currentImage} alt={suite.NomedaSuite} />
                                        <Thumbnails>
                                            {suite.images.map((image, imgIndex) => (
                                                <ThumbnailImage
                                                    key={imgIndex}
                                                    loading="lazy"
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
        </>
    );
};

export default SuiteComponent2;
