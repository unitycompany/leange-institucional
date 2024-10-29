import React from 'react';
import { FaSnowflake, FaBed, FaBath, FaTv } from 'react-icons/fa';
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



const images1 = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/3_d2soci.png", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/5_duax05.png", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/4_ouknmz.png", alt: 'Imagem 1', loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/2_bwzqa4.png", alt: 'Imagem 1', loading: "lazy" }
];

const images2 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp', alt: 'Imagem 1', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar4_hexj9u.webp', alt: 'Imagem 3', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar5_k8fzcv.webp', alt: 'Imagem 1', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar3_sxa0i2.webp', alt: 'Imagem 2', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar2_d3y4tv.webp', alt: 'Imagem 3', loading: "lazy" }
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

    @media (max-width: 768px){
        border: 1px solid red;
        flex-direction: column;
        position: relative;
        z-index: -1;

        .slider{
            border: 5px solid red;
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
            margin-top: -10vh;
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
      title: "Suíte Superior 1",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra1_u0olej.jpg",
      features: [
        { icon: <FaSnowflake />, text: "52m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <FaTv />, text: "Smart TV com canais a cabo" },
        { icon: <FaTv />, text: "Lareira" },
        { icon: <FaTv />, text: "Frigobar" },
        { icon: <FaTv />, text: "Chaleira elétrica" },
        { icon: <FaTv />, text: "Chuveiro" },
        { icon: <FaTv />, text: "Aquecedor de Toalhas" },
        { icon: <FaTv />, text: "Cuba única" },
        { icon: <FaTv />, text: "Varanda privada" }
      ]
    },
    {
      title: "Suíte Master 6",
      subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
      backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",
      features: [
        { icon: <FaSnowflake />, text: "77m²" },
        { icon: <FaSnowflake />, text: "Ar condicionado" },
        { icon: <FaSnowflake />, text: "Chaise lounge" },
        { icon: <FaSnowflake />, text: "Bay Window" },
        { icon: <FaBed />, text: "Cama king size" },
        { icon: <FaBath />, text: "Banheira" },
        { icon: <FaTv />, text: "Smart TV com canais a cabo" },
        { icon: <FaTv />, text: "Lareira" },
        { icon: <FaTv />, text: "Frigobar" },
        { icon: <FaTv />, text: "Chaleira elétrica" },
        { icon: <FaTv />, text: "Chuveiro" },
        { icon: <FaTv />, text: "Aquecedor de Toalhas" },
        { icon: <FaTv />, text: "Cuba para casal (dupla)" },
        { icon: <FaTv />, text: "Ampla varanda privativa" }
      ]
    },
    {
        title: "Nome da suite",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar2_yb1nqi.jpg",
        features: [
          { icon: <FaSnowflake />, text: "77m²" },
          { icon: <FaSnowflake />, text: "Ar condicionado" },
          { icon: <FaSnowflake />, text: "Chaise lounge" },
          { icon: <FaSnowflake />, text: "Recamier e poltrona de leitura" },
          { icon: <FaBed />, text: "Cama king size" },
          { icon: <FaBath />, text: "Banheira" },
          { icon: <FaTv />, text: "Smart TV com canais a cabo" },
          { icon: <FaTv />, text: "Lareira" },
          { icon: <FaTv />, text: "Frigobar" },
          { icon: <FaTv />, text: "Chaleira elétrica" },
          { icon: <FaTv />, text: "Chuveiro" },
          { icon: <FaTv />, text: "Aquecedor de Toalhas" },
          { icon: <FaTv />, text: "Cuba para casal (dupla)" },
          { icon: <FaTv />, text: "Ampla varanda privativa" }
      ]
    },
    {
        title: "Nome da suite",
        subtitle: "Pousada Le Ange Mar | Búzios - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730125876/suiteMar1_pmcoje.jpg",
        features: [
          { icon: <FaSnowflake />, text: "77m²" },
          { icon: <FaSnowflake />, text: "Ar condicionado" },
          { icon: <FaSnowflake />, text: "Chaise lounge" },
          { icon: <FaSnowflake />, text: "Recamier e poltrona de leitura" },
          { icon: <FaBed />, text: "Cama king size" },
          { icon: <FaBath />, text: "Banheira" },
          { icon: <FaTv />, text: "Smart TV com canais a cabo" },
          { icon: <FaTv />, text: "Lareira" },
          { icon: <FaTv />, text: "Frigobar" },
          { icon: <FaTv />, text: "Chaleira elétrica" },
          { icon: <FaTv />, text: "Chuveiro" },
          { icon: <FaTv />, text: "Aquecedor de Toalhas" },
          { icon: <FaTv />, text: "Cuba para casal (dupla)" },
          { icon: <FaTv />, text: "Ampla varanda privativa" }
      ]
    },
    {
        title: "Suíte Master 10",
        subtitle: "Pousada Le Ange Serra | Miguel Pereira - RJ",
        backgroundImage: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730125194/suiteSerra3_ayqtcj.jpg",
        features: [
          { icon: <FaSnowflake />, text: "77m²" },
          { icon: <FaSnowflake />, text: "Ar condicionado" },
          { icon: <FaSnowflake />, text: "Chaise lounge" },
          { icon: <FaSnowflake />, text: "Recamier e poltrona de leitura" },
          { icon: <FaBed />, text: "Cama king size" },
          { icon: <FaBath />, text: "Banheira" },
          { icon: <FaTv />, text: "Smart TV com canais a cabo" },
          { icon: <FaTv />, text: "Lareira" },
          { icon: <FaTv />, text: "Frigobar" },
          { icon: <FaTv />, text: "Chaleira elétrica" },
          { icon: <FaTv />, text: "Chuveiro" },
          { icon: <FaTv />, text: "Aquecedor de Toalhas" },
          { icon: <FaTv />, text: "Cuba para casal (dupla)" },
          { icon: <FaTv />, text: "Ampla varanda privativa" }
      ]
    },
  ];

const StyledAcomoda = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
`

const slideDataCoverflow = [
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/aconchego_y0rxho.jpg',
        title: 'Aconchego',
        description: 'Nossas áreas internas, contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg',
        title: 'Cozinha',
        description: 'Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/suites_gmhdsf.jpg',
        title: 'Suites',
        description: 'Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/conforto_oebwyu.webp',
        title: 'Relaxar',
        description: 'Relaxe em nosso SPA com uma vista de frente para mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/refrescar_id0f4o.png',
        title: 'Refrescar',
        description: 'Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde em que temos um pôr do sol incrível para acompanhar. Ah! E claro que seu Dog pode nadar junto com você!',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126869/aventura_waih8i.png',
        title: 'Aventura',
        description: 'Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126866/diversao_jpykdy.jpg',
        title: 'Divercão',
        description: 'Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!',
        buttonText: 'Viver minha experiência agora',
    },

    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126865/adega_n0cszf.jpg',
        title: 'Adega',
        description: 'Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.',
        buttonText: 'Viver minha experiência agora',
    },

    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png',
        title: 'Sossego',
        description: 'A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.',
        buttonText: 'Viver minha experiência agora',
    },

    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126872/petfriendly_xxpntj.png',
        title: 'Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
    },
    // Adicione mais slides conforme necessário
];

const StyledEstrutura = styled.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

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

const StyledEstruturaTitle = styled.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);

`

const StyledEstruturaSubTitle = styled.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--avenir);
    opacity: 0.7;
