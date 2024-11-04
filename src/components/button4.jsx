import React from 'react';
import styled from 'styled-components';
import { FaEye, FaShoppingCart } from 'react-icons/fa';

const ButtonContainer = styled.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 4px var(--color--black);
  color: var(--color--black);
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`;

const DefaultButton = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 10px;
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 500;
  transition: transform 0.3s ease; /* Adicionei a transição para o transform */

  @media (max-width:768px){
    padding: 7px 30px;
    font-size: 12px;
  }
`;

const HoverButton = styled(DefaultButton)`
  position: absolute;
  inset: 0;
  background-color: var(--color--blue);
  transform: translate(0%, 100%);
`;

const ButtonText = styled.span`
color: var(--color--black);
`;

const HoverButtonText = styled.span`
  color: var(--color--white);
`;

const IconButton = ({ text = "Quick View", text2 = "Shop Now" }) => {
  return (
    <ButtonContainer>
      <DefaultButton className="default-btn">
        <FaEye size={15} color="var(--color--black)" />
        <ButtonText>{text}</ButtonText>
      </DefaultButton>
      <HoverButton className="hover-btn">
        <FaShoppingCart size={15} color="var(--color--white)" />
        <HoverButtonText>{text2}</HoverButtonText>
      </HoverButton>
    </ButtonContainer>
  );
};

export default IconButton;
