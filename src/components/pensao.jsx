import styled from "styled-components";
import CustomButton from "./button3";

const StyledSectionPensao = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;
    background-color: var(--color--white);

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
        padding: 10% 2.5%;
        margin-bottom: 50px;
    }
`;

const StyledPensaoImages = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`;

const StyledTable = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
    }

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 768px){
            width: 100%!important;

            text-align: center;
        }

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px 0 20px 0;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 0px 20px 0 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px 0 20px 0;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px 0 0 20px;
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

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        margin-top: -10px;
    }
`;

const StyledTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: 1.6rem;
    }

    & > b {
        font-weight: 100;
        color: ${({ colorDefinedBold }) => colorDefinedBold ? colorDefinedBold : 'var(--color--green)'};
    }
`;

const StyledParagraph = styled.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
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
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730920611/1_z2nkyx.png" alt="Imagem 1" />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730920609/2_sxwyp9.png" alt="Imagem 2" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730920606/5_utfvwq.png" alt="Imagem 3" />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730920607/3_cijslx.png" alt="Imagem 4" />
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
                    nossas deliciosas sobremesas.
                </StyledParagraph>
                <StyledButton
                    text="Reservar agora!"
                    textColor="var(--color--black)"
                    backgroundColor="transparent"
                    borderColor="var(--color--black)"
                    iconColor="var(--color--black)"
                    hoverBackgroundColor="var(--color--black)"
                    hoverBorderColor="var(--color--black)"
                    hoverColor="var(--color--black)"
                    hoverIconColor="var(--color--black)"
                    onClick={() => alert("Reservado!")}
                />
            </StyledPensaoTexts>
        </StyledSectionPensao>
    );
};

export default Pensao;
