import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import IconButton from "./button4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "./button";


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
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 2.5%;
    position: relative;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334824/marFoto_oxc2py.webp');
    background-size: cover;
    background-position: center;

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
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        
        padding: 0 5%;

        @media (max-width: 768px){
            padding: 0 2.5%;
            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 23%;
        height: 250px;
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
        transition: all .1s ease-in-out;
        animation: ${waterWave} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
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
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 10px;
        font-size: 0.7rem;
        font-weight: 100;
        border-radius: 5px 0 5px 0;
        transition: all 0.3s ease-in-out;
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
        padding: 10px;
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
    padding: 5%;

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
            margin-bottom: 35px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`;

const AcomodaComponent2 = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); // Atualiza os elementos em caso de re-renderização
      }, []);


    return (
    <>
        <StyledAcomodaContainer>
            <StyledAcomodaTexts>
                <div>
                    <h1 data-aos="fade-up" data-aos-delay="100">Conheça as suítes da Le Ange Mar</h1>
                </div>
                <div data-aos="fade-down" data-aos-delay="250">
                <Button
                    text="Reservar agora"
                    backgroundColor="var(--color--blue)"
                    borderColor="var(--color--white)"
                    onClick={() => {
                        window.open(
                        'https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329',
                        '_blank'
                        );
                    }}
                    />
                </div>
            </StyledAcomodaTexts>
            <main data-aos="zoom-in-up" data-aos-delay="400">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >g
                        <img src={image.src} alt={`Imagem ${index + 1}`}/>
                        <span onClick={() => window.location.href = `/acomodaMar#suite${index + 1}`}>
                            {hoveredIndex === index ? "Conhecer Suítes" : image.text}
                            {hoveredIndex === index && <FaArrowRight />}
                        </span>
                    </div>
                ))}
            </main>
        </StyledAcomodaContainer>
    </>
    );
};

export default AcomodaComponent2;