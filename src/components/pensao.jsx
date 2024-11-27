import styled from "styled-components";
import CustomButton from "./button3";
import IconButton from "./button4";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    & > ol {
        margin-left: 20px;
        list-style-type: disc;
        line-height: 140%;
    }

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`;

const StyledButton = styled(CustomButton)`
    margin-top: auto; 
`;

const Pensao = ({ colorDefinedBold }) => {
    return (
        <StyledSectionPensao>
            <StyledPensaoImages>
                <StyledTable>
                    <div>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1732728791/churrasqueira_w7akaf_x5xysl.jpg" alt="Homem fazendo churrasco na le ange" loading="lazy" data-aos="fade-up" data-aos-delay="100"/>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/risoto-compressed_xqyhqx_pkztib.jpg" alt="Risoto no prato na le ange" loading="lazy" data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/hamburguer-compressed_dhh0dx_bdo8iz.webp" alt="Foto do hamburguer da le ange com batata frita e saladas" loading="lazy" data-aos="fade-down" data-aos-delay="100"/>
                        <img src="https://res.cloudinary.com/dabucfkmg/image/upload/v1732731824/buffetComprimido-compressed-_1__tjiacp_gv9frv.webp" alt="Risoto no prato na le ange" loading="lazy" data-aos="fade-down" data-aos-delay="200"/>
                    </div>
                </StyledTable>
            </StyledPensaoImages>
            <StyledPensaoTexts>
                <StyledTitle colorDefinedBold={colorDefinedBold} data-aos="fade-up" data-aos-delay="400">
                    Alimentação <b>Inclusa</b>
                </StyledTitle>
                <StyledParagraph data-aos="fade-down" data-aos-delay="500">
                    Na <b>Le Ange</b>, tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  <br /> <br />
                    Nossa estadia dispõe de um restaurante, onde são oferecidas todas as
                    refeições do dia:<br /><br />
                    <ol type="disc">
                        <li>Café da manhã;</li>
                        <li>Almoço;</li>
                        <li>Chá da tarde;</li>
                        <li>Jantar.</li><br />
                    </ol>
                    Incluindo as nossas deliciosas sobremesas.
                </StyledParagraph>
                <IconButton
                    data-aos="fade-up" data-aos-delay="200"
                    text = "Fazer reserva!"
                    text2 = "Clique e reserve"
                    borderColor = "var(--color--black)"
                    textColor = "var(--color--black)"
                    hoverColor = "var(--color--black)"
                    hoverTextColor = "var(--color--white)"
                />
            </StyledPensaoTexts>
        </StyledSectionPensao>
    );
};

export default Pensao;
