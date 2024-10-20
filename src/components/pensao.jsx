import styled from "styled-components";
import CustomButton from "./button3";

const StyledSectionPensao = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    gap: 50px;
`;

const StyledPensaoImages = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const StyledTable = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px;
    }
`;

const StyledPensaoTexts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
`;

const StyledTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    & > b {
        color: ${({ colorDefinedBold }) => colorDefinedBold ? colorDefinedBold : 'var(--color--green)'};
    }
`;

const StyledParagraph = styled.p`
    color: var(--color--black);
    font-size: 1.2rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--avenir);
`;

const StyledButton = styled(CustomButton)`
    margin-top: auto; // Alinha o botão para o fundo
`;

const Pensao = ({ colorDefinedBold }) => {
    return (
        <StyledSectionPensao>
            <StyledPensaoImages>
                <StyledTable>
                    <div>
                        <img src="/public/serra/1.JPG" alt="Imagem 1" />
                        <img src="/public/serra/1.JPG" alt="Imagem 2" />
                    </div>
                    <div>
                        <img src="/public/serra/1.JPG" alt="Imagem 3" />
                        <img src="/public/serra/1.JPG" alt="Imagem 4" />
                    </div>
                </StyledTable>
            </StyledPensaoImages>
            <StyledPensaoTexts>
                <StyledTitle colorDefinedBold={colorDefinedBold}>
                    Pensão <b>Completa</b>
                </StyledTitle>
                <StyledParagraph>
                    Sabe aquela comida com sabor, tempero e afeto que te abraça?
                    <br />
                    <br />
                    Essa é a gastronomia registrada da LeAnge!
                    <br />
                    <br />
                    Nossa estadia dispõe de um restaurante, onde são oferecidas todas as
                    refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo
                    nossas deliciosas sobremesas. Adaptamos nosso cardápio para atender a diferentes
                    estilos alimentares, incluindo opções tradicionais, veganas, vegetarianas,
                    diabéticos, low carb e outras preferências individuais.
                </StyledParagraph>
                <StyledButton
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
            </StyledPensaoTexts>
        </StyledSectionPensao>
    );
};

export default Pensao;
