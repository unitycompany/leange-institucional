import React, { useEffect, useState } from "react";
import { getEvents } from "../../../firebaseService";
import { FaRulerCombined, FaSnowflake, FaBed, FaBath, FaTv, FaFire } from 'react-icons/fa';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import SliderComponent from '../../components/sliderComponent';
import TitlePousadas from '../../components/titlePousadas';
import CoverflowSliderComponent from '../../components/effectSlider';
import ImageCarouselSliderComponent from '../../components/infinitiSlider';
import EventCardCarousel from '../../components/cardSlider';
import Footer from '../../components/footer';
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import SliderAcomodaHome from '../../components/sliderAcomodaHome';
import Button from '../../components/button';
import WhatsAppButton from '../../components/Whatsapp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Regras from '../../components/regras';
import EventAlert from '../../components/alertEvent';

const imagesSerra = [
    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public", alt: 'Mulher na rede', loading: "lazy" },

    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public", alt: 'Foto da pousada le ange vista de cima', loading: "lazy" },

    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public", alt: '2 cachorros na piscina', loading: "lazy" },

    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f4a1515f-dd60-47ad-f799-1a1813af9300/public", alt: 'Foto da pousada vista de baixo', loading: "lazy" },

    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public", alt: 'Foto da sala de estar da pousada le ange serra', loading: "lazy" },

    { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public", alt: '2 cachorros na cama no meio do quintal', loading: "lazy" }
];

const imagesMar = [
    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public', alt: 'Foto da pousada le ange mar',loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public', alt: '2 pessoas na rede na pousada le ange mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public', alt: 'Foto de churrasco', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public', alt: 'Cachorro olhando para a câmera', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public', alt: 'Pousada le ange mar vista de cima', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public', alt: 'Sala de estar na le ange mar com o quadro na parede', loading: "lazy" }
];

const imagesCarrossel01 = [
    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public', alt: 'Pessoa na rede', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public', alt: '2 cachorros na piscina', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public', alt: 'Sala de estar na le ange serra', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public', alt: 'Hot Tube na le ange serra', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/81b9f4b9-48ac-4aeb-76be-57b13ddd7300/public', alt: '2 pessoas bebendo na le ange mar', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fabb090f-5470-4b80-d24e-212cea38ef00/public', alt: '2 pessoas na le ange mar', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aee972d8-1698-4318-7f15-6ecd607c8f00/public', alt: 'Sala de estar da le ange mar', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/345b0279-69a3-47ee-31f9-a018b8459000/public', alt: 'Por do sol na le ange', label: 'Le Ange Serra', loading: "lazy" },
];

const imagesCarrossel02 = [
    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6da9939-7a24-41a2-9002-2f3da2707f00/public', alt: 'Foto do quarto na le ange', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public', alt: 'Foto de churrasqueira na le ange mar', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public', alt: 'Cachorro com a cabeça recostada na mão do tutor', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca87e74f-2193-4308-4ce7-737e3d878f00/public', alt: 'Uma pessoa e um cachorro na piscina', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c7b74408-cebf-4bb7-dc9a-36170887c100/public', alt: '2 taças com um fundo de por do sol', label: 'Le Ange Mar', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public', alt: '2 cachorros em uma cama no meio do jardim', label: 'Le Ange Serra', loading: "lazy" },

    { src: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public', alt: 'Foto do quadro de cachorro na le ange mar', label: 'Le Ange Serra', loading: "lazy" },
];

const StyledContainerPousadas = styled.section`
    width: 100%;
    height: auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    &:nth-child(2){
        @media (max-width: 768px){
            flex-direction: column;
            position: relative!important;
            z-index: -100!important;
        
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        position: relative;
        z-index: -100!important;
    
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`

