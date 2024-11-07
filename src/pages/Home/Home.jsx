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
import { MdBedroomParent } from "react-icons/md";
import { BiSolidHomeHeart } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import { BsCalendar2HeartFill } from "react-icons/bs";
import SliderAcomodaHome from '../../components/sliderAcomodaHome';
import PromotionModal from '../../components/modal';



const images1 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730130111/fotoSerra1_pa28ry.jpg", alt: 'Imagem 1', loading: "lazy" }
];

const images2 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp', alt: 'imagem 1',loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730926455/IMG_0454_o2cwol.jpg', alt: 'Imagem 1', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730920611/1_z2nkyx.png', alt: 'Imagem 3', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730901639/4_kuujqb.jpg', alt: 'Imagem 1', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp', alt: 'Imagem 2', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130098/IMG_0041_zv7w3d.jpg', alt: 'Imagem 3', loading: "lazy" }
];

const images3 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0885_pou52r.jpg', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130097/IMG_0478_eymtmg.jpg', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130098/IMG_0041_zv7w3d.jpg', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130886/IMG_6320_jovvjl.webp', label: 'Le Ange Serra' },
];

const images4 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/IMG_7854_zetqsr.webp', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130887/fotoMar1_wotf3h.webp', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130104/fotoSerra4_zgia0i.jpg', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130106/fotoMar6_lfgi4u.jpg', label: 'Le Ange Mar' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130111/fotoSerra1_pa28ry.jpg', label: 'Le Ange Serra' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg', label: 'Le Ange Serra' },
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
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra1_u0olej.jpg",
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
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",
      features: [
        { icon: <FaRulerCombined />, text: "77m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <FaUtensils />, text: 'Chaise lounge' },
        { icon: <FaUtensils />, text: 'Bay window' }
      ]
    },
    {
        id: "suite2-6",
        title: "Suíte Standard 6",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar2_yb1nqi.jpg",
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
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar1_pmcoje.jpg",
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
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730147346/1_lj4tav.jpg",
        features: [
            { icon: <FaRulerCombined />, text: "77m²" },
            { icon: <FaSnowflake />, text: "Ar condicionado" },
            { icon: <FaBed />, text: "Cama king size" },
            { icon: <FaFire />, text: 'Recamier e poltrona de leitura' },
            { icon: <FaUtensils />, text: 'Couch lounge' },
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
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730833084/5_sfnitt.png',
        title: 'Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar'
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp',
        title: 'Praia',
        description: 'Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/sauna-1_gmuhlq.webp',
        title: 'Sossego',
        description: 'A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp',
        title: 'Piscinas',
        description: 'Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar e Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/cafedamanha_n4vr9z.jpg',
        title: 'Cozinha',
        description: 'Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra e Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp',
        title: 'Ofurôs',
        description: 'São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/IMG_7134-scaled_stgkmc.jpg',
        title: 'Divercão',
        description: 'Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp',
        title: 'Bar',
        description: 'Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg',
        title: 'Adega',
        description: 'Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Serra',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730919563/frutos_do_mar_zmftbs.jpg',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730919809/1_vdy0cc.jpg',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730919952/2_blegej.jpg',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730920150/3_oxsk37.jpg',
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730920274/4_cl1vx0.jpg',
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
    // Adicione mais eventos conforme necessário
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
                    content={images1} 
                    spaceBetween={20} 
                    slidesPerView={1} 
                    height="60vh" 
                    contentType="image" 
                    showPagination={false} 
                    />
                    <TitlePousadas 
                    title="Le Ange Serra - Miguel Pereira RJ" 
                    text="Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma EXPERIÊNCIA ÚNICA ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!" 
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
                    content={images2} 
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
                    <StyledEstruturaTitle2>Nossos quartos <StyledColorBGreen>mais procurados</StyledColorBGreen> <MdBedroomParent /> </StyledEstruturaTitle2>
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
                <StyledEstruturaTitle> <StyledColorBGreen>Viva</StyledColorBGreen> essa experiência <BsCalendar2HeartFill /> </StyledEstruturaTitle>
                <StyledEstruturaSubTitle>Alguns dos nossos momentos</StyledEstruturaSubTitle>
            </div>
            
            <StyledCarrosselSection>
                <ImageCarouselSliderComponent images={images3} />
                <ImageCarouselSliderComponent images={images4} reverse={true} />
            </StyledCarrosselSection>

            <div>
                <StyledEstruturaTitle>Conheça nossos pacotes e <StyledColorBBlue>noites especiais</StyledColorBBlue> <MdFoodBank /> </StyledEstruturaTitle>
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
