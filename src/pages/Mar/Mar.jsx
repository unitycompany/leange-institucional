import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomButton from '../../components/button3';
import CoverflowSliderComponent from '../../components/effectSlider';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent2 from '../../components/acomodaComponent2';
import Pensao from '../../components/pensao';
import PetFriendly from '../../components/petCarrossel';
import Depoimentos from '../../components/depoimentos';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import EventCardCarousel from '../../components/cardSlider';

const StyledEspace = styled.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`;

const StyledSectionHome = styled(motion.section)`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730926399/IMG_0454_gpdc1l.jpg');
        background-position: center;
        background-size: cover;

        @media (max-width:768px){
            display: none;
        }

    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`;

const StyledHomeDiv = styled(motion.div)`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730926455/IMG_0454_o2cwol.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50px 10px 100px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none;
        position: absolute;
        height: 80%;
        top: 0;
        z-index: -1;
    }
`;

const StyledHomeTexts = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
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
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;


        @media (max-width: 768px){
 
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        font-weight: 100;


        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`;

const slideDataCoverflow = [
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/petfriendly-scaled_vsev2s.webp',
        title: 'Pet Friendly',
        description: 'Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp',
        title: 'Praia',
        description: 'Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp',
        title: 'Piscinas',
        description: 'Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp',
        title: 'Ofurôs',
        description: 'São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/saladeestar_yakcqy.webp',
        title: 'Sala de estar',
        description: 'A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/cozinha_q3rrwr.webp',
        title: 'Cozinha',
        description: 'Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp',
        title: 'Bar',
        description: 'Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },

    {
        backgroundImage: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp',
        title: 'Suítes',
        description: 'São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.',
        buttonText: 'Viver minha experiência agora',
        topLeftText: 'Le Ange Mar',
    },
    // Adicione mais slides conforme necessário
];

const StyledSectionEstrutura = styled.section`
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    display: none;

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
        title: "Pet Friendly",
        description: "Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/petfriendly-scaled_vsev2s.webp"
    },
    {
        title: "Praia",
        description: "Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/praia_flvqaf.webp"
    },
    {
        title: "Piscinas",
        description: "Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/piscina_vw7plw.webp"
    },
    {
        title: "Ofurôs",
        description: "São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/ofuros_zeqb9x.webp"
    },
    {
        title: "Sala de estar",
        description: "A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/saladeestar_yakcqy.webp"
    },
    {
        title: "Cozinha",
        description: "Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/cozinha_q3rrwr.webp"
    },
    {
        title: "Bar",
        description: "Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832503/bar_qgdbog.webp"
    },
    {
        title: "Suítes",
        description: "São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730832504/suites_px4fhy.webp"
    }
];

const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`

const ImagesAcomoda = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar01_p6bfoi.jpg", text: "Suíte Superior 1" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144220/suiteMar02_pzxjim.jpg", text: "Suíte Standard 2" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar07_dgfxzq.jpg", text: "Suíte Superior 3" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar05_oid9as.jpg", text: "Suíte Superior 4" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144223/suiteMar08_g1gmt0.jpg", text: "Suíte Superior 5" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar03_o9sxbf.jpg", text: "Suíte Standard 6" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144224/suiteMar04_jcaps2.jpg", text: "Suíte Master 7" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730144226/suiteMar06_jywv1q.jpg", text: "Suíte Master 8" },
];

const StyledLocal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`

const StyledContainerEvents = styled.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px){
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
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
                        PET FRIENDLY<br /> DO <b>BRASIL</b>
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
                            onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                        />
                    </motion.div>
                </StyledHomeTexts>

                <StyledHomeDiv
                    initial={{ scale: 0.8, x: "-100vw" }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                
            </StyledSectionHome>

            <StyledLocal>
                <h1>LeAnge Mar | Armação dos Búzios RJ</h1>
            </StyledLocal>

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

            <AcomodaComponent2 images={ImagesAcomoda}/>

            <Pensao colorDefinedBold="var(--color--blue)" />

            <PetFriendly />

            <StyledContainerEvents>
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />

            <Footer />
        </>
    );
};

export default Mar;
