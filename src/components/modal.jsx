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
  border-radius: 35px 0 35px 0;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  width: 50%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  font-family: var(--font--comfortaa);
  background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730829511/WhatsApp-Image-2023-12-22-at-14.01.14_jvlpsl.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px){
    width: 90%;
    gap: 40px;
  }

  & > h2{

    color: var(--color--white);
    font-weight: 200;
    font-size: 1.6rem;
  }

  & > p {
 
    width: 80%;
    font-weight: 200;
    font-size: 1rem;
    color: var(--color--white);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  color: var(--color--white);
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 15px;
  background-color: var(--color--green); /* Cor do WhatsApp */
  font-weight: 600;
  color: white;
  font-size: .9rem;
  border-radius: 10px 0 10px 0;
  text-decoration: none;
  margin-top: 15px;
  transition: all .5s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  &:hover {
    background-color: var(--color--blue); /* Cor ao passar o mouse */
  }
`;

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <ModalContainer>
        <ModalCard>
          <CloseButton onClick={handleClose}>×</CloseButton>
          <h2>Nosso Pacote de Natal</h2>
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

