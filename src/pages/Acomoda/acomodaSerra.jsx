import Quarto from "../../components/quarto";
import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { FaRulerCombined, FaBath, FaBed, FaTv, FaFire, FaCloudSunRain } from 'react-icons/fa';
import { BiSolidFridge } from "react-icons/bi";
import { SiApachecouchdb } from "react-icons/si";
import { TbBrandWindows } from "react-icons/tb";
import { MdChair } from "react-icons/md";
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
        color: var(--color--green);
        font-weight: 400;
    }

`

const SuiteSup1Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795659/suiteSuperior1_gpjls0_l6yhv9_umytyv.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795661/1_o5yez9_vrlet1_lfbo7c.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795663/3_aiyrqa_btekxc_hz3xhq.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795664/4_ywuuuc_b8t7x3_hw9wbm.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795667/5_onjzk1_ysyao3_ufxxs1.webp',
];

const SuiteSup1Text = [
    {
        NomedaSuite: "Suíte Superior 1",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas.",
    },
]

const SuiteSup2Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795738/foto2_pn8axc_1_sh4eu9.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795739/3_u2ikyj_bbap70_x49zfi.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795742/4_wte9h1_nbgckn_gbc50n.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795744/5_olm5xn_up47by_xrfk9u.webp',
];

const SuiteSup2Text = [
    {
        NomedaSuite: "Suíte Superior 2",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },   
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto.",
    },
]

const SuiteSup3Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795919/1_ylximp_j7rlx6_ozwjw1.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795921/3_drrdp6_jeadzb_rmyxjj.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795923/2_naq3yx_r415zb_jqdqkf.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795925/4_lpovtm_pybn3y_lbykns.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795927/5_tsqexf_xy8tbc_dihhel.webp',
];

const SuiteSup3Text = [
    {
        NomedaSuite: "Suíte Superior 3",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade.",
    },
]

const SuiteStan4Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796005/1_s9b5nq_bkdxnp_gifcsy.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796002/2_hyhg8t_a7ameu_ngap78.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796000/3_s0ig5c_vrsvhv_gezgyc.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795998/4_oppeg3_o41fdi_zfcgfj.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732795996/5_kb5ean_xhm0vu_qoxdsf.webp',
];

const SuiteStan4Text = [
    {
        NomedaSuite: "Suíte Standard 4",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },            
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia.",
    },
]

const SuiteStan5Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796079/1_rnbhj2_kghiue_nyeois.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796077/2_msj4wh_rrl3zt_wtuir0.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796075/3_b8v99f_aiaxqa_wz9bci.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796073/4_rdcxvu_sjgtje_zicxmh.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796071/5_cwrlxp_pjsznc_ozeyy6.webp',
];

const SuiteStan5Text = [
    {
        NomedaSuite: "Suíte Standard 5",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas.",
    },
]

const SuiteMas6Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796147/1_ytelar_a4gkq4_g65wuj.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796145/2_y07hp1_gxkw0f_sytf1p.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796143/3_ennrfl_tsrdpf_bucyak.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796140/4_nmnmdm_pb6suc_ymxs3p.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796139/5_zjbujo_ojixkc_k2y5xz.webp',
];

const SuiteMas6Text = [
    {
        NomedaSuite: "Suíte Master 6",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "93m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <MdChair />, text: 'Chaise lounge' },
            { icon: <TbBrandWindows />, text: 'Bay window' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        Description: "Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade.",
    },
]

const SuiteStan7Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796219/1_r9brij_gje5sv.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796216/2_lp3nwj_znqmoa.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796214/3_hahgqj_yqo9dp.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796212/4_rdcxvu_xhilch.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796210/4_hstjdq_tijeyz.webp',
];

const SuiteStan7Text = [
    {
        NomedaSuite: "Suíte Standard 7",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
        ],
        Description: "Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única.",
    },
]

const SuiteStan8Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796292/1_deflqw_o0h5op_fctmle.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796290/3_apyt83_m5wg8y_xtm3gb.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796287/2_vtsru4_j58fi3_btmslh.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796285/4_a4uhie_akrdkl_is73tk.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796283/5_s3imtf_jey5us_nwmnum.webp',
];

const SuiteStan8Text = [
    {
        NomedaSuite: "Suíte Standard 8",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda NÃO privativa' },
        ],
        Description: "Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto.",
    },
]

const SuiteSup9Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796371/1_ougeas_aj0kkp_jtjwra.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796369/2_qiphp1_zbes5m_teu7di.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796366/4_ams1oh_mxicwx_wsc66p.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796364/3_x7jhml_auko3f_lscb8k.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796363/5_texuuu_e0gps2_wfdia2.webp',
];

const SuiteSup9Text = [
    {
        NomedaSuite: "Suíte Superior 9",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "52m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza.",
    },
]

const SuiteMas10Images = [
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796451/2_rwd1oh_clvvnj_twtnlk.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796453/1_lj4tav_i26aev_wtffl7.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796449/3_hybfzc_rsrbwj_zqoyet.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796446/4_p052an_rslqub_uogcbj.webp',
    'https://res.cloudinary.com/dabucfkmg/image/upload/v1732796444/5_aqbze0_ae2782_iikt6s.webp',
];

const SuiteMas10Text = [
    {
        NomedaSuite: "Suíte Master 10",
        NomedaPousada: "Le Ange Serra",
        features: [
            { icon: <FaRulerCombined />, text: "80m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: < SiApachecouchdb />, text: 'Recamier e poltrona de leitura' },
            { icon: <FaFire />, text: 'Lareira' },
            { icon: <MdChair />, text: 'Couch lounge' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Ampla varanda privativa' },
        ],
        Description: "Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata.",
    },
]

const AcomodaSerra = () => {
    const location = useLocation();

    // Criar refs dinâmicas para as suítes
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
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);

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

    return (
        <>
            <WhatsAppButton />

            <TituloAcomoda>
                Acomodações da<b>Pousada Le Ange Serra</b>
            </TituloAcomoda>

            <Quarto id="suite1" ref={suiteRefs.suite1} images={SuiteSup1Images} suites={SuiteSup1Text} reverse={true} background="#CAD76680" />
            <Quarto id="suite2" ref={suiteRefs.suite2} images={SuiteSup2Images} suites={SuiteSup2Text} reverse={false} background="#CAD76680" />
            <Quarto id="suite3" ref={suiteRefs.suite3} images={SuiteSup3Images} suites={SuiteSup3Text} reverse={true} background="#CAD76680" />
            <Quarto id="suite4" ref={suiteRefs.suite4} images={SuiteStan4Images} suites={SuiteStan4Text} reverse={false} background="#CAD76680" />
            <Quarto id="suite5" ref={suiteRefs.suite5} images={SuiteStan5Images} suites={SuiteStan5Text} reverse={true} background="#CAD76680" />
            <Quarto id="suite6" ref={suiteRefs.suite6} images={SuiteMas6Images} suites={SuiteMas6Text} reverse={false} background="#CAD76680" />
            <Quarto id="suite7" ref={suiteRefs.suite7} images={SuiteStan7Images} suites={SuiteStan7Text} reverse={true} background="#CAD76680" />
            <Quarto id="suite8" ref={suiteRefs.suite8} images={SuiteStan8Images} suites={SuiteStan8Text} reverse={false} background="#CAD76680" />
            <Quarto id="suite9" ref={suiteRefs.suite9} images={SuiteSup9Images} suites={SuiteSup9Text} reverse={true} background="#CAD76680" />
            <Quarto id="suite10" ref={suiteRefs.suite10} images={SuiteMas10Images} suites={SuiteMas10Text} reverse={false} background="#CAD76680" />

            <Footer />
        </>
    );
};

export default AcomodaSerra;
