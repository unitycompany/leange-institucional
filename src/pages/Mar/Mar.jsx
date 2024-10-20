import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomButton from '../../components/button3';
import CoverflowSliderComponent from '../../components/effectSlider';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent from '../../components/acomodaComponent';
import Pensao from '../../components/pensao';
import PetFriendly from '../../components/petCarrossel';
import Atracoes from '../../components/atracoesSlider';
import Depoimentos from '../../components/depoimentos';

const StyledEspace = styled.div`
    height: 5vh;
`;

const StyledSectionHome = styled(motion.section)`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
`;

const StyledHomeDiv = styled(motion.div)`
    width: 45%;
    height: 100%;
    background-image: url('../../../public/experienciaSerra/imageHomee.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 0px 100px 0px;
`;

const StyledHomeTexts = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
    }

    & > h1 b {
        color: var(--color--blue);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
    }
`;

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

const StyledSectionEstrutura = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);
    }
    

`

const slides = [
    {
      title: "Tranquilidade",
      description: "A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",
      imageUrl: "../../../public/serra/1.JPG",
    },
    {
      title: "Conforto",
      description: "Desfrute de acomodações de luxo...",
      buttonText: "Reserve já seu lugar",
      imageUrl: "../../../public/serra/1.JPG",
    },
  ];


const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImagesAcomoda = [
    { src: "../../public/serra/1.JPG", text: "Suíte Master 3" },
    { src: "../../public/serra/2.JPG", text: "Descrição 2" },
    { src: "../../public/serra/3.JPG", text: "Descrição 3" },
    { src: "../../public/serra/4.JPG", text: "Descrição 4" },
    { src: "../../public/serra/5.JPG", text: "Descrição 5" },
    { src: "../../public/serra/1.JPG", text: "Descrição 6" },
    { src: "../../public/serra/2.JPG", text: "Descrição 7" },
    { src: "../../public/serra/3.JPG", text: "Descrição 8" },
    { src: "../../public/serra/4.JPG", text: "Descrição 9" },
    { src: "../../public/serra/5.JPG", text: "Descrição 10" },
];

const Mar = () => {
    return (
        <>
            <Helmet>
                <title>Le Ange Serra - Pousada Le Ange</title>
            </Helmet>

            <StyledEspace />

            <StyledSectionHome
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

<StyledHomeTexts
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h4
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        FALAR SEMPRE SOBRE A LEANGE MAR
                    </motion.h4>

                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        PET FRIENDLY DO <b>BRASIL</b>
                    </motion.h1>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Aqui você e seu pet, são mais do que bem-vindos!
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                    >
                        <CustomButton
                            text="Reservar agora!"
                            textColor="var(--color--black)"
                            backgroundColor="transparent"
                            borderColor="var(--color--black)"
                            iconColor="var(--color--black)"
                            hoverBackgroundColor="var(--color--black)"
                            hoverBorderColor="var(--color--black)"
                            hoverColor="var(--color--white)"
                            hoverIconColor="var(--color--white)"
                            onClick={() => alert("Reservado!")}
                        />
                    </motion.div>
                </StyledHomeTexts>

                <StyledHomeDiv
                    initial={{ scale: 0.8, x: "-100vw" }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                
            </StyledSectionHome>

            <StyledSectionEstrutura>

                <div>
                    <h1>Veja um pouco sobre nosso espaço</h1>
                    <p>Estamos ansisosos por você!</p>
                </div>

                <CoverflowSliderComponent
                content={slideDataCoverflow} 
                spaceBetween={20} 
                width="100%" 
                height="70vh" 
                showPagination={false} 
                showNavigation={true}
                />
            </StyledSectionEstrutura>

            <StyledSectionEspaco> 

                <CarouselComponent
                slides={slides}
                titleColor="var(--color--blue)"
                buttonBgColor="var(--color--blue)"
                imagePosition="left"
                />

            </StyledSectionEspaco> 


            <AcomodaComponent images={ImagesAcomoda}/>

            <Pensao colorDefinedBold="var(--color--blue)" />

            <PetFriendly />

            <Atracoes />

            <Depoimentos />

            <Footer />
        </>
    );
};

export default Mar;
