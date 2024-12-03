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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7d1df8a5-0905-4ac0-5a2d-621e8a48dd00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27861ce8-6beb-438a-6ff4-3cee719fe500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22957a6-e82d-46ab-01f2-336a3d84ec00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26d9fcee-7e13-4b45-4d95-6248723ddc00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7336810d-d00e-4445-529b-f16b72cc7700/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab53301-9865-467b-5746-7d359f21fe00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a27173c0-d56c-4c22-ea55-7f23cba7a800/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/beb843cb-3ae0-4ea0-348c-5af6f79b9600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22c1ab9-1c7a-47e4-3642-0024f2b24700/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eaddb3bf-35e7-4bff-09ff-0c5a80525800/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/711abf2e-87c0-4568-ffa3-71f98954af00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58b29f7d-d13e-4c97-06d7-c23613222d00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e01a043d-e7ca-4edc-d4ad-103e63e79600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a297c1da-191f-4479-7de3-3403c90a8400/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a0c090c6-7dcb-4886-8dae-e439370b2a00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/932de633-2aa1-41b9-a3ff-3a99f4cb5e00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e5f64afd-bc17-4cf3-b790-453e90545200/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/18dc1fbd-cbbe-4ccf-d204-c47841cdc900/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ceb5e56-07d1-44cf-b194-9a5ed2265b00/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9cb4ce2c-7d70-4a5d-fa18-7615aa389d00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ae1efc69-3fed-4143-0162-fa6659f85000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e3c9ebb8-4dc0-42f0-7c77-efb7b307ef00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2a76285-c7ca-4cfc-3194-567e7e193000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e9c2e45-b349-403a-3d09-93b6a0661c00/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d24e6cd4-c8e9-437d-afdb-dadebbcb4000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ef9ef222-11b1-4689-435b-290edb163900/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/178e93c6-234b-45a2-7fa1-167362cae400/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5e9145f7-431e-49be-10c3-861a9289cc00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fcae768c-1514-4874-e9eb-1dde99a62b00/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f3d777cf-17c2-4055-75a9-4be9fcc33800/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0860b499-9c8c-4e99-192a-3ebe36229d00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9dd5297d-5fba-438f-555c-8cb19bb82a00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e8184c4c-b550-4166-7448-7492a7477f00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/421cea52-70a2-477b-0331-b21666a29c00/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd53b58-4a7e-428b-ff6f-73a485a99f00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46aeb5ba-8400-4a23-f4e4-df0d97083b00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b151e809-9f33-4e2c-6f87-0903cb86db00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5651b927-c41d-4f77-f187-3796426ae300/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/af920b8e-ebfe-482c-c876-683601310500/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/40cb4a09-1c14-43cb-e17a-bf61a96c6300/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cd1824ad-8a82-49bf-ecdb-292e6a0e3500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/05d8b494-9ae3-429f-ed5c-8b192bf3e500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b70f4c55-c0c6-4356-0098-f6318c8ce600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c51dc547-138b-434c-dd48-60ae2ae95900/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b04be4b1-aa90-4228-6dad-507f08379500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8caf9f13-0f6c-48cf-5606-6b2b0ce5d000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/85e23a34-3058-43dc-a035-61fd0e65c700/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79feb4e3-78e2-4c90-92e3-b0acbe649300/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63467d9f-7285-43e0-ce5e-e5a83e158300/public',
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