const StyledPousadas = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`

const StyledPousadasTitle = styled.aside `

    
    width: 100%;
    padding: 3.5%;

    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;

        & > b{
            font-weight: 300;
        }

        @media (max-width: 768px){
            font-size: 22px;
            width: 100%;
            margin-top: 0vh;
            height: auto;

        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`

const acomodaHome = [
    {
      id: "Serra#suite1",
      title: "Suíte Superior 1",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",
      features: [
        { icon: <FaRulerCombined />, text: "52m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <FaTv />, text: "Smart TV com canais a cabo" },
        { icon: <FaFire />, text: "Lareira" }
      ]
    },

    {
        id: "Serra#suite2",
        title: "Suíte Standard 2",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",
        features: [
          { icon: <FaRulerCombined />, text: "52m²" },
          { icon: <FaSnowflake />, text: "Ar condicionado" },
          { icon: <FaBed />, text: "Cama king size" },
          { icon: <FaBath />, text: "Banheira" },
          { icon: <FaTv />, text: "Smart TV com canais a cabo" },
          { icon: <FaFire />, text: "Lareira" }
        ]
    },

    {
      id: "Serra#suite6",
      title: "Suíte Master 6",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public",
      features: [
        { icon: <FaRulerCombined />, text: "93m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <SiApachecouchdb />, text: 'Couch lounge' },
        { icon: <TbBrandWindows />, text: 'Bay window' }
      ]
    },

    {
        id: "Mar#suite6",
        title: "Suíte Standard 6",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },

    {
        id: "Mar#suite2",
        title: "Suíte Standard 2",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2c65f24d-c113-4ea7-def4-783519605e00/public",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },

    {
        id: "Serra#suite10",
        title: "Suíte Master 10",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b3e8e3c-57ba-4e47-dd41-7b4a32d25f00/public",
        features: [
            { icon: <FaRulerCombined />, text: "80m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <MdChair />, text: 'Recamier e poltrona de leitura' },
            { icon: <SiApachecouchdb />, text: 'Couch lounge' },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
  ];

const StyledAcomoda = styled.section`
    height: auto;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0px;
    padding: 0;
    position: relative;
    

    & > div {
        
        padding: 3.5% 5% 0% 5%;
        width: 100%;
    }
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: #f5f5f5;
        clip-path: polygon(1% 1%, 99% 1%, 99% 85%, 1% 85%);
    }

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`

const slideDataCoverflow = [
    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public',
        title: '100% Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar'
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public',
        title: 'Praia',
        description: 'Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public',
        title: 'Sossego',
        description: 'A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public',
        title: 'Piscinas',
        description: 'Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/179ab52c-353f-442a-ffe5-0a71f6922f00/public',
        title: 'Cozinha',
        description: 'Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public',
        title: 'Ofurôs',
        description: 'São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public',
        title: 'Diversão',
        description: 'Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public',
        title: 'Bar',
        description: 'Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public',
        title: 'Adega',
        description: 'Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },

    {
        backgroundImage: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public',
        title: 'Suítes',
        description: 'Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
];

const StyledEstrutura = styled.div`
    height: auto;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }

    &::before {
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`

const StyledEstruturaTitle2 = styled.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`

const StyledEstruturaTitle = styled.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;
    font-weight: 200;
    
    margin-top: 5vh;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`

const StyledEstruturaSubTitle = styled.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    opacity: 0.7;
    font-family: 200;
    font-size: .9rem;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`

const StyledCarrosselSection = styled.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`

const StyledContainerEvents = styled.section`
    width: 90%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%)!important;
    position: relative;
    
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5%;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`

const StyledColorBGreen = styled.b`
    color: var(--color--green);
`

const StyledColorBBlue = styled.b`
    color: var(--color--blue);
`

const StyledButtonCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top: -10vh;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        margin-bottom: 5vh;
        margin-top: -5vh;
        height: 10vh;
    }
`

const HomeImage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 1000px 1000px / 100px 100px;
    overflow: hidden;

    @media (max-width:768px){
        flex-direction: column;
    }

    & > img{
        width: 50%;
        height: 100%;
        object-fit: cover;

        @media (max-width:768px){
            width: 100%;
            height: 50%;
            object-position: center;
        }
        
    }
`

const HomeImageOficial = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    overflow: hidden;

    @media (max-width:768px){
    }

    & > a{
        width: 50%;
        height: 100%;
        overflow: hidden;
        
        & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s ease-in-out;
        position: relative;
        filter: brightness(120%);

        &:hover{
            transform: scale(1.02) rotate(1deg);
        }

        @media (max-width:768px){
            width: 100%;
            height: 100%;
            object-position: center;
        }
        
    }
    }
`

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação (em ms)
          once: true,     // Executar animação apenas uma vez
        });
      }, []);
      
        const [events, setEvents] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const data = await getEvents();
              setEvents(data);
            } catch (error) {
              console.error("Erro ao buscar eventos do Firebase:", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
        }, []);

    return (
        <>
            <Helmet>
                <title>Início - Pousada Le Ange</title>
            </Helmet>

            <HomeImageOficial>
                <a href='/mar'>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b3e6c25b-9ed6-4a84-5ee0-3ed539b29b00/public"></img>
                </a>
                <a href='/serra'>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/565f57fa-9f92-434e-7e76-192ec1299700/public"></img>
                </a>
            </HomeImageOficial>

            <WhatsAppButton />

            <StyledPousadas>

                <StyledPousadasTitle>
                    <h1 data-aos="fade-up">Pousada<StyledColorBBlue> 100% Pet Friendly</StyledColorBBlue> que aceita humanos de estimação</h1>
                    <p data-aos="fade-up" data-aos-delay="200">2 unidades, 2 cenários incomparáveis</p>
                </StyledPousadasTitle>

                <StyledContainerPousadas data-aos="fade-up">
                    <SliderComponent 
                        content={imagesSerra} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        height="50vh" 
                        contentType="image" 
                        showPagination={false} 
                    />
                    <TitlePousadas 
                        title="Le Ange Serra - Miguel Pereira RJ" 
                        text="Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!" 
                        borderColor="var(--color--green)"
                        borderRadius="30px" 
                        buttonColor="var(--color--green)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/serra"
                        idade="*Só permitimos crianças acima de 13 anos!"
                    />
                </StyledContainerPousadas>

                <StyledContainerPousadas data-aos="fade-up" data-aos-delay="200">
                    <TitlePousadas 
                        title="Le Ange Mar - Búzios RJ" 
                        text="Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar." 
                        borderColor="var(--color--blue)"
                        borderRadius="30px" 
                        buttonColor="var(--color--blue)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/mar"
                        idade="*Só permitimos crianças acima de 13 anos!"
                    />
                    <SliderComponent 
                        content={imagesMar} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="60%" 
                        height="50vh" 
                        contentType="image"
                        showPagination={false}
                    />
                </StyledContainerPousadas>
            </StyledPousadas>

            <Regras />

            <StyledAcomoda>
                <div>
                    <StyledEstruturaTitle2 data-aos="fade-up">Nossas suítes <StyledColorBGreen>mais procuradas</StyledColorBGreen> </StyledEstruturaTitle2>
                    <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Já consegue se imaginar dormindo aqui ao lado do seu pet?</StyledEstruturaSubTitle>
                </div>

                <SliderAcomodaHome 
                    content={acomodaHome} 
                />

            </StyledAcomoda>
            
            <StyledEstrutura>
                <div>
                    <StyledEstruturaTitle data-aos="fade-up">Mais que Pet Friendly, <StyledColorBBlue>Pet Lovers</StyledColorBBlue></StyledEstruturaTitle>
                    <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Venha viver essa experiência</StyledEstruturaSubTitle>
                </div>
                <CoverflowSliderComponent
                    content={slideDataCoverflow} 
                    spaceBetween={20} 
                    width="100%" 
                    height="100%" 
                    showPagination={false} 
                    showNavigation={true}
                />
            </StyledEstrutura>

            <div>
                <StyledEstruturaTitle data-aos="fade-up"> <StyledColorBGreen>Viva</StyledColorBGreen> essa experiência </StyledEstruturaTitle>
                <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Alguns dos nossos momentos</StyledEstruturaSubTitle>
            </div>
            
            <StyledCarrosselSection data-aos="fade-in">
                <ImageCarouselSliderComponent images={imagesCarrossel01} />
                <ImageCarouselSliderComponent images={imagesCarrossel02} reverse={true} />
            </StyledCarrosselSection>

            <StyledButtonCenter>
                <Button
                onClick={() => window.open("https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329", "_blank")}
                text="Fazer minha reserva!"
                backgroundColor="var(--color--green)"
                />
            </StyledButtonCenter>

            <div>
                <StyledEstruturaTitle data-aos="fade-up">Conheça nossos pacotes e <StyledColorBBlue>noites especiais</StyledColorBBlue> </StyledEstruturaTitle>
                <StyledEstruturaSubTitle data-aos="fade-up" data-aos-delay="200">Estamos te esperando!</StyledEstruturaSubTitle>
            </div>

            <EventAlert />

            <StyledContainerEvents data-aos="fade-in" data-aos-delay="250">
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

               <Footer />

        </>
    );
};

export default Home;
