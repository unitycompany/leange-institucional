import React from "react";  
import styled from "styled-components";
import CardDepoimento from "../cards/cardDepoimento";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Content = styled.main`
    max-width: 1280px;
    padding: 2.5% 5%;
    font-family: var(--font--comfortaa);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    
    @media (max-width: 768px) {
        padding: 5% 5%;
        gap: 20px;
    }
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 2% 0;

    & h1 {
        width: 100%;
        font-size: 2rem;
        font-weight: 300;
        text-align: left;
        color: var(--color--black);
        
        @media (max-width: 768px) {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`;

const SwiperContainer = styled.div`
    width: 100%;
    
    .swiper {
    }
    
    .swiper-button-next,
    .swiper-button-prev {
        background: #000;
        box-shadow: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-top: -25px;
        color: var(--color--white);
        transition: all .2s ease;
        
        @media (max-width: 768px) {
            width: 35px;
            height: 35px;
            top: 20%;
            margin-top: -20px;
            
            &:after {
                font-size: 14px;
            }
        }
    }
    
    .swiper-button-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .swiper-pagination {
        position: relative;
        margin-top: 30px;
        
        .swiper-pagination-bullet {
            width: 10px;
            border-radius: 5px;
            height: 5px;
            background: #ccc;
            opacity: 1;
            transition: all 0.3s ease;
            
            &:hover {
                background: var(--color--black);
                transform: scale(1.2);
            }
        }
        
        .swiper-pagination-bullet-active {
            background: var(--color--black);
            transform: scale(1.1);
            width: 25px;
        }
    }
`;


export default function DepoimentoDoHospede ({ depoimentos = [], propertyKey = 'serra' }) {
    if (!depoimentos.length) {
        return null;
    }

    return (
        <Content>
            <Text>
                <h1>Veja a opinião de quem já viveu essa experiência</h1>
            </Text>
            
            <SwiperContainer>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={depoimentos.length > 1}
                    pagination={depoimentos.length > 1 ? { clickable: true } : false}
                    autoplay={depoimentos.length > 1 ? {
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    } : false}
                    loop={depoimentos.length > 1}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {depoimentos.map((depoimento, index) => (
                        <SwiperSlide key={index}>
                            <CardDepoimento 
                                image={depoimento.image}
                                text={depoimento.text}
                                logo={depoimento.logo}
                                nome={depoimento.nome}
                                nota={depoimento.nota}
                                propertyKey={propertyKey}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </Content>
    );
}