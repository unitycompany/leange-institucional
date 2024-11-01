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

    @media (max-width: 768px){
        height: 0vh;
    }
`;

const StyledSectionHome = styled(motion.section)`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`;

const StyledHomeDiv = styled(motion.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130104/fotoSerra4_zgia0i.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 100px 0 100px;

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        height: 70%;
        top: 0;
        z-index: -1;
    }
`;

const StyledHomeTexts = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 50%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px){

            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px){
 
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
        }
    }

    & > h1 b {
        color: var(--color--green);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        font-size: 18px;
        line-height: 100%;
        width: 50%;

        @media (max-width: 768px){

            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 50px;
        }
    }
`;

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

const StyledSectionEstrutura = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 0;
        gap: 30px;
    }
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;

        @media (max-width: 768px){

            font-size: 1.3rem;
            width: 95%;
            margin-left: 2.5%;
        }
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            font-size: .9rem;
            margin-top: 10px;
  
        }
    }
    

`

const slides = [
    {
      title: "Tranquilidade",
      description: "A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",
      imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",
    },
    {
      title: "Conforto",
      description: "Desfrute de acomodações de luxo...",
      buttonText: "Reserve já seu lugar",
      imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",
    },
    {
        title: "Tranquilidade",
        description: "A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730126873/sossego_dutvww.png",
      },
      {
        title: "Conforto",
        description: "Desfrute de acomodações de luxo...",
        buttonText: "Reserve já seu lugar",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730124671/suiteSerra2_lhgcj2.jpg",
      },
  ];


const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }
`

const ImagesAcomoda = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133147/suiteSuperior1_gpjls0.jpg", text: "Suíte Superior 1" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133146/suiteSuperior2_cqduas.jpg", text: "Suíte Superior 2" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteSuperior3_pgr53r.jpg", text: "Suíte Superior 3" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133142/suiteStandard4_mrtwhq.jpg", text: "Suíte Standard 4" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133138/suiteStandard5_j9oyln.jpg", text: "Suíte Standard 5" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133137/suiteMaster6_id3iqs.jpg", text: "Suíte Master 6" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133133/suiteMaster7_bqdek7.jpg", text: "Suíte Master 7" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133111/suiteStandard8_lpyi22.jpg", text: "Suíte Standard 8" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteSuperior9_v1mxwb.jpg", text: "Suíte Superior 9" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730133110/suiteMaster10_gqoxfm.jpg", text: "Suíte Superior 10" },
];

const StyledLocall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: var(--color--green);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.3rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`

const Serra = () => {
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
                <StyledHomeDiv
                    initial={{ scale: 0.8, x: "-100vw" }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

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
                        FALAR SEMPRE SOBRE A LEANGE SERRA
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
            </StyledSectionHome>

            <StyledLocall>
                <h1>LeAnge Serra | Miguel Pereira RJ</h1>
            </StyledLocall>

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
                />

            </StyledSectionEspaco> 


            <AcomodaComponent images={ImagesAcomoda}/>

            <Pensao />

            <PetFriendly />

            <Atracoes />

            <Depoimentos />

            <Footer />
        </>
    );
};

export default Serra;
