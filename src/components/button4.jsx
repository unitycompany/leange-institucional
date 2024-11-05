import React from 'react';
import styled from 'styled-components';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { MdHotel } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";

const ButtonContainer = styled.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px ${({ borderColor }) => borderColor || 'var(--color--black)'};
  color: ${({ textColor }) => textColor || 'var(--color--black)'};
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
  font-family: var(--font--comfortaa);
  gap: 10px;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 7px 30px;
    font-size: 12px;
  }
`;

const HoverButton = styled(DefaultButton)`
  position: absolute;
  inset: 0;
  background-color: ${({ hoverColor }) => hoverColor || 'var(--color--blue)'};
  transform: translate(0%, 100%);
`;

const ButtonText = styled.span`
  color: ${({ textColor }) => textColor || 'var(--color--black)'};
`;

const HoverButtonText = styled.span`
  color: ${({ hoverTextColor }) => hoverTextColor || 'var(--color--white)'};
`;

const IconButton = ({
  text = "Quick View",
  text2 = "Clique e reserve",
  borderColor,
  textColor,
  hoverColor,
  hoverTextColor,
}) => {
  const handleClick = () => {
    window.open("https://wa.link/dojlwi", "_blank");
  };

  return (
    <ButtonContainer borderColor={borderColor} textColor={textColor} onClick={handleClick}>
      <DefaultButton className="default-btn">
        <MdHotel size={15} color={textColor || 'var(--color--black)'} />
        <ButtonText textColor={textColor}>{text}</ButtonText>
      </DefaultButton>
      <HoverButton className="hover-btn" hoverColor={hoverColor}>
        <LuMousePointerClick size={15} color={hoverTextColor || 'var(--color--white)'} />
        <HoverButtonText hoverTextColor={hoverTextColor}>{text2}</HoverButtonText>
      </HoverButton>
    </ButtonContainer>
  );
};

export default IconButton;
