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
    height: 5vh;

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
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg');
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
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730868/cachorro_olhando_pra_camera_ndannw_hvd1rf.webp"
    },
    {
        title: "Aventura",
        description: "Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732523/aventura_odmky4_x0nryc.webp"
    },
    {
        title: "Refrescar",
        description: "Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/cachorro_pulando_na_piscina_lrhxpp_gyqrfv.jpg"
    },
    {
        title: "Sossego",
        description: "A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/sossego_1_jsshhu_1_pyjrgu.jpg"
    },
    {
        title: "Lazer",
        description: "Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/sala-de-estar_xuxiou_knlqok.webp"
    },
    {
        title: "Cozinha",
        description: "Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/buffetComprimido-compressed-_1__tjiacp_gv9frv.webp"
    },
    {
        title: "Diversão",
        description: "Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730258/parc%C3%A3o_mdvo8p_sfazpp.webp"
    },
    {
        title: "Adega",
        description: "Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730261/adega_uje7gn_gdxn3g.webp"
    },
    {
        title: "Suítes",
        description: "São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra2_aksiu9_feouvg.webp"
    },
    {
        title: "Relaxar",
        description: "Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732524/slide04_li94ks_oorjnr.webp"
    }
];

const PetFriendlyImages = [
    {
        images: [
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732696/serra1_dlmpih_to7gwm.webp", alt: 'Cachorro surfando na piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732698/serra2_h64lp3_dtgvyt.webp", alt: 'Cachorro andando na borda da piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732700/serra3_hqphcd_xoguiy.webp", alt: 'Cachorro sentado tomando sol e sorrindo para a foto', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/foto_de_mulher_com_dois_cachorros_bwwkmi_pyqnx0.jpg", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732701/serra5_liz2la_exkn5b.jpg", alt: 'Cachorro mordendo uma bolinha', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732704/serra4_anm8q9_zueh0h.webp", alt: 'Casal com um casal de cachorro sentado na beira da piscina', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732707/16_mwucoo_qw5inq_od6ein.jpg", alt: 'Mulher na cachoeira com cachorros brincando', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732708/15_epymcf_vqg5qs_ljexgt.webp", alt: 'Mulher e cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732709/serra5_vgmvai_aa3uh5.jpg", alt: '3 cachorros tirando uma selfie', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732713/serra3_abkfr4_abucit.webp", alt: 'Cachorro dormindo na rede em cima da cachoeira', loading: "lazy", label: 'Le Ange Serra' },
        ],
    },
    {
        images: [
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732714/serra2_qzxvpu_ttcjqm.webp", alt: 'Cachorro dormindo no sofá', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732717/11_wlyxbh_wxtele_kbbm8r.webp", alt: 'Cachorro papai noel', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732718/serra4_wdvsmr_z6jid2.webp", alt: 'Um cachorro no cola de um humano sorrindo', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732720/12_epl2gw_oc9uc0_w3jelm.jpg", alt: '2 cachorros e uma mulher no meio', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp", alt: 'Cachorro brincando na grama', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732721/13_hhitda_hfolhl_ilbwmk.jpg", alt: '2 cachorros sorrindo na rede', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732723/14_ybyv7y_wt3zn2_w8whu2.webp", alt: 'Uma mulher e um cachorro do lado dela', loading: "lazy", label: 'Le Ange Serra' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732724/17_awkinq_ommg1k_1_vqdt6j.jpg", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732728/serra1_tohjvc_b6hpdg.jpgp", alt: 'Cachorro andando na cachoeira', loading: "lazy", label: 'Le Ange Serra' },
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
        image: 'https://res.cloudinary.com/dabucfkmg/image/upload/v1732730393/risotos_oj42yf_nivhjz.webp',
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
        image: 'https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/pizzas_lgsqcd_ekmh4f.webp',
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
        image: 'https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/frutos_do_mar1_ly3hq1_ch6mr3.webp',
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
        image: 'https://res.cloudinary.com/dabucfkmg/image/upload/v1732730394/fique3pague4_fiupcm_bgpy9c.webp',
        title: 'Fique 4 pague 3',
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
        image: 'https://res.cloudinary.com/dabucfkmg/image/upload/v1732730395/natal_wrunee_ceaifp.webp',
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
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteSerra1_wm28o4_pbmwec.webp", text: "Suíte Superior 1", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/foto2_pn8axc_qyclur.webp", text: "Suíte Superior 2", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732956/suiteSuperior3_pgr53r_xengfh.webp", text: "Suíte Superior 3", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732957/suiteStandard4_mrtwhq_vpx77n.webp", text: "Suíte Standard 4", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732960/suiteStandard5_j9oyln_id3z9p.webp", text: "Suíte Standard 5", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732963/suiteMaster6_id3iqs_gttw2r.webp", text: "Suíte Master 6", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732964/suiteMaster7_bqdek7_gbhmfk.webp", text: "Suíte Superior 7", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732967/suiteStandard8_lpyi22_yiiemz.webp", text: "Suíte Standard 8", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732972/suiteSuperior9_v1mxwb_pfd3ww.webp", text: "Suíte Superior 9", loading: "lazy" },
    { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732975/suiteMaster10_gqoxfm_kxxaso.webp", text: "Suíte Master 10", loading: "lazy" },
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
                <Button 
                text="Fazer minha reserva!" 
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
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
