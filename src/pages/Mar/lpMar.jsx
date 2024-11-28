import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import styled from 'styled-components';
import CustomButton from '../../components/button3';
import CarouselComponent from '../../components/carrosselComponent';
import AcomodaComponent2 from '../../components/acomodaComponent2';
import Pensao from '../../components/pensao';
import Depoimentos from '../../components/depoimentos';
import { FaUtensils, FaMusic, FaPaw } from 'react-icons/fa';
import EventCardCarousel from '../../components/cardSlider';
import Button from '../../components/button';
import WhatsAppButton from '../../components/Whatsapp';
import PetFriendlyCarousel from '../../components/petCarrossel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledEspace = styled.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`;

const StyledSectionHome = styled.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: 1;
        opacity: 0.05;
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
    }
`;

const StyledHomeDiv = styled.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1732728789/FOTO-MAR_qssync_ei8mel.webp');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -3;
    }
`;

const StyledHomeTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
        z-index: 10!important;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
        
    }

    & > h4 b{
        color: var(--color--blue);
        font-weight: 300;
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

        @media (max-width: 768px) {
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

        @media (max-width: 768px) {
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
        position: relative;
        z-index: 2;
        font-weight: 100;

        @media (max-width: 768px) {
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
        description: "Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731156/petfriendly-scaled_vsev2s_obkojq.webp"
    },
    {
        title: "Praia",
        description: "Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730256/cachorro_na_praia_pmqyi4_p4nhwo.webp"
    },
    {
        title: "Piscina",
        description: "Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732728790/pousada_de_cima_vpzpdb_kssj6e.webp"
    },
    {
        title: "Ofurôs",
        description: "São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/ofuros_kyjddp_raquu4.webp"
    },
    {
        title: "Sala de estar",
        description: "A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/saladeestar_yakcqy_dtbu48.webp"
    },
    {
        title: "Cozinha",
        description: "Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731157/risoto1-compressed_m583dd_ekltxk.webp"
    },
    {
        title: "Bar",
        description: "Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732730257/bar_xl6dvc_bkc9w5.webp"
    },
    {
        title: "Suítes",
        description: "São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729616/suiteMar2_qlgel2_d11sun.webp"
    }
];

const StyledSectionEspaco = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`;

const ImagesAcomoda = [
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731480/suiteMar01_p6bfoi-compressed_kixsaa_kjg49l.webp", "text": "Suíte Superior 1", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/IMG_0142-compressed_lfijwu_h6x05q.webp", "text": "Suíte Standard 2", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731481/suiteMar03_o9sxbf-compressed_uw2hox_plhelj.webp", "text": "Suíte Superior 3", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731484/IMG_0143-compressed_fk4kgv_oxklv8.webp", "text": "Suíte Superior 4", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731487/suiteMar05_oid9as-compressed_al5vur_spz4rq.webp", "text": "Suíte Superior 5", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/mar_master_8_m1x38m_onrxki.webp", "text": "Suíte Superior 6", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731489/suiteMar07_dgfxzq-compressed_kody5f_uyjy7m.webp", "text": "Suíte Master 7", "loading": "lazy" },
    { "src": "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731494/suiteMar08_g1gmt0-compressed_mymcv1_rtodwa.webp", "text": "Suíte Master 8", "loading": "lazy" }
];


const StyledLocal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`;

const StyledContainerEvents = styled.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
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

    @media (max-width: 768px) {
        display: none;
    }
`;

const PetFriendlyImages = [
    {
        images: [
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731907/1_sxf4fc_a9uljb_pbaml7.webp", alt: 'Foto de cachorro com uma bola na boca', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/2_cldel9_wnqquw_gnk0f4.webp", alt: 'Foto do cachorro sentado tomando sol', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731908/3_i0ctxp_megfsi_exu5hi.jpg", alt: 'Cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731911/mar5_wwsqtk_dmwbdd.webp", alt: 'Cachorro tirando uma selfie com outros 3 cachorros', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732731912/cachorro-olhando-para-camera_wpovwv_jhxkqd.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/5_flrzdf_wyxn6v_h37kx5.jpg", alt: 'Cachorro com a lingua para fora', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732025/mar4_ilxhpl_buvyxu.webp", alt: 'Cachorro na borda da piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732026/mar6_wcjggv_nheujx.webp", alt: 'Cachorro em uma prancha de surf na onda', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/6_b6jtbs_dfnbyu_m0dpfv.webp", alt: 'Cachorro com óculos escuros', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732029/8_zr7p3o_czbag1_jfqnsr.jpg", alt: 'Cachorro e um cachorro pequeno', loading: "lazy", label: 'Le Ange Mar' },
        ],
    },
    {
        images: [
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732032/7_gutmna_mncfkn_o93tly.webp", alt: 'Foto de um cachorro com uma taça do lado', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732033/10_olepft_mfx8nm_hxzfgu.webp", alt: '3 cachorros e um homem na piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732035/mar2_xvqf5o_skheep.webp", alt: 'Cachorro marrom', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732036/mar1_tsyxm8_ek8eoa.webp", alt: 'Cachorro marrom na piscina', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732038/mar3_jmdiw8_lyw4uq.webp", alt: 'Cachorro branco olhando para a camera', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732039/mar7_vyslpi_blujc7.webp", alt: 'Cachorro dormindo no sofá', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732041/mar8_ywe1hn_vulehv.jpg", alt: 'Cachorro em cima do morro olhando para o lado', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732732042/17_awkinq_ommg1k_wuhbs8.jpg", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },
            { src: "https://res.cloudinary.com/dabucfkmg/image/upload/v1732729373/cachorro_na_m%C3%A3o_kil7xk_q6lqew.webp", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
        ],
        reverse: true
    }
];

const LpMar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);

    return (
        <>
            <Helmet>
                <title>Le Ange Serra - Pousada Le Ange</title>
            </Helmet>

            {/* <VideoPlayer videoSrc="https://res.cloudinary.com/dupg7clzc/video/upload/f_auto,q_50,w_2000/v1732279143/Mar_bajezt.mp4" /> */}

            <StyledEspace />

            <WhatsAppButton />

            <StyledSectionHome>
                <StyledHomeTexts>
                    <h4 data-aos="fade-up" data-aos-delay="100">Conheça a <b>Le Ange Mar</b>, a pousada mais</h4>
                    <h1 data-aos="fade-down" data-aos-delay="200">PET FRIENDLY<br /> DO <b>BRASIL</b></h1>
                    <p>Aqui, você e o seu pet são mais do que bem-vindos!</p>
                    <div>
                        <CustomButton
                            text="Reservar agora!"
                            textColor="var(--color--black)"
                            backgroundColor="transparent"
                            borderColor="var(--color--black)"
                            iconColor="var(--color--black)"
                            hoverBackgroundColor="var(--color--blue)"
                            hoverBorderColor="var(--color--blue)"
                            hoverColor="var(--color--white)"
                            hoverIconColor="var(--color--white)"
                            onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                        />
                    </div>
                </StyledHomeTexts>

                <StyledHomeDiv data-aos="fade-left" data-aos-delay="200" />
            </StyledSectionHome>

            <StyledLocal data-aos="fade-in" data-aos-delay="100">
                <h1 data-aos="fade-up" data-aos-delay="300">LeAnge Mar | Armação dos Búzios RJ</h1>
            </StyledLocal>

            <StyledSectionEspaco data-aos="fade-up" data-aos-delay="50">
                <CarouselComponent
                    slides={slides}
                    titleColor="var(--color--blue)"
                    buttonBgColor="var(--color--blue)"
                    imagePosition="left"
                />
            </StyledSectionEspaco>

            <AcomodaComponent2 images={ImagesAcomoda} />

            <Pensao colorDefinedBold="var(--color--blue)" data-aos="fade-up" data-aos-delay="400" />

            <PetFriendlyCarousel carousels={PetFriendlyImages} data-aos="fade-in" data-aos-delay="400"/>

            <StyledButtonCenter>
                <Button 
                text="Fazer minha reserva!" 
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
            </StyledButtonCenter>

            <StyledContainerEvents data-aos="fade-up" data-aos-delay="400">
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />

            <Footer />
        </>
    );
};

export default LpMar;
