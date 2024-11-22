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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344205/suiteSuperior1_gpjls0_l6yhv9.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344197/1_o5yez9_vrlet1.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344198/3_aiyrqa_btekxc.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344200/4_ywuuuc_b8t7x3.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344203/5_onjzk1_ysyao3.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1732214237/foto2_pn8axc.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344824/3_u2ikyj_bbap70.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344826/4_wte9h1_nbgckn.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731344829/5_olm5xn_up47by.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345105/1_ylximp_j7rlx6.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345099/3_drrdp6_jeadzb.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345108/2_naq3yx_r415zb.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345101/4_lpovtm_pybn3y.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345103/5_tsqexf_xy8tbc.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345365/1_s9b5nq_bkdxnp.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345367/2_hyhg8t_a7ameu.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345369/3_s0ig5c_vrsvhv.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345371/4_oppeg3_o41fdi.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345374/5_kb5ean_xhm0vu.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345603/1_rnbhj2_kghiue.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345605/2_msj4wh_rrl3zt.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345608/3_b8v99f_aiaxqa.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345617/4_rdcxvu_sjgtje.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345621/5_cwrlxp_pjsznc.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345889/1_ytelar_a4gkq4.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345890/2_y07hp1_gxkw0f.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345893/3_ennrfl_tsrdpf.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345900/4_nmnmdm_pb6suc.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731345903/5_zjbujo_ojixkc.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730146635/1_r9brij.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730146632/2_lp3nwj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730146632/3_hahgqj.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730146193/4_rdcxvu.jpg',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1730146631/4_hstjdq.jpg',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346391/1_deflqw_o0h5op.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346395/3_apyt83_m5wg8y.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346393/2_vtsru4_j58fi3.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346398/4_a4uhie_akrdkl.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346401/5_s3imtf_jey5us.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346629/1_ougeas_aj0kkp.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346631/2_qiphp1_zbes5m.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346636/4_ams1oh_mxicwx.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346633/3_x7jhml_auko3f.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731346640/5_texuuu_e0gps2.webp',
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
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347011/1_lj4tav_i26aev.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347012/2_rwd1oh_clvvnj.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347015/3_hybfzc_rsrbwj.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347018/4_p052an_rslqub.webp',
    'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_2500/v1731347020/5_aqbze0_ae2782.webp',
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
