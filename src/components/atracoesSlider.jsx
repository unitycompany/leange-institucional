import styled from "styled-components";
import CustomButton from "./button3";
import ImageSwiper from "./imageSwiper";

const Images5 = [
    { src: '../../public/serra/1.JPG', text: 'Passeio de bugre' },
    { src: '../../public/serra/2.JPG', text: 'Atração Atração 1: Descrição da Atração 12: Descrição da Atração 2' },
    { src: '../../public/serra/3.JPG', text: 'Atração 3: Descrição da Atração 3' },
    { src: '../../public/serra/4.JPG', text: 'Atração 4: Descrição da Atração 4' },
    { src: '../../public/serra/5.JPG', text: 'Atração 5: Descrição da Atração 5' },
];


const StyledTextAtracoes = styled.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
    }
`;

const StyledContainerCarousel = styled.div`
    width: 100%;
    height: 70vh;
    position: relative; // Para garantir que o texto fique sobre as imagens
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
