import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  left: 15px;
  overflow: hidden;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #00d757;
  z-index: 1000;

  &:hover {
    width: 325px;
    border-radius: 40px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  /* Ícone fica fixo */
  transition: width 0.3s ease-in-out;
`;

const Text = styled.div`
  position: absolute;
  left: 0;  /* Texto começa fora da tela */
  width: 0;
  opacity: 0;
  color: white;
  font-size: 1.4em;
  font-weight: 300;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
  padding-left: 125px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font--family);
  white-space: nowrap;

  ${Button}:hover & {
    width: 70%;
    opacity: 1;
  }
`;

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.link/dojlwi";  // Substitua pelo seu número do WhatsApp
  
  return (
    <Button onClick={() => window.open(whatsappLink, "_blank")}>
      <Sign>
        <FaWhatsapp color="white" size="30px" />
      </Sign>
      <Text>Fale com a central de reservas</Text>
    </Button>
  );
};

export default WhatsAppButton;
