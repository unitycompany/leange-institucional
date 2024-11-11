import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomButton from '../../components/button3';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent from '../../components/acomodaComponent';
import Pensao from '../../components/pensao';
import PetFriendly from '../../components/petCarrossel';
import Depoimentos from '../../components/depoimentos';
import EventCardCarousel from '../../components/cardSlider';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';

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

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
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
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 10px 50px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none;
        height: 80%;
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
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);
        font-weight: 100;

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
        margin-left: -5px;
        width: 100%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
        font-weight: 100;

        @media (max-width: 768px){
 
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--green);
        font-weight: 100;
        
        @media(max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
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

const slides = [
    {
        title: "Pet Friendly",
        description: "Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp"
    },
    {
        title: "Aventura",
        description: "Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731332405/aventura_odmky4.webp"
    },
    {
        title: "Refrescar",
        description: "Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731332405/cachorro_pulando_na_piscina_lrhxpp.webp"
    },
    {
        title: "Sossego",
        description: "A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp"
    },
    {
        title: "Aconchego",
        description: "Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp"
    },
    {
        title: "Cozinha",
        description: "Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp"
    },
    {
        title: "Diversão",
        description: "Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet correr, pular e nadar!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp"
    },
    {
        title: "Adega",
        description: "Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp"
    },
    {
        title: "Suítes",
        description: "Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730833076/suites_hsgvxw.webp"
    },
    {
        title: "Relaxar",
        description: "Relaxe em nosso SPA com uma vista de frente para a mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/slide04_li94ks.webp"
    }
];

const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`

const ImagesAcomoda = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133147/suiteSuperior1_gpjls0.jpg", text: "Suíte Superior 1", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133146/suiteSuperior2_cqduas.jpg", text: "Suíte Superior 2", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133142/suiteSuperior3_pgr53r.jpg", text: "Suíte Superior 3", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133142/suiteStandard4_mrtwhq.jpg", text: "Suíte Standard 4", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133138/suiteStandard5_j9oyln.jpg", text: "Suíte Standard 5", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133137/suiteMaster6_id3iqs.jpg", text: "Suíte Master 6", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133133/suiteMaster7_bqdek7.jpg", text: "Suíte Master 7", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133111/suiteStandard8_lpyi22.jpg", text: "Suíte Standard 8", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133110/suiteSuperior9_v1mxwb.jpg", text: "Suíte Superior 9", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133110/suiteMaster10_gqoxfm.jpg", text: "Suíte Superior 10", loading: "lazy" },
];

const StyledLocall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
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
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5% 0 2.5%;
        margin-top: 0;
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
            </StyledSectionHome>

            <StyledLocall>
                <h1>LeAnge Serra | Miguel Pereira RJ</h1>
            </StyledLocall>

            <StyledSectionEspaco> 

                <CarouselComponent
                slides={slides}
                />

            </StyledSectionEspaco> 


            <AcomodaComponent images={ImagesAcomoda}/>

            <Pensao />

            <PetFriendly />

            <StyledContainerEvents>
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />

            <Footer />
        </>
    );
};

export default Serra;
