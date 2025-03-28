import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const StyledButtonAcomodo = styled.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; 
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({ backDefine }) => backDefine || 'var(--color--white)'};
  border-radius: 10px;
  color: ${({ colorDefine }) => colorDefine || 'var(--color--black)'};
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  font-family: var(--font--comfortaa);
  font-weight: 600;
  left: 0;
  bottom: 0;

  .icon {
    font-size: 18px;
    color: var(--color--black);
    margin-left: 8px;
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); 
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`;

const ButtonAcomoda = ({ text, onClick, backDefine, colorDefine, IdBtn }) => {
  const handleClick = (event) => {
    console.log("Botão clicado com id:", event.currentTarget.id);
    if (onClick) onClick(event);
  };

  return (
    <StyledButtonAcomodo 
      id={IdBtn}
      backDefine={backDefine} 
      colorDefine={colorDefine} 
      onClick={handleClick} 
    >
      {text}
      <FaArrowRight className="icon" />
    </StyledButtonAcomodo>
  );
};

export default ButtonAcomoda;
