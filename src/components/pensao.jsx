import styled from "styled-components";
import CustomButton from "./button3";
import IconButton from "./button4";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MealTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-family: var(--font--comfortaa);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #00000020;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const TableHeader = styled.thead`
    background: #f9fafb;
    border-bottom: 1px solid #00000020;
`;

const TableHeaderCell = styled.th`
    padding: 16px 24px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    color: #00000080;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
        padding: 12px 16px;
        font-size: 12px;
    }
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background: #f9fafb;
    }
    
    &:nth-child(odd) {
        background: #ffffff;
    }

    &:hover {
        background: #f3f4f6;
    }
`;

const TableCell = styled.td`
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
    color: #529605;
    font-weight: 400;
    font-size: 15px;

    &:first-child {
        font-weight: 500;
        color: #111827;
    }

    @media (max-width: 768px) {
        padding: 12px 16px;
        font-size: 14px;
    }
`;

const StyledSectionPensao = styled.section`
    width: 100%;
    height: auto;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5% 5% 2.5% 5%;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
        padding: 10% 2.5%;
        margin-bottom: 50px;
    }
`;

const StyledPensaoImages = styled.div`
    width: 50%;
    height: 700px;
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
    gap: 5px;
    

    @media (max-width: 768px){
    }

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;

        @media (max-width: 768px){
            width: 100%!important;
            text-align: center;
        }

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
    height: 80%;
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
    }
`;

const StyledParagraph = styled.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 90%;
    font-family: var(--font--comfortaa);
    font-weight: 100;
    text-align: left!important;

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

const Pensao = ({ colorDefinedBold, image1, image2, image3, image4 }) => {
    return (
        <StyledSectionPensao>
            <StyledPensaoImages>
                <StyledTable>
                    <div>
                        <img src={image1} alt="Homem fazendo churrasco na le ange" loading="lazy" data-aos="fade-up" data-aos-delay="100"/>
                        <img src={image2} alt="Risoto no prato na le ange" loading="lazy" data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                    <div>
                        <img src={image3} alt="Foto do hamburguer da le ange com batata frita e saladas" loading="lazy" data-aos="fade-down" data-aos-delay="100"/>
                        <img src={image4} alt="Risoto no prato na le ange" loading="lazy" data-aos="fade-down" data-aos-delay="200"/>
                    </div>
                </StyledTable>
            </StyledPensaoImages>
            <StyledPensaoTexts>
                <StyledTitle colorDefinedBold={colorDefinedBold} data-aos="fade-up" data-aos-delay="400">
                    All <b>Inclusive</b>
                </StyledTitle>
                <StyledParagraph data-aos="fade-down" data-aos-delay="500">
                    Agora, além de ser referência em hospedagem pet friendly tanto no mar quanto na serra, a LeAnge acaba de anunciar o seu novo formato All Inclusive — e a experiência que já era incrível, ficou simplesmente inesquecível.<br />
                    
                    <MealTable data-aos="fade-up" data-aos-delay="600">
                        <TableHeader>
                            <tr>
                                <TableHeaderCell>Refeição</TableHeaderCell>
                                <TableHeaderCell>Condição</TableHeaderCell>
                            </tr>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <TableCell>Café da manhã</TableCell>
                                <TableCell>Incluído</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Almoço</TableCell>
                                <TableCell>Incluído</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Chá da tarde</TableCell>
                                <TableCell>Incluído</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Jantar</TableCell>
                                <TableCell>Incluído</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bebidas</TableCell>
                                <TableCell>Incluído</TableCell>
                            </TableRow>
                        </tbody>
                    </MealTable>
                    
                    Incluindo as nossas deliciosas sobremesas.
                </StyledParagraph>
                <IconButton
                    idBtn="clickwpp"
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