`

const events = [
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730131262/frutosdomar_xqfm5b.jpg',
        title: 'Frutos do mar',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730131254/buteco_ck7tmg.jpg',
        title: 'Noite do Boteco',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730126391/cozinha_qvars1.jpg',
        title: 'Noite das pizzas',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730131253/arabe_orkglt.png',
        title: 'Noite Árabe',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730131254/massas_geg7x7.jpg',
        title: 'Noite de Massas',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    {
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730131256/hamburguer_jbi1rv.jpg',
        title: 'Noite de Hámburguer',
        dateRange: '20/09/2024 até 22/09/2024 (2 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaMusic />, text: 'Música ao vivo' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '354,20',
        discount: 25,
    },
    // Adicione mais eventos conforme necessário
];

const StyledCarrosselSection = styled.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;
    
`

const StyledContainerEvents = styled.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
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
                    title="Pousada Le Ange Serra" 
                    text="Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma EXPERIÊNCIA ÚNICA ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!" 
                    borderColor="var(--color--green)"
                    borderRadius="30px" 
                    />
                </StyledContainerPousadas>

                <StyledContainerPousadas>
                    <TitlePousadas 
                    title="Pousada Le Ange Mar" 
                    text="Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais." 
                    borderColor="var(--color--blue)"
                    borderRadius="30px" 
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
                    <StyledEstruturaTitle>Nossos quartos <StyledColorBGreen>mais buscados</StyledColorBGreen> <MdBedroomParent /> </StyledEstruturaTitle>
                    <StyledEstruturaSubTitle>Já consegue se imaginar dormindo?</StyledEstruturaSubTitle>
                </div>

                <SliderAcomodaHome 
                content={acomodaHome} 
                />

            </StyledAcomoda>
            
            <StyledEstrutura>
                <div>
                    <StyledEstruturaTitle>Estrutura que te <StyledColorBBlue>convida</StyledColorBBlue> <BiSolidHomeHeart /> </StyledEstruturaTitle>
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
                <StyledEstruturaTitle> <StyledColorBGreen>Sinta-se</StyledColorBGreen> mais próximo da gente <BsCalendar2HeartFill /> </StyledEstruturaTitle>
                <StyledEstruturaSubTitle>Alguns dos nossos momentos</StyledEstruturaSubTitle>
            </div>
            
            <StyledCarrosselSection>
                <ImageCarouselSliderComponent images={images3} />
                <ImageCarouselSliderComponent images={images4} reverse={true} />
            </StyledCarrosselSection>

            <div>
                <StyledEstruturaTitle>Qual deles você <StyledColorBBlue>mais gostou?</StyledColorBBlue> <MdFoodBank /> </StyledEstruturaTitle>
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
