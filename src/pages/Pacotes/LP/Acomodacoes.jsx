import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardAcomodaLp from "../../../components/cards/cardAcomodaLp";
import CardAcomodaEspecialLp from "../../../components/cards/cardAcomodaEspecialLp";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2.5% 5%;
    flex-direction: column;
    gap: 70px;

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (max-width: 768px){
            flex-direction: column-reverse;
            gap: 20px;
            align-items: flex-start;
        }

        & h1 {
            font-size: 36px;
            width: 65%;
            line-height: 1.0;
            font-family: var(--font--comfortaa);
            font-weight: 200;

            @media (max-width: 768px){
                font-size: 28px;
                width: 100%;
            }
    
            & b {
                font-weight: 500;
            }
        }
    
        & > span {
            background-color: #00800015;
            border: 1px solid #00800025;
            padding: 10px 15px;
            border-radius: 10px;
            font-size: 16px;
            font-family: var(--font--comfortaa);
            color: #008000;

            @media (max-width: 768px){
                padding: 7.5px 10px;
                font-size: 14px;
            }
        }
    }
`

const Cards = styled.div`
    width: 100%;

    .swiper {
        padding: 20px 0;
    }

    .swiper-slide {
        height: auto;
        display: flex;
        align-items: stretch;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #008000;
        
        &:after {
            font-size: 20px;
        }
    }

    .swiper-button-next {
        right: 10px;
    }

    .swiper-button-prev {
        left: 10px;
    }

    @media (max-width: 768px) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }
`

export default function AcomodacoesLP () {
    return (
        <>
            <Content>
                <div>
                    <h1>Escolha a suíte que melhor te representa na Pousada Le Ange</h1>
                    <span>Ofertas</span>
                </div>
                <Cards>
                    <CardAcomodaLp 
                    tipo="Standard"
                    quantidade="1.649"
                    nota="4.8"
                    />
                    <CardAcomodaEspecialLp 
                    tipo="Master"
                    quantidade="2.312"
                    nota="5.0"
                    />
                    <CardAcomodaLp 
                    tipo="Superior"
                    quantidade="1.987"
                    nota="4.9"
                    />
                </Cards>
            </Content>
        </>
    )
}