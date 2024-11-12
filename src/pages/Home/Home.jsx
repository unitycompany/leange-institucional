import React from 'react';
import { FaRulerCombined, FaSnowflake, FaBed, FaBath, FaTv, FaFire } from 'react-icons/fa';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BackgroundVideo from '../../components/video';
import SliderComponent from '../../components/sliderComponent';
import TitlePousadas from '../../components/titlePousadas';
import CoverflowSliderComponent from '../../components/effectSlider';
import ImageCarouselSliderComponent from '../../components/infinitiSlider';
import EventCardCarousel from '../../components/cardSlider';
import Footer from '../../components/footer';
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import SliderAcomodaHome from '../../components/sliderAcomodaHome';
import PromotionModal from '../../components/modal';
import Button from '../../components/button';

const imagesSerra = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp", alt: 'Mulher na rede', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/pousada-de-cima_hum4rw.webp", alt: 'Foto da pousada le ange vista de cima', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp", alt: '2 cachorros na piscina', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/parque-na-pousada_rfde1i.webp", alt: 'Foto da pousada vista de baixo', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp", alt: 'Foto da sala de estar da pousada le ange serra', loading: "lazy" },

    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp", alt: '2 cachorros na cama no meio do quintal', loading: "lazy" }
];

const imagesMar = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/foto_da_pousada_e3djry.webp', alt: 'Foto da pousada le ange mar',loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp', alt: '2 pessoas na rede na pousada le ange mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/churrasqueira_w7akaf.webp', alt: 'Foto de churrasco', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp', alt: 'Cachorro olhando para a câmera', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp', alt: 'Pousada le ange mar vista de cima', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/sala-de-estar_blaa0x.webp', alt: 'Sala de estar na le ange mar', loading: "lazy" }
];

const imagesCarrossel01 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp', alt: 'Pessoa na rede', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp', alt: '2 cachorros na piscina', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp', alt: 'Sala de estar na le ange serra', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp', alt: 'Hot Tube na le ange serra', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/casal_comendo_no_mar_nkkwkl.webp', alt: '2 pessoas bebendo na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_d2asun.webp', alt: '2 pessoas na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/sala-de-estar_blaa0x.webp', alt: 'Sala de estar da le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327606/por_do_sol_wmwzur.webp', alt: 'Por do sol na le ange', label: 'Le Ange Serra', loading: "lazy" },
];

const imagesCarrossel02 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328215/suite_ajrwh0.webp', alt: 'Foto do quarto na le ange', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328215/churrasqueira_feg3jy.webp', alt: 'Foto de churrasqueira na le ange mar', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp', alt: 'Cachorro com a cabeça recostada na mão do tutor', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/mulher_e_cachorro_na_piscina_wwgxkq.webp', alt: 'Uma pessoa e um cachorro na piscina', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/2_ta%C3%A7as_ocgwdi.webp', alt: '2 taças com um fundo de por do sol', label: 'Le Ange Mar', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp', alt: '2 cachorros em uma cama no meio do jardim', label: 'Le Ange Serra', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/quadro_de_cachorro_s1mnbq.webp', alt: 'Foto do quadro de cachorro na le ange mar', label: 'Le Ange Serra', loading: "lazy" },
];

const StyledContainerPousadas = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`

const StyledPousadasTitle = styled.aside `
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);

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
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`

const acomodaHome = [
    {
      id: "suite-1",
      title: "Suíte Superior 1",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328712/suiteSerra1_wm28o4.webp",
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
      id: "suite-master-6",
      title: "Suíte Master 6",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328713/suiteSerra2_aksiu9.webp",
      features: [
        { icon: <FaRulerCombined />, text: "77m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <SiApachecouchdb />, text: 'Couch lounge' },
        { icon: <TbBrandWindows />, text: 'Bay window' }
      ]
    },
    {
        id: "suite2-6",
        title: "Suíte Standard 6",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar2_qlgel2.webp",
        features: [
            { icon: <FaRulerCombined />, text: "32m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
    {
        id: "suite2-2",
        title: "Suíte Standard 2",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar1_zu3lmc.webp",
        features: [
            { icon: <FaRulerCombined />, text: "30m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaBath />, text: "Banheira" },
            { icon: <FaTv />, text: "Smart TV com canais a cabo" },
            { icon: <FaFire />, text: "Lareira" }
      ]
    },
    {
        id: "suite-10",
        title: "Suíte Master 10",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/1_e6cnxy.webp",
        features: [
            { icon: <FaRulerCombined />, text: "77m²" },
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    background-color: rgba(0, 0, 0, 0.1);
    clip-path: polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%);

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`

const slideDataCoverflow = [
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp',
        title: 'Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar'
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/cachorro_na_praia_pmqyi4.webp',
        title: 'Praia',
        description: 'Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp',
        title: 'Sossego',
        description: 'A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp',
        title: 'Piscinas',
        description: 'Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp',
        title: 'Cozinha',
        description: 'Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/ofuros_kyjddp.webp',
        title: 'Ofurôs',
        description: 'São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp',
        title: 'Divercão',
        description: 'Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/bar_xl6dvc.webp',
        title: 'Bar',
        description: 'Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp',
        title: 'Adega',
        description: 'Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp',
        title: 'Suítes',
        description: 'São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
];

const StyledEstrutura = styled.div`
    height: 110vh;
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
        background-image: url('../../../public/background/background_white.webp');
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
    font-family: var(--font--avenir);
    color: var(--color--black);
    opacity: 0.7;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`

const events = [
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp',
        title: 'Frutos do mar',
        dateRange: '22/11/2024 até 24/11/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '23/11 - Frutos do Mar' },
            { icon: <FaMusic />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp',
        title: 'Noite de Risotos',
        dateRange: '29/11/2024 até 01/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '30/11 - Noite de Risostos' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp',
        title: 'Noite das pizzas',
        dateRange: '06/12/2024 até 08/12/2024 (3 diárias)',
        features: [
            { icon: <FaUtensils />, text: '07/12 - Noite das pizzas' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp',
        title: 'Frutos do Mar',
        dateRange: '13/12/2024 até 15/12/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: '14/12 - Frutos do Mar' },
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '359,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp',
        title: 'Fique 3 pague 4',
        dateRange: 'Segunda-feira a Sexta-feira',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '538,90',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp',
        title: 'Pacote de Natal',
        dateRange: '21/12/2024 até 25/12/2024 (4 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '918,40',
        discount: 25,
    },
];

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
    width: 100%;
    height: 80vh;
    padding: 0 5%;
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

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Início - Pousada Le Ange</title>
            </Helmet>

            <PromotionModal />

            <BackgroundVideo />

            <StyledPousadas 
                containerAnimation={{ opacity: 0, scale: 0.8 }}
                titleAnimation={{ opacity: 0, y: -50 }}
                textAnimation={{ opacity: 0, x: 50 }}
                buttonAnimation={{ opacity: 0, scale: 0.5 }}
                animationDuration={0.7}
            >
                <StyledPousadasTitle>
                    <h1>Conheça o <StyledColorBBlue>melhor de cada cantinho nosso</StyledColorBBlue></h1>
                    <p>Pousada mais Pet Friendly</p>
                </StyledPousadasTitle>

                <StyledContainerPousadas>
                    <SliderComponent 
                        content={imagesSerra} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        height="60vh" 
                        contentType="image" 
                        showPagination={false} 
                    />
                    <TitlePousadas 
                        title="Le Ange Serra - Miguel Pereira RJ" 
                        text="Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!" 
                        borderColor="var(--color--green)"
                        borderRadius="30px" 
                        buttonColor="var(--color--green)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/serra"
                    />
                </StyledContainerPousadas>

                <StyledContainerPousadas>
                    <TitlePousadas 
                        title="Pousada Le Ange Mar - Búzios RJ" 
                        text="Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais." 
                        borderColor="var(--color--blue)"
                        borderRadius="30px" 
                        buttonColor="var(--color--blue)"
                        buttonBorder="1px solid var(--color--black)"
                        targetPage="/mar"
                    />
                    <SliderComponent 
                        content={imagesMar} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="60%" 
                        height="60vh" 
                        contentType="image"
                        showPagination={false}
                    />
                </StyledContainerPousadas>
            </StyledPousadas>

            <StyledAcomoda>
                <div>
                    <StyledEstruturaTitle2>Nossos quartos <StyledColorBGreen>mais procurados</StyledColorBGreen> </StyledEstruturaTitle2>
                    <StyledEstruturaSubTitle>Já consegue se imaginar dormindo aqui?</StyledEstruturaSubTitle>
                </div>

                <SliderAcomodaHome 
                    content={acomodaHome} 
                />

            </StyledAcomoda>
            
            <StyledEstrutura>
                <div>
                    <StyledEstruturaTitle>Carinho em cada <StyledColorBBlue>detalhe</StyledColorBBlue></StyledEstruturaTitle>
                    <StyledEstruturaSubTitle>Venha ter essa experiência</StyledEstruturaSubTitle>
                </div>
                <CoverflowSliderComponent
                    content={slideDataCoverflow} 
                    spaceBetween={20} 
                    width="100%" 
                    height="70vh" 
                    showPagination={false} 
                    showNavigation={true}
                />
            </StyledEstrutura>

            <div>
                <StyledEstruturaTitle> <StyledColorBGreen>Viva</StyledColorBGreen> essa experiência </StyledEstruturaTitle>
                <StyledEstruturaSubTitle>Alguns dos nossos momentos</StyledEstruturaSubTitle>
            </div>
            
            <StyledCarrosselSection>
                <ImageCarouselSliderComponent images={imagesCarrossel01} />
                <ImageCarouselSliderComponent images={imagesCarrossel02} reverse={true} />
            </StyledCarrosselSection>

            <StyledButtonCenter>
                <Button
                text="Fazer minha reserva!"
                />
            </StyledButtonCenter>

            <div>
                <StyledEstruturaTitle>Conheça nossos pacotes e <StyledColorBBlue>noites especiais</StyledColorBBlue> </StyledEstruturaTitle>
                <StyledEstruturaSubTitle>Estamos te esperando!</StyledEstruturaSubTitle>
            </div>

            <StyledContainerEvents>
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Footer />

        </>
    );
};

export default Home;
