import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { IoBedOutline, IoStarSharp, IoTvOutline } from "react-icons/io5";
import { MdAcUnit, MdHotel, MdOutlineBathtub, MdSevereCold } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%!important;
    padding: 15px 10px;
    height: auto;
    background-color: #F1F1F1;
    border-radius: 15px;
    position: relative;
    gap: 20px;

    @media (max-width: 768px){
        width: 100%!important;
        flex-direction: column!important;
    }

    &::before {
        width: 102%;
        height: 60%;
        left: -1%;
        top: -0.5%;
        border-radius: calc(15px + 1%);
        content: "";
        position: absolute;
        z-index: -1;
        background-color: #c7c7c7;
    }

    & > aside {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & div:nth-child(1){
            display: flex;
            width: 70%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 0px;

            @media (max-width: 768px){
                width: 50%;
            }

            & > span {
                background-color: transparent!important;
                border: none;
                padding: 0;
                font-size: 14px;
                color: #1d1d1b;
            }

            & > h1 {
                font-size: 32px;
                font-weight: 500;
                font-family: var(--font--avenir);
                color: #1d1d1b;
            }
         }

        & div:nth-child(2){
            display: flex;
            width: 30%;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 768px){
                width: auto;
                gap: 0;
            }

            & > span {
                background-color: transparent!important;
                border: none;
                padding: 0;
                font-size: 14px;
                color: #1d1d1b;
                font-family: var(--font--avenir);
                font-weight: 600;
            }

            & ol {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: row;
                list-style: none;

                & li {
                    color: #FFD700;
                    font-size: 16px;

                    & > b {
                        font-family: var(--font--avenir);
                        font-size: 12px;
                        line-height: 100%;
                        color: #1d1d1b;
                        margin-left: 5px;
                    }
                }
            }
        }
    }

    & > ol {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3px;
        list-style: none;

        & li {
            padding: 5px 7.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            background-color: #f9f9f9;
            border: 1px solid #e9e9e9;
            font-family: var(--font--avenir);
            font-size: 13px;
            border-radius: 4px;
        }
    }

    & > article {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        gap: 5px;
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            width: 100%;
        }

        & p {
            font-size: 14px;
            font-weight: 600;
            color: var(--color--black);
        }

        & h6 {
            font-size: 14px;
            font-weight: 400;
            color: var(--color--black);
            display: flex;
            align-items: flex-end;
            gap: 2px;

            & span {
                font-size: 42px;
                line-height: 100%;
                font-weight: 600;
                margin-bottom: -3px;
                color: var(--color--black);
            }
        }
    }

    & button {
        width: 100%;
        height: auto;
        margin-top: -10px;
        padding: 14px 20px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: var(--font--avenir);
        background-color: #008000;
        color: #fff;
        border: transparent;
        border-radius: 10px;
        cursor: pointer;
    }

    & > p{
        font-family: var(--font--avenir);
        font-size: 15px;
        font-weight: 500;
        color: var(--color--black);

        @media (max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }

    & > span {
        background-color: transparent!important;
        border: none!important;
        padding: 0;
        margin-top: -10px;
        font-size: 13px!important;
        color: #1d1d1b!important;
        font-family: var(--font--avenir);
        font-weight: 400;
        opacity: 0.8;

        & a {
            font-weight: 500;
            color: var(--color--blue);
        }
    } 
`

const Carrossel = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        position: relative;
        width: 100%;
        
        & img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            display: block;

            @media (max-width: 768px){
                height: 100%;
            }
        }

        span {
            position: absolute;
            top: 7px;
            right: 7px;
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            padding: 3px 7px;
            border-radius: 5px;
            font-size: 12px;
            font-family: var(--font--avenir);
            font-weight: 500;
            z-index: 10;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        
        &:after {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            width: 25px;
            height: 25px;
            
            &:after {
                font-size: 12px;
            }
        }
    }
`



export default function CardAcomodaLp({
    tipo,
    quantidade,
    parcela,
    valor,
    data,
    nota
}) {
    // Imagens do carrossel com identificação da pousada
    const carrosselImages = [
        {
            src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",
            pousada: "Le Ange Mar",
            alt: "Pousada Le Ange Mar"
        },
        {
            src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",
            pousada: "Le Ange Serra",
            alt: "Pousada Le Ange Serra"
        },
        {
            src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public",
            pousada: "Le Ange Mar",
            alt: "Vista da Pousada Le Ange Mar"
        },
        {
            src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",
            pousada: "Le Ange Serra",
            alt: "Área externa Le Ange Serra"
        },
        {
            src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",
            pousada: "Le Ange",
            alt: "Pousada Le Ange"
        }
    ];
    return (
        <>
            <Content>
                <aside>
                    <div>
                        <span>Suíte</span>
                        <h1>{tipo}</h1>
                    </div>
                    <div>
                        <span>{quantidade} avaliações</span>
                        <ol>
                            <li><IoStarSharp /></li>
                            <li><IoStarSharp /></li>
                            <li><IoStarSharp /></li>
                            <li><IoStarSharp /></li>
                            <li><IoStarSharp /></li>
                            <li><b>{nota}</b></li>
                        </ol>
                    </div>
                </aside>
                <Carrossel>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={true}
                        pagination={false}
                        loop={false}
                    >
                        {carrosselImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <span>{image.pousada}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Carrossel>
                <ol>
                    <li><MdAcUnit /> Ar Condicionado</li>
                    <li><CgSmartHomeRefrigerator /> Frigobar</li>
                    <li><IoBedOutline /> Cama King Size</li>
                    <li><IoTvOutline /> Smart TV</li>
                    <li><MdOutlineBathtub /> Banheira</li>
                </ol>
                <article>
                    <p>A partir de</p>
                    <h6>10{parcela}x<span>R$414{valor},00</span></h6>
                </article>
                <p>24/05/2025 até 26/05/2025 (2 diárias){data}</p>
                <button>
                    <BsCalendarDate />
                    Fazer minha reserva agora!
                </button>
                <span>*Ao entrar em contato, você concorda com a nossa <a href="" target="_blank">politica de privacidade</a>.</span>

            </Content>
        </>
    )
}