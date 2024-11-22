import Quarto from "../../components/quarto";
import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { FaRulerCombined, FaBath, FaBed, FaTv, FaCloudSunRain } from 'react-icons/fa';
import { BiSolidFridge } from "react-icons/bi";
import { BsCupHotFill } from "react-icons/bs";
import { MdDeck } from "react-icons/md";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/Whatsapp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TituloAcomoda = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--blue);
        font-weight: 400;
    }

`

const SuiteSup1Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347671/1_jbfcfw-compressed_fowhdw.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347679/2_avh1mm-compressed_jmpbxs.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347674/5_bw0qou-compressed_au8uhx.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347677/4_j3c1yo-compressed_fmuvak.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347669/3_kplwmw-compressed_ctw3wb.jpg',
];

const SuiteSup1Text = [
    {
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "50m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro.",
    },
]

const SuiteStan2Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348252/2_uonrhf-compressed_vtj5ay.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348249/3_ysfzuk-compressed_drqyfp.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348244/5_dub0pj-compressed_nycmvi.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348255/1_ofu5mj-compressed_ele8hy.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348246/4_ulr721-compressed_njwzhs.jpg',
];

const SuiteStan2Text = [
    {
        NomedaSuite: "Suíte Standard 2",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial.",
    },
]

const SuiteSup3Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348602/1_mkvfcp-compressed_gr43kj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348599/2_ciuk0m-compressed_cehbai.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348597/3_njizit-compressed_na7v2c.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348592/5_mjfm3k-compressed_tfneqy.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731348594/4_d5kp62-compressed_lcocv8.jpg',
];

const SuiteSup3Text = [
    {
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet.",
    },
]

const SuiteSup4Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349318/1_znboil-compressed_yri6qq.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349281/3_srrc1g-compressed_sxde4s.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349273/5_lxdgp4-compressed_qaobnt.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349314/2_edqaq4-compressed_hggyrj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349275/4_k1afap-compressed_do1fjk.jpg',
];

const SuiteSup4Text = [
    {
        NomedaSuite: "Suíte Superior 4",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia.",
    },
]

const SuiteSup5Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349664/1_ztjmyc-compressed_qvus4l.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349653/5_dkyssi-compressed_prm4wc.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349655/4_rg0jvi-compressed_pknmhg.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349661/2_djdgbx-compressed_zscwrg.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731349658/3_hkxuyr-compressed_fpwsiy.jpg',
];

const SuiteSup5Text = [
    {
        NomedaSuite: "Suíte Superior 5",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante.",
    },
]

const SuiteSup6Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731334579/suiteMar06_jywv1q-compressed_u1tfqp.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730149982/5_b7dida.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730149980/4_p22p1t.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730149976/1_tywkpb.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730149978/3_zpt6tw.jpg',
];

const SuiteSup6Text = [
    {
        NomedaSuite: "Suíte Superior 6",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante.",
    },
]

const SuiteStan7Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350736/1_usupcb-compressed_z7nnww.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350716/5_v3dnrs-compressed_svhspj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350720/2_egxqmp-compressed_hnybrg.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350716/3_pjp0sr-compressed_hnudyo.jpg',
];

const SuiteStan7Text = [
    {
        NomedaSuite: "Suíte Master 7",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso.",
    },
]

const SuiteMas8Images = [
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350404/1_pcudqj-compressed_sbpmpu.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350402/2-compressed_rudncg.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350399/3-compressed_tjw0xv.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350396/4-compressed_x5k7tn.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731350394/5-compressed_rxetai.jpg',
];

const SuiteMas8Text = [
    {
        NomedaSuite: "Suíte Master 8",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <BsCupHotFill />, text: 'Cafeteira 3 corações' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento.",
    },
]

const AcomodaMar = () => {

    const location = useLocation();

    const suiteRefs = {
        suite1: useRef(null),
        suite2: useRef(null),
        suite3: useRef(null),
        suite4: useRef(null),
        suite5: useRef(null),
        suite6: useRef(null),
        suite7: useRef(null),
        suite8: useRef(null),
        suite9: useRef(null),
        suite10: useRef(null),
    };

    useEffect(() => {
        const scrollToHash = () => {
            const hash = location.hash.replace("#", "");
            console.log("Hash atual:", hash);
    
            if (hash && suiteRefs[hash]?.current) {
                const element = suiteRefs[hash].current;
    
                if (element) {
                    // Calcula a posição ajustada
                    const offsetTop = element.offsetTop - 100; // Garantir offset com margem superior
                    console.log(`Elemento encontrado: ${hash}, rolando para: ${offsetTop}px`);
    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    });
                } else {
                    console.log(`Elemento com ID ${hash} não encontrado no DOM.`);
                }
            } else {
                console.log(`Hash ${hash} não está associado a um ref válido.`);
            }
        };
    
        const handlePageLoad = () => {
            console.log("Página carregada, verificando hash...");
            scrollToHash();
        };
    
        window.addEventListener("load", handlePageLoad);
        window.addEventListener("hashchange", scrollToHash);
    
        scrollToHash();
    
        return () => {
            window.removeEventListener("load", handlePageLoad);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, [location, suiteRefs]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); 
      }, []);

    return(
        <>

            <WhatsAppButton />

            <TituloAcomoda>Acomodações da<b>Pousada Le Ange Mar</b></TituloAcomoda>

            <Quarto id="suite1" ref={suiteRefs.suite1} images={SuiteSup1Images} suites={SuiteSup1Text} reverse={true} background="#7AC4F350"/>
            <Quarto id="suite2" ref={suiteRefs.suite2} images={SuiteStan2Images} suites={SuiteStan2Text} reverse={false} background="#7AC4F350"/>
            <Quarto id="suite3" ref={suiteRefs.suite3} images={SuiteSup3Images} suites={SuiteSup3Text} reverse={true} background="#7AC4F350"/>
            <Quarto id="suite4" ref={suiteRefs.suite4} images={SuiteSup4Images} suites={SuiteSup4Text} reverse={false} background="#7AC4F350"/>
            <Quarto id="suite5" ref={suiteRefs.suite5} images={SuiteSup5Images} suites={SuiteSup5Text} reverse={true} background="#7AC4F350"/>
            <Quarto id="suite6" ref={suiteRefs.suite6} images={SuiteSup6Images} suites={SuiteSup6Text} reverse={false} background="#7AC4F350"/>
            <Quarto id="suite7" ref={suiteRefs.suite7} images={SuiteStan7Images} suites={SuiteStan7Text} reverse={true} background="#7AC4F350"/>
            <Quarto id="suite8" ref={suiteRefs.suite8} images={SuiteMas8Images} suites={SuiteMas8Text} reverse={false} background="#7AC4F350"/>

            <Footer />
        </>
    )
} 

export default AcomodaMar;