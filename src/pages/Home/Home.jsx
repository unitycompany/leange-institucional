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


const images1 = [
    { src: '../../../public/serra/9.jpeg', alt: 'Imagem 1' },
    { src: '../../../public/serra/1.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/2.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/3.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/4.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/5.jpg', alt: 'Imagem 1' },
    { src: '../../../public/serra/6.jpeg', alt: 'Imagem 1' },
    { src: '../../../public/serra/7.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/8.JPG', alt: 'Imagem 1' },

];

const images2 = [
    { src: '../../../public/mar/1.JPG', alt: 'Imagem 1' },
    { src: '../../../public/mar/3.jpg', alt: 'Imagem 3' },
    { src: '../../../public/mar/6.JPG', alt: 'Imagem 1' },
    { src: '../../../public/mar/7.JPG', alt: 'Imagem 2' },
    { src: '../../../public/mar/8.JPG', alt: 'Imagem 3' },
    { src: '../../../public/mar/9.JPG', alt: 'Imagem 2' },
    { src: '../../../public/mar/10.JPG', alt: 'Imagem 3' },
];

const images3 = [
    { src: '../../../public/carrossel/1.PNG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/2.jpg', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/3.PNG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/4.PNG', label: 'Pacotes' },
    { src: '../../../public/carrossel/5.PNG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/6.PNG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/7.PNG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/9.JPG', label: 'Pacotes' },
];

const images4 = [
    { src: '../../../public/carrossel/13.jpg', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/14.JPG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/15.JPG', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/16.png', label: 'Pacotes' },
    { src: '../../../public/carrossel/17.png', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/19.jpg', label: 'Le Ange Mar' },
    { src: '../../../public/carrossel/20.JPG', label: 'Le Ange Mar' },
];


const StyledContainerPousadas = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;
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
            border: 1px solid red;
            margin-left: 10%;
            font-size: 20px;
            width: 80%;
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

const slideData = [
    {
        backgroundImage: '../../../public/suites/master-6.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/standart4.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/standart7.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/standart8.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/stardart-5.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/sup2.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
    },
    {
        backgroundImage: '../../../public/suites/sup3.webp',
        title: 'Pousada Le Ange Serra',
        subtitle: 'Miguel Pereira - RJ',
        features: [
            { icon: <FaSnowflake />, text: 'Ar condicionado' },
            { icon: <FaBed />, text: 'Cama king size' },
            { icon: <FaBath />, text: 'Banheira' },
            { icon: <FaTv />, text: 'Smart TV' }
        ],
        buttonText: 'Conhecer todas as acomodações',
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
        backgroundImage: '../../../public/estrutura/aconchego.JPG',
        title: 'Aconchego',
        description: 'Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/estrutura/cozinha.webp',
        title: 'Cozinha',
        description: 'Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/estrutura/suites.jpeg',
        title: 'Suites',
        description: 'Nossa maravilhosa piscina de borda infinita possui aquecimento solar...',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/estrutura/relaxar.JPG',
        title: 'Relaxar',
        description: 'Desfrute de nossas acomodações com todo o conforto e comodidade...',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/pousada/mar_pousada2.JPG',
        title: 'Refrescar',
        description: 'Nossa maravilhosa piscina de borda infinita possui aquecimento solar...',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/pousada/mar_pousada2.JPG',
        title: 'Conforto',
        description: 'Desfrute de nossas acomodações com todo o conforto e comodidade...',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/pousada/mar_pousada2.JPG',
        title: 'Refrescar',
        description: 'Nossa maravilhosa piscina de borda infinita possui aquecimento solar...',
        buttonText: 'Viver minha experiência agora',
    },
    {
        backgroundImage: '../../../public/pousada/mar_pousada2.JPG',
        title: 'Conforto',
        description: 'Desfrute de nossas acomodações com todo o conforto e comodidade...',
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
        image: '../../../public/pacotes/frutosdomar.jpg',
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
        image: '../../../public/pacotes/buteco.jpg',
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
        image: '../../../public/pacotes/pizzas.jpeg',
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
        image: '../../../public/pousada/serra_pousada4.JPG',
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
                    width="60%"
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

                <SliderComponent 
                content={slideData} 
                contentType="div" 
                spaceBetween={20} 
                slidesPerView={2} 
                width="100%" 
                height="90vh"
                showPagination={false} 
                showNavigation={true} 
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
