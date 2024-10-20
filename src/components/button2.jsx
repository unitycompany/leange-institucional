import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa"; // Importando o ícone de seta

const StyledButtonAcomodo = styled.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; /* Ajusta a distância entre o texto e o ícone */
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({backDefine}) => backDefine || 'var(--color--white)'};
  border-radius: 10px;
  color: ${({colorDefine}) => colorDefine || 'var(--color--black)'};
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
    margin-left: 8px; /* Ajusta a margem à esquerda do ícone para maior separação */
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); /* Animação da seta movendo para a direita no hover */
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`;

const ButtonAcomoda = ({text, backDefine, colorDefine}) => {
  return (
    <StyledButtonAcomodo backDefine={backDefine} colorDefine={colorDefine}>
      {text}
      <FaArrowRight className="icon" />
    </StyledButtonAcomodo>
  );
};

export default ButtonAcomoda;
