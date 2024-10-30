import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import styled,{keyframes} from "styled-components";

const DivAnimated = keyframes`
    0% {
        border-radius: 80px 20px 50px 80px;
    }
    25% {
        border-radius: 50px 80px 30px 60px;
    }
    50% {
        border-radius: 100px 50px 80px 30px;
    }
    75% {
        border-radius: 60px 30px 100px 50px;
    }
    100% {
        border-radius: 80px 20px 50px 80px;
    }
`;

const StyledDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 40%;
    height: 60vh;
    padding: 50px;

    @media (max-width: 768px){
        width: 100%; 
        position: absolute;
        align-items: center;
        gap: 15px;
        z-index: 2;
        border: 1px solid red;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.1;
        left: 0;
        top: 0;
        border: 1px solid var(--color--black);
        background-image: url('../../public/background/background_black.webp');
        background-position: center;
        background-size: contain;
        animation: ${DivAnimated} 8s ease-in-out infinite;
    }
`;


const StyledTitlePag = styled(motion.h1)`
    width: 100%;
    text-align: left;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    font-size: 1.8rem;

    @media (max-width: 768px){
        text-align: center;
        color: var(--color--white);
        border: 1px solid red;
        font-size: 1.5rem;
    }
`;

const StyledParagPag = styled(motion.p)`
    width: 80%;
    font-family: var(--font--avenir);

    @media (max-width: 768px){
        text-align: justify;
        color: var(--color--white);
        width: 100%;
        margin-top: 5px;
        border: 1px solid red;
        font-size: 1rem;
        line-height: 140%;
    }
`;

const TitlePousadas = ({
    text,
    title,
    borderColor,
    containerAnimation = { opacity: 0, y: 50 },
    titleAnimation = { opacity: 0, y: -20 },
    textAnimation = { opacity: 0, x: -20 },
    buttonAnimation = { opacity: 0, scale: 0.8 },
    animationDuration = 0.5
}) => {
    return (
        <StyledDiv
            borderColor={borderColor}
            initial={containerAnimation}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: animationDuration }}
        >
            <StyledTitlePag
                initial={titleAnimation}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: animationDuration, delay: 0.2 }}
            >
                {title}
            </StyledTitlePag>
            <StyledParagPag
                initial={textAnimation}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: animationDuration, delay: 0.4 }}
            >
                {text}
            </StyledParagPag>
            <motion.div
                initial={buttonAnimation}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: animationDuration, delay: 0.6 }}
            >
                <Button 
                    text="Fazer minha reserva" 
                    backgroundColor="transparent" 
                    border="1px solid var(--color--black)" 
                    color="var(--color--black)"
                />
            </motion.div>
        </StyledDiv>
    );
};

export default TitlePousadas;
