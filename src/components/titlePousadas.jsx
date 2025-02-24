import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import styled, { keyframes } from "styled-components";

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 40%;
  height: 60vh;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    top: 25%;
    height: auto;
    padding: 5% 5%;
    gap: 30px;
    position: relative;
    z-index: 10;
    top: -60px;
    margin-bottom: -50px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    left: 0;
    top: 0;
    background-position: center;
    background-size: contain;
    animation: ${DivAnimated} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`;

const StyledTitlePag = styled.h1`
  width: 100%;
  text-align: left;
  font-family: var(--font--comfortaa);
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    color: var(--color--black);
    width: auto;
    padding: 7px 15px;
    border-radius: 0px 10px 0px 10px;
    font-size: .9rem;
    font-weight: 800;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(40px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
  }
`;

const StyledParagPag = styled.p`
  width: 100%;
  font-size: .90rem;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px) {
    text-align: justify;
    color: var(--color--black);
    width: 100%;
    margin-top: 5px;
    font-weight: 200;
    font-size: .8rem;
    line-height: 130%;
  }
`;

const StyledDivButton = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`;

const IdadeCrianca = styled.p`
  font-size: .6rem;
  opacity: .6;
  font-weight: 400;
  background-color: var(--color--green);
  padding: 5px 10px;
  color: #000;
  border-radius: 5px;
  transition: all .1s ease;
  font-family: var(--font--comfortaa);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: default;

  &:hover{
    transform: scale(1.05) translateX(5px);
    
    font-weight: 600;
  }
`

const TitlePousadas = ({
  text,
  title,
  borderColor,
  buttonColor,
  buttonHover,
  buttonBorder,
  targetPage,
  idade
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPage);
  };

  const handleClick2 = () => {
    window.open("https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329", "_blank");
  };

  return (
    <StyledDiv borderColor={borderColor}>
      <StyledTitlePag>
        {title}
      </StyledTitlePag>
      <StyledParagPag>
        {text}
      </StyledParagPag>
      <StyledDivButton>
        <Button
          idBtn="clickwpp"
          onClick={handleClick2}
          text="Fazer reserva!"
          backgroundColor="transparent"
          borderColor={buttonBorder}
          hoverColor={buttonHover}
          border="1px solid"
          color="var(--color--black)"
        />
        <Button
          idBtn="clickSaberMais"
          onClick={handleClick}
          text="Saber mais"
          backgroundColor={buttonColor}
          borderColor={buttonBorder}
          hoverColor={buttonHover}
          border="1px solid"
          color="var(--color--black)"
        />
        
      </StyledDivButton>
        <IdadeCrianca>{idade}</IdadeCrianca>
    </StyledDiv>
  );
};

export default TitlePousadas;
