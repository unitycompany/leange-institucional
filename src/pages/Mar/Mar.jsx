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
import { FaRegCreditCard } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Regras from '../../components/regras';
import EventAlert from '../../components/alertEvent';

const StyledEspace = styled.div`
    height: 0vh;

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
    height: 100vh;
    background: #fff;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
        z-index: 1;
        opacity: 0.02;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
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
    width: 50%;
    height: 100%;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ddb82947-e348-414c-3db1-f51552701b00/public');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(110%);
    position: absolute;
    right: 0;
    top: 0;

    &::before{
        content: '';
        width: 25%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        border-image: fill 0 linear-gradient(-90deg, #0000, #ffffff);

        @media (max-width:768px){
            display: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0000, #ffffff);
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

        @media (max-width: 768px){
            color: var(--color--white);
            font-weight: 600;
            background-color: #7AC4F390;
            padding: 5px;
        }
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
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"
    },

    {
        title: "Praia",
        description: "Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"
    },

    {
        title: "Piscina",
        description: "Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"
    },

    {
        title: "Ofurôs",
        description: "São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"
    },

    {
        title: "Sala de estar",
        description: "A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"
    },

    {
        title: "Cozinha",
        description: "Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"
    },

    {
        title: "Bar",
        description: "Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"
    },

    {
        title: "Suítes",
        description: "São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",
        buttonText: "Viver minha experiência agora",
        imageUrl: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"
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
    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public", "text": "Suíte Superior 1", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public", "text": "Suíte Standard 2", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public", "text": "Suíte Superior 3", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public", "text": "Suíte Superior 4", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public", "text": "Suíte Superior 5", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public", "text": "Suíte Superior 6", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public", "text": "Suíte Master 7", "loading": "lazy" },

    { "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public", "text": "Suíte Master 8", "loading": "lazy" }
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

const IdadeCrianca = styled.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
  width: 100%!important;
`

const events = [
    {
        image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public',
        title: 'Fique 4 pague 3',
        dateRange: 'Segunda-feira a Sexta-feira',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaRegCreditCard />, text: 'Até 12X SEM JUROS' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '449,00',
        discount: 25,
    },

    {
        image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public',
        title: 'Pacote de Carnaval',
        dateRange: '28/02/2025 até 04/03/2025 (4 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaUtensils />, text: 'Churrasco no sábado' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '757,25',
        discount: 25,
    },

    {
        image: 'https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public',
        title: 'Pacote de Páscoa',
        dateRange: '17/04/2025 até 21/04/2025 (4 diárias)',
        features: [
            { icon: <FaUtensils />, text: 'Todas as refeições incluídas' },
            { icon: <FaUtensils />, text: 'Almoço e noite especial' },
            { icon: <FaPaw />, text: 'Taxa pet free (não cobramos por pet)' },
        ],
        price: '653,80',
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
            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public", alt: 'Foto de cachorro com uma bola na boca', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public", alt: 'Foto do cachorro sentado tomando sol', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public", alt: 'Cachorro na piscina sorrindo', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public", alt: 'Cachorro tirando uma selfie com outros 3 cachorros', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public", alt: 'Cachorro com a lingua para fora', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public", alt: 'Cachorro na borda da piscina', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public", alt: 'Cachorro em uma prancha de surf na onda', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public", alt: 'Cachorro com óculos escuros', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public", alt: 'Cachorro e um cachorro pequeno', loading: "lazy", label: 'Le Ange Mar' },
        ],
    },
    
    {
        images: [
            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public", alt: 'Foto de um cachorro com uma taça do lado', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public", alt: '3 cachorros e um homem na piscina', loading: "lazy", label: 'Le Ange Mar' },
            
            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public", alt: 'Cachorro marrom', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public", alt: 'Cachorro marrom na piscina', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public", alt: 'Cachorro branco olhando para a camera', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public", alt: 'Cachorro dormindo no sofá', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public", alt: 'Cachorro em cima do morro olhando para o lado', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public", alt: '3 cachorros brincando na praia', loading: "lazy", label: 'Le Ange Mar' },

            { src: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public", alt: 'Foto do cachorro olhando para a câmera', loading: "lazy", label: 'Le Ange Mar' },
        ],
        reverse: true
    }
];

const AlertDiv = styled.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-top: 0;
        margin-bottom: 0;
    }
`

const Mar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);

    return (
        <>
            <Helmet>
                <title>Le Ange Serra - Pousada Le Ange</title>
            </Helmet>

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
                    <IdadeCrianca>*Só permitimos crianças acima de 13 anos!</IdadeCrianca>
                </StyledHomeTexts>

                <StyledHomeDiv data-aos="fade-left" data-aos-delay="200" />
            </StyledSectionHome>

            <StyledLocal data-aos="fade-in" data-aos-delay="100">
                <h1 data-aos="fade-up" data-aos-delay="300">LeAnge Mar | Armação dos Búzios RJ</h1>
            </StyledLocal>

            <Regras/> 

            <StyledSectionEspaco data-aos="fade-up" data-aos-delay="50">
                <CarouselComponent
                    slides={slides}
                    titleColor="var(--color--blue)"
                    buttonBgColor="var(--color--blue)"
                    imagePosition="left"
                    backgroundColor="var(--color--blue)"
                />
            </StyledSectionEspaco>

            <AcomodaComponent2 images={ImagesAcomoda} />

            <Pensao colorDefinedBold="var(--color--blue)" data-aos="fade-up" data-aos-delay="400" />

            <PetFriendlyCarousel carousels={PetFriendlyImages} data-aos="fade-in" data-aos-delay="400"/>

            <StyledButtonCenter>
                <Button 
                text="Fazer minha reserva!" 
                backgroundColor="var(--color--green)"
                onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
            </StyledButtonCenter>

            <AlertDiv>
                <EventAlert />
            </AlertDiv>
           

            <StyledContainerEvents data-aos="fade-up" data-aos-delay="400">
                <EventCardCarousel events={events} />
            </StyledContainerEvents>

            <Depoimentos />

            <Footer />
        </>
    );
};

export default Mar;
