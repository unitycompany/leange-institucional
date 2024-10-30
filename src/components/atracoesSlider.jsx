import styled from "styled-components";
import CustomButton from "./button3";
import ImageSwiper from "./imageSwiper";

const Images5 = [
    { src: '../../public/serra/1.JPG', text: 'Passeio de bugre' },
    { src: '../../public/serra/2.JPG', text: 'Atração Atração 1: Descrição da Atração 12: Descrição da Atração 2' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142544/atracao2_knquxz.jpg', text: 'Hot Tube' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730142186/pet10_yvsbk7.jpg', text: 'Piscina' },
    { src: '../../public/serra/5.JPG', text: 'Atração 5: Descrição da Atração 5' },
];


const StyledTextAtracoes = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    @media (max-width: 768px){
        border: 1px solid red;
        flex-direction: column;
        justify-content: center;
        gap: 15px;  
        height: 20vh;
        position: absolute;
        z-index: 4;
        margin-top: 300px;
    }

    & > h1 {
        font-size: 1.6rem;
        font-family: var(--font--comfortaa);
        border: 1px solid red;
        color: var(--color--white);
    }
`;

const StyledContainerCarousel = styled.div`
    width: 100%;
    height: 70vh;
    position: relative; // Para garantir que o texto fique sobre as imagens

    @media (max-width: 768px){
        border: 1px solid red;
        padding: 10% 0;
        margin-bottom: 10vh;
    }
`;

const Atracoes = () => {
    return (
        <>
            <StyledTextAtracoes>
                <h1>Nossas atrações</h1>
                <CustomButton
                    text="Reservar agora!"
                    textColor="var(--color--black)"
                    backgroundColor="transparent"
                    borderColor="var(--color--black)"
                    iconColor="var(--color--black)"
                    hoverBackgroundColor="var(--color--black)"
                    hoverBorderColor="var(--color--black)"
                    hoverColor="var(--color--white)"
                    hoverIconColor="var(--color--white)"
                    onClick={() => alert("Reservado!")}
                />
            </StyledTextAtracoes>
            <StyledContainerCarousel>
                <ImageSwiper images={Images5} />
            </StyledContainerCarousel>
        </>
    );
};

export default Atracoes;
