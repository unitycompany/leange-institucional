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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/224faac1-7f2b-4e14-8d75-e9190e813b00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/353c8221-e9bf-49c5-6c43-103a69ae6800/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7dd92106-fe04-4e01-01f5-f174bef81a00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84dce2f1-97a8-466a-8d53-d20540b75a00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0200d43-3f83-438c-49ab-338849f8c100/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11429c23-8024-4e73-d834-7af88bede500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/719761c8-54d7-4dba-e631-6557a1464600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1254a3f5-bae5-4110-5100-d17bf5602600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/541ebf7c-5343-4545-3d62-7862ea0c5b00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/60c29539-7e27-476a-cec5-aa929f036100/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/89368e85-889e-41fc-eafe-e6a23b278600/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fca9fbcb-04a7-48b0-af5d-125a7da7a500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/01b5c7ac-d7a0-4647-a472-af2755980d00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c11df969-92ac-4b82-5923-72add6d2a400/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ab284cc9-797e-4de3-706f-a8e3c9958300/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/609d4224-77e9-4993-093c-7e6b6f53cd00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf696df0-ff89-4aa5-b5ab-b42477dfc400/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece7a36a-7989-4a77-c69e-963b7c41e500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd252cd-2c0a-420d-55e6-7ddb05319200/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bed0eb8-a9a7-4a71-48d5-7be1528fa400/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d47d93cd-1d83-4684-b2cd-23067ba58b00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d214206-6623-468f-7d4e-40db9793d700/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2671e476-3ba9-402c-5864-0b3c4f2f6c00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1a7a38f-4371-441a-2492-e7e0f97eee00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be3dccd2-e019-4d93-9c6c-3b930d519c00/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9891374e-4514-480c-bc7c-5e1af0ef7b00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6747ab9c-105d-4e37-5be7-d14b63c6d100/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4ee59c14-ad1f-409b-db20-e49298d49400/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8d46666c-530f-42d4-9223-bdd74e4a7900/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31a78bcb-34a0-4254-b51e-3f6ff4dbe600/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9b174ce2-2966-4c9e-9faf-185da8d1d200/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b0924d25-dd2e-4a7b-5db4-558748300f00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0c0b3f28-0981-477e-a77a-ee606e941f00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252537ee-171f-4f70-3bda-8479e0c1be00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b90bd076-582a-4fe6-3fb1-95a0ceadc700/public',
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
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6280f6c6-f008-4f18-fe45-fe16d6d76000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eea5797e-34bc-4138-8ab7-9e4bd9fcd500/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c112a2dd-d613-4801-d4a0-8d30b5121a00/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/90902690-7a42-4cad-b8aa-4099c8b58000/public',
    'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c967f3cc-5ae6-4ea1-4e3e-2041f83cb600/public',
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