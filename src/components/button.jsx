import styled from 'styled-components';

const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: ${({ color }) => color || 'var(--color--black)'};
    background-color: ${({ background }) => background || 'inherit'};
    border: 2px solid ${({ borderColor }) => borderColor || 'transparent'};
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: ${({ hoverColor }) => hoverColor || 'var(--color--black)'};
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }

    /* @media (max-width: 640px) {
        color: var(--color--white); // Cor do texto em tela menor
        background-color: var(--color--black); // Cor de fundo em tela menor
        border: 4px solid var(--color--white); // Borda em tela menor
    } */
`;

const ArrowIcon = styled.svg`
    position: absolute;
    width: 24px;
    fill: var(--color--black);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &.arr-1 {
        right: 16px;
    }

    &.arr-2 {
        left: -25%;
    }

    ${StyledButton}:hover &.arr-1 {
        right: -25%;
    }

    ${StyledButton}:hover &.arr-2 {
        left: 16px;
    }

    ${StyledButton}:hover & {
        fill: var(--color--white);
    }
`;

const Circle = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color--black);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${StyledButton}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`;

const ButtonText = styled.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${StyledButton}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`;

const Button = ({ text, onClick, color, backgroundColor, borderColor, hoverColor }) => (
    <StyledButton
        onClick={onClick}
        color={color}
        background={backgroundColor} // Use backgroundColor aqui
        borderColor={borderColor}
        hoverColor={hoverColor}
    >
        <ArrowIcon className="arr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </ArrowIcon>
        <ButtonText>{text}</ButtonText>
        <Circle />
        <ArrowIcon className="arr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </ArrowIcon>
    </StyledButton>
);

export default Button;
