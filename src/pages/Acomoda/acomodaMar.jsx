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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/1_jbfcfw-compressed_fowhdw_pwhthv.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/2_avh1mm-compressed_jmpbxs_irwtgy.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794904/5_bw0qou-compressed_au8uhx_ceqilz.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794907/4_j3c1yo-compressed_fmuvak_yl6rif.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794908/3_kplwmw-compressed_ctw3wb_x0b8bl.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794983/2_uonrhf-compressed_vtj5ay_tnnd7t.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794983/3_ysfzuk-compressed_drqyfp_yfcgly.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794984/5_dub0pj-compressed_nycmvi_gci7lf.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794986/1_ofu5mj-compressed_ele8hy_comdxg.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732794987/4_ulr721-compressed_njwzhs_jxppzm.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/1_mkvfcp-compressed_gr43kj_jzkgrj.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/3_njizit-compressed_na7v2c_xq2bzu.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795055/2_ciuk0m-compressed_cehbai_vuqq0y.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795058/5_mjfm3k-compressed_tfneqy_eq3zvz.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795060/4_d5kp62-compressed_lcocv8_jc1p0u.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795148/1_znboil-compressed_yri6qq_k7u1af.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795149/3_srrc1g-compressed_sxde4s_pn4jgn.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795149/5_lxdgp4-compressed_qaobnt_hjnfmh.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795152/2_edqaq4-compressed_hggyrj_b7saxa.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795153/4_k1afap-compressed_do1fjk_r0ktya.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795224/1_ztjmyc-compressed_qvus4l_pe1dnz.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795225/5_dkyssi-compressed_prm4wc_uzlbat.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795226/4_rg0jvi-compressed_pknmhg_nsm08m.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795229/2_djdgbx-compressed_zscwrg_cehaak.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795230/3_hkxuyr-compressed_fpwsiy_pg3fuf.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795340/suiteMar06_jywv1q-compressed_u1tfqp_n26dhd.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795341/5_b7dida_zqibum.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795345/1_tywkpb_ncjczz.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795344/4_p22p1t_ppwnfc.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795346/3_zpt6tw_ervd5a.jpg',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795416/1_usupcb-compressed_z7nnww_vuwzgw.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795418/5_v3dnrs-compressed_svhspj_jut4b7.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795420/4_n9wkv0-compressed_qqq4nw_ivgjgm.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795421/2_egxqmp-compressed_hnybrg_hrhxvm.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795424/3_pjp0sr-compressed_hnudyo_hez5id.webp',
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
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795507/1_pcudqj-compressed_sbpmpu_oxzuox.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795509/2-compressed_rudncg_m5bfoq.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795510/3-compressed_tjw0xv_cf95eh.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795513/4-compressed_x5k7tn_enedcb.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795514/5-compressed_rxetai_hmhlu2.webp',
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