import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import CustomButton from "./button3";
import { FaArrowRight } from "react-icons/fa";


const waterWave = keyframes`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`;


const StyledAcomodaContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 65%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s ease-in-out;
        animation: ${waterWave} 5s ease-in-out infinite;
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;
        
        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`;

const StyledAcomodaTexts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
        }
    }

    & > div h1 {
        font-size: 3rem;
        color: var(--color--black);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.6rem;
            text-align: center;

            margin-bottom: 10px;
        }
    }

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        color: var(--color--black);
        line-height: 100%;
        font-size: 1rem;

        @media (max-width: 768px){
            width: 100%;

            text-align: justify;
            margin-bottom: 15px;
        }
    }
`;

const AcomodaComponent = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <StyledAcomodaContainer>
            <StyledAcomodaTexts>
                <div>
                    <h1>Suítes</h1>
                    <p>Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira excepcional com vista deliciosa para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.</p>
                </div>
                <div>
                    <CustomButton 
                        text="Reservar agora!"
                        textColor="var(--color--black)"
                        backgroundColor="transparent"
                        borderColor="var(--color--black)"
                        iconColor="var(--color--black)"
                        hoverBackgroundColor="var(--color--black)"
                        hoverBorderColor="var(--color--white)"
                        hoverColor="var(--color--white)"
                        hoverIconColor="var(--color--white)"
                        onClick={() => alert("Reservado!")}
                    />
                </div>
            </StyledAcomodaTexts>
            <main>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={image.src} alt={`Imagem ${index + 1}`} />
                        <span onClick={() => alert("Conhecendo suíte completa!")}>
                            {hoveredIndex === index ? "Conhecer Suíte Completa" : image.text}
                            {hoveredIndex === index && <FaArrowRight />}
                        </span>
                    </div>
                ))}
            </main>
        </StyledAcomodaContainer>
    );
};

export default AcomodaComponent;