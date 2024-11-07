import React, { useState } from 'react';
import styled from 'styled-components';
import { TbChristmasBall } from "react-icons/tb";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: white;
  border-radius: 60px 20px 35px 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.9);
  width: 50%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 5px;
  font-family: var(--font--comfortaa);
  background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731002794/Untitled-1_i9wrqe.png');
  background-size: cover;
  background-position: center;
  filter: contrast(120%);

  @media (max-width: 768px) {
    width: 85%;
    gap: 40px;
  }

  & > p {
    width: 60%;
    font-weight: 100;
    font-size: .9rem;
    line-height: 110%;
    color: var(--color--white);

    @media(max-width: 768px){
      line-height: 120%;
      width: 100%;
      margin-bottom: -25px;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 50px;
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  color: var(--color--white);
  font-family: var(--font--comfortaa);
  font-weight: 100;
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 20px;
  background-color: var(--color--white);
  border: 1px dashed #ff0a0a;
  font-weight: 600;
  color: var(--color--black);
  font-size: .9rem;
  border-radius: 10px 0 10px 0;
  text-decoration: none;
  font-weight: 100;
  margin-top: 15px;
  transition: all .2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  @media(max-width: 768px){
    font-size: .7rem;
  }

  &:hover {
    padding: 8px 25px;
    background-color: var(--color--black);
    color: var(--color--white);
  }
`;

const SuiteCountCircle = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  background-color: rgba(173, 1, 1, 0.9);
  border: 1px solid var(--color--white);
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: .8rem;
  line-height: 100%;
  font-family: var(--font--comfortaa);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media(max-width: 768px){
    width: 70px;
    height: 70px;
    font-size: .6rem;
  }
`;

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [suiteCount, setSuiteCount] = useState(7); // Quantidade de suítes disponíveis
  const [suiteText, setSuiteText] = useState("súites disponíveis"); // Texto a ser exibido no círculo

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <ModalContainer>
        <ModalCard>
          <CloseButton onClick={handleClose}>×</CloseButton>
          <SuiteCountCircle>
            {suiteCount} {suiteText}
          </SuiteCountCircle>
          <p>Aproveite nossa promoção especial. Clique abaixo para mais informações.</p>
          <WhatsAppButton href="https://wa.me/5511999999999" target="_blank">
            Fazer minha reserva agora!
            <TbChristmasBall />
          </WhatsAppButton>
        </ModalCard>
      </ModalContainer>
    )
  );
};

export default PromotionModal;
