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
import SchemaMarkup from "../../components/SchemaMarkup";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import CardSuite from "../../components/cards/cardSuite";

const TituloAcomoda = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    margin-top: 2.5%;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;
    margin-bottom: -60px;

    @media (max-width: 768px){
        height: 15vh;
        padding: 30% 0 20% 0;
    }

    & > b{
        color: var(--color--green);
        font-weight: 400;
    }

`

const Acomodacoes = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    padding: 2.5% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
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
        NomedaSuite: "Suíte Superior 2",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial.",
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
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 45m², esta suíte conta com uma cama king-size, ar-condicionado e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet.",
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
        NomedaSuite: "Suíte Standard 4",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia.",
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
        NomedaSuite: "Suíte Standard 5",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante.",
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
        NomedaSuite: "Suíte Master 6",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante.",
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
        NomedaSuite: "Suíte Standard 7",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "Esta suíte de 45m² oferece cama king-size, ar-condicionado e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso.",
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
        NomedaSuite: "Suíte Standard 8",
        NomedaPousada: "Le Ange Mar",
        features: [
            { icon: <FaRulerCombined />, text: "45m²" },
            { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
            { icon: <BiSolidFridge />, text: 'Frigobar' },
            { icon: <FaTv />, text: 'Smart TV' },
            { icon: <FaBed />, text: 'Cama king-size' },
            { icon: <FaBath />, text: 'Banheira relaxante' },
            { icon: <FaCloudSunRain />, text: 'Aquecedor de toalhas' },
            { icon: <MdDeck />, text: 'Varanda privativa' },
        ],
        Description: "A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento.",
    },
]

const AcomodaSerra = () => {

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
    }, []); return (
        <>

            {/* <WhatsAppButton /> */}
            <Acomodacoes>

                <Helmet>
                    <title>Acomoda Serra - Pousada Le Ange</title>
                </Helmet>
                <SchemaMarkup pageType="acomodaSerra" />

                <TituloAcomoda>Acomodações da<b>Pousada Le Ange Serra</b></TituloAcomoda>

                {/* <Quarto id="suite1" ref={suiteRefs.suite1} images={SuiteSup1Images} suites={SuiteSup1Text} reverse={true} background="#CAD76650" />
            <Quarto id="suite2" ref={suiteRefs.suite2} images={SuiteStan2Images} suites={SuiteStan2Text} reverse={false} background="#CAD76650" />
            <Quarto id="suite3" ref={suiteRefs.suite3} images={SuiteSup3Images} suites={SuiteSup3Text} reverse={true} background="#CAD76650" />
            <Quarto id="suite4" ref={suiteRefs.suite4} images={SuiteSup4Images} suites={SuiteSup4Text} reverse={false} background="#CAD76650" />
            <Quarto id="suite5" ref={suiteRefs.suite5} images={SuiteSup5Images} suites={SuiteSup5Text} reverse={true} background="#CAD76650" />
            <Quarto id="suite6" ref={suiteRefs.suite6} images={SuiteSup6Images} suites={SuiteSup6Text} reverse={false} background="#CAD76650" />
            <Quarto id="suite7" ref={suiteRefs.suite7} images={SuiteStan7Images} suites={SuiteStan7Text} reverse={true} background="#CAD76650" />
            <Quarto id="suite8" ref={suiteRefs.suite8} images={SuiteMas8Images} suites={SuiteMas8Text} reverse={false} background="#CAD76650" /> */}

                <CardSuite
                    ref={suiteRefs.suite1}
                    nome="Suíte Superior 1"
                    descricao="Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9273352d-dc7e-47f6-536a-6e80e79e6b00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4f1f1e12-d790-4c60-5cb5-c05f8b9bbe00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3921d27d-d13f-448d-3875-d8c974947b00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f799249f-3132-4962-f875-3ba6abf12800/public',
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                    direction={true}
                />

                <CardSuite
                    ref={suiteRefs.suite2}
                    nome="Suíte Superior 2"
                    direction={false}
                    descricao="Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e86441b6-ed36-4cee-575e-780d151ea700/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e3e5167-3a85-4407-beaf-e48a90ee1900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2372c7c3-d0e4-429e-ed21-e635a04bf100/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27b76dcf-9649-490d-39ff-949dc7089000/public',
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite3}
                    nome="Suíte Superior 3"
                    direction={true}
                    descricao="Com 52m², esta suíte conta com uma cama king-size, ar-condicionado e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."
                    features={[
                        { icon: <FaRulerCombined />, text: "45m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/023959ce-4b6e-4814-da64-4e89bed67900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/023959ce-4b6e-4814-da64-4e89bed67900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/02296250-3572-42c5-0d8d-e1e8ea7bf900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fc38873e-22d3-4219-821b-495bfd9d5900/public',
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite4}
                    nome="Suíte Standard 4"
                    direction={false}
                    descricao="Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/54f79c29-98b2-474e-e81c-32088ceab600/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a812880b-0e52-43e5-3096-380c1d079000/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3b594509-fc7a-473b-b9ed-e4b3205c2900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/52e1c09a-e6e8-46ee-c372-776057035600/public'
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite5}
                    nome="Suíte Standard 5"
                    direction={true}
                    descricao="Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda com rede' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff46959-abbe-4fd4-b715-d8c505b5ce00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/924b7be1-f3a4-4b67-2160-580bb58f2c00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c7a2d9b-c5e8-475d-9e3a-c56764d4d300/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/806b3b5b-cbec-417b-4495-e44b7ed35e00/public'
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite6}
                    nome="Suíte Master 6"
                    direction={false}
                    descricao="Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."
                    features={[
                        { icon: <FaRulerCombined />, text: "93m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a18f51ef-d267-4f49-2419-c1db5418d000/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27184edb-4bf6-4f61-7c90-d59808f2eb00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a60715c6-293a-4c98-a98c-f09ce6e6e400/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/24d86c85-3be9-4669-6884-0321a026bb00/public',
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite7}
                    nome="Suíte Standard 7"
                    direction={true}
                    descricao="Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda com rede' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/75eff505-4596-401b-9dcc-b5916e5cfa00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be5712f1-393e-4e4d-d9ac-16847da95d00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96478ba4-367d-4615-ab3d-a438ecf8a300/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ad9f8e6a-6c23-499b-e9e9-28ea048b0200/public',
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite8}
                    nome="Suíte Standard 8"
                    direction={false}
                    descricao="Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda com rede' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b6e53f8b-c22d-40bb-ee1a-90d457315900/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c9dbb5e-3450-4845-d1e7-6baf8a192800/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5c84f268-7a72-4d66-56b3-490a37c77400/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fc2731b3-911e-40b0-54d4-1984cd302700/public'
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite9}
                    nome="Suíte Superior 9"
                    direction={true}
                    descricao="Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."
                    features={[
                        { icon: <FaRulerCombined />, text: "52m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0d10e5c-a0af-4ca4-4071-60a57cd80c00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/854183d6-413f-4c61-a209-26ab1743e300/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3ca348b1-c555-4cbd-6dcd-90cdc9d2c600/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ec83329-240c-4cfa-32b2-ea08ee70f200/public'
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

                <CardSuite
                    ref={suiteRefs.suite10}
                    nome="Suíte Master 10"
                    direction={false}
                    descricao="Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."
                    features={[
                        { icon: <FaRulerCombined />, text: "80m²" },
                        { icon: <FaBath />, text: 'Banheira' },
                        { icon: <FaBed />, text: 'Cama King-size' },
                        { icon: <FaCloudSunRain />, text: 'Ar-condicionado' },
                        { icon: <MdDeck />, text: 'Ampla varanda privativa' },
                    ]}
                    images={[
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9a597ce5-9298-4532-c3d5-64c22cad9400/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fd715e1-ad42-47b1-4183-0fc4c37baa00/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ac914cd-e1e4-4e79-35f7-8c9c60cea700/public',
                        'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/13fb8022-a6cb-4eef-cd8b-90e073c75a00/public'
                    ]}
                    CTA="Solicitar orçamento"
                    color="#CAD766"
                />

            </Acomodacoes>


            <Footer />
        </>
    )
}

export default AcomodaSerra;