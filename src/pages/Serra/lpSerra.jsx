import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import CustomButton from '../../components/button3';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent from '../../components/acomodaComponent';
import Pensao from '../../components/pensao';
import Depoimentos from '../../components/depoimentos';
import EventCardCarousel from '../../components/cardSlider';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import Button from '../../components/button';
import WhatsAppButton from '../../components/Whatsapp';
import PetFriendlyCarousel from '../../components/petCarrossel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledEspace = styled.div`
    height: 0vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`;

const StyledSectionHome = styled.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;
    

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`;

const StyledHomeDiv = styled.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none!important;
        height: 100%;
        top: 0;
        z-index: -3;

    }
`;

const StyledHomeTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;
    

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
        line-height: 120%;
        width: 80%;
        font-weight: 100;
        position: relative;
        z-index: 2;
        

        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 0px;
        }
    }
`;

const slides = [
    {
        title: "Pet Friendly",
        description: "Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/cachorro_na_piscina_sjs7ft.webp"
    },
    {
        title: "Aventura",
        description: "Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731332405/aventura_odmky4.webp"
    },
    {
        title: "Refrescar",
        description: "Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731332405/cachorro_pulando_na_piscina_lrhxpp.webp"
    },
    {
        title: "Sossego",
        description: "A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731327605/sossego_1_jsshhu.webp"
    },
    {
        title: "Lazer",
        description: "Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731326209/sala-de-estar_xuxiou.webp"
    },
    {
        title: "Cozinha",
        description: "Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1732215093/buffetComprimido-compressed-_1__tjiacp.webp"
    },
    {
        title: "Diversão",
        description: "Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/parc%C3%A3o_mdvo8p.webp"
    },
    {
        title: "Adega",
        description: "Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/adega_uje7gn.webp"
    },
    {
        title: "Suítes",
        description: "São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731345889/1_ytelar_a4gkq4.webp"
    },
    {
        title: "Relaxar",
        description: "Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730833077/slide04_li94ks.webp"
    }
];

const PetFriendlyImages = [
    {
        images: [
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016972/serra1_dlmpih.webp", alt: 'Cachorro surfando na piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra2_h64lp3.webp", alt: 'Cachorro andando na borda da piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra3_hqphcd.webp", alt: 'Cachorro sentado tomando sol e sorrindo para a foto', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra5_liz2la.webp", alt: 'Cachorro mordendo uma bolinha', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra4_anm8q9.webp", alt: 'Casal com um casal de cachorro sentado na beira da piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335890/16_mwucoo_qw5inq.webp", alt: 'Mulher na cachoeira com cachorros brincando', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335889/15_epymcf_vqg5qs.webp", alt: 'Mulher e cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra5_vgmvai.webp", alt: '3 cachorros tirando uma selfie', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra3_abkfr4.webp", alt: 'Cachorro dormindo na rede em cima da cachoeira', loading: "lazy", label: 'Le Ange Serra' },
        ],
    },
    {
        images: [
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra2_qzxvpu.webp", alt: 'Cachorro dormindo no sofá', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra4_wdvsmr.webp", alt: 'Cachorro papai noel', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335883/11_wlyxbh_wxtele.webp", alt: 'Um cachorro no cola de um humano sorrindo', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731329808/parc%C3%A3o_mdvo8p.webp", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335884/12_epl2gw_oc9uc0.webp", alt: 'Cachorro brincando na grama', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335885/13_hhitda_hfolhl.webp", alt: '2 cachorros sorrindo na rede', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335887/14_ybyv7y_wt3zn2.webp", alt: 'Uma mulher e um cachorro do lado dela', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335892/17_awkinq_ommg1k.webp", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra1_tohjvc.webp", alt: 'Cachorro andando na cachoeira', loading: "lazy", label: 'Le Ange Serra' },
        ],
        reverse: true
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
`;

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
`;

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
`;

const events = [
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
        image: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp',
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

const StyledButtonCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`;

const ImagesAcomoda = [
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133147/suiteSuperior1_gpjls0.jpg", text: "Suíte Superior 1", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1732214237/foto2_pn8axc.webp", text: "Suíte Superior 2", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133142/suiteSuperior3_pgr53r.jpg", text: "Suíte Superior 3", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133142/suiteStandard4_mrtwhq.jpg", text: "Suíte Standard 4", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133138/suiteStandard5_j9oyln.jpg", text: "Suíte Standard 5", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133137/suiteMaster6_id3iqs.jpg", text: "Suíte Master 6", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133133/suiteMaster7_bqdek7.jpg", text: "Suíte Superior 7", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133111/suiteStandard8_lpyi22.jpg", text: "Suíte Standard 8", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133110/suiteSuperior9_v1mxwb.jpg", text: "Suíte Superior 9", loading: "lazy" },
    { src: "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133110/suiteMaster10_gqoxfm.jpg", text: "Suíte Master 10", loading: "lazy" },
];

const LpSerra = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); 
      }, []);

    return (
        <>
            <Helmet>
                <title>Le Ange Serra - Pousada Le Ange</title>
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429558/3_gkl82v.svg" />
            </Helmet>
            
            {/* <VideoPlayer videoSrc="https://res.cloudinary.com/dupg7clzc/video/upload/f_auto,q_50,w_2000/v1732279146/Serra_s08vww.mp4" /> */}

            <StyledEspace />
            
            <WhatsAppButton />

            <StyledSectionHome>
                <StyledHomeDiv data-aos="zoom-in" data-aos-delay="100"/>
                <StyledHomeTexts>
                    <h4 data-aos="fade-up" data-aos-delay="100">Conheça a Le Ange Serra, a pousada mais</h4>
                    <h1 data-aos="fade-down" data-aos-delay="200">PET FRIENDLY<br /> DO <b>BRASIL</b></h1>
                    <p>Aqui você e o seu pet, são mais do que bem-vindos!</p>
                    <CustomButton
                        text="Reservar agora!"
                        textColor="var(--color--black)"
                        backgroundColor="transparent"
                        borderColor="var(--color--black)"
                        hoverBackgroundColor="var(--color--green)"
                        hoverBorderColor="var(--color--green)"
                        hoverColor="var(--color--white)"
                        hoverIconColor="var(--color--white)"
                        onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                    />
                </StyledHomeTexts>
            </StyledSectionHome>

            <StyledLocall data-aos="fade-up" data-aos-delay="200">
                <h1 data-aos="fade-in" data-aos-delay="400">LeAnge Serra | Miguel Pereira RJ</h1>
            </StyledLocall>

            <StyledSectionEspaco>
                <CarouselComponent slides={slides} />
            </StyledSectionEspaco>

            <AcomodaComponent images={ImagesAcomoda} data-aos="fade-up" data-aos-delay="200"/>

            <Pensao />
            
            <PetFriendlyCarousel carousels={PetFriendlyImages}/>

            <StyledButtonCenter>
                <Button text="Fazer minha reserva!" />
            </StyledButtonCenter>
            
            <StyledContainerEvents>
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />
            
            <Footer />
        </>
    );
};

export default LpSerra;
