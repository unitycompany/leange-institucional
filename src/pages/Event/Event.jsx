import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '../../components/button';
import { BiSolidDrink, BiSolidStar, BiCamera, BiHeart, BiBus, BiBug, BiSpa, BiBasket } from 'react-icons/bi';
import { FaClock } from "react-icons/fa";
import SliderComponent3 from '../../components/sliderComponent3';
import Footer from '../../components/footer';

const Espace = styled.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`

const InicioContainer = styled.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
    }

    & > div:nth-child(1){
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        @media (max-width: 768px){
            width: 100%;
            gap: 30px;
            align-items: center;
            height: auto;
            position: relative;
        }

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 100%;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1.8rem;
                text-align: center;
                margin-top: 55vh;
            }

            & > b{
                font-weight: 100;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
                border: 1px solid;
                padding: 0 5px;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--comfortaa);
            font-size: 1rem;
            color: var(--color--black);
            width: 80%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1rem;
                text-align: center;
                width: 90%;
            }
        }
    }

    & > div:nth-child(2){
        width: 55%;
        height: 90%;

        @media (max-width: 768px){
            width: 100%;
            position: absolute;
            top: 0;
            height: 50vh;
            z-index: -1;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;

            @media (max-width: 768px){
                border-radius: 0 0 50px 50px;
                border-image: fill 0 linear-gradient(#0001, #ffffff);
            }
        }
    }
`

const CarrosselContainer = styled.section`
    width: 90%;
    margin-left: 5%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px){
        height: auto;
        padding: 7% 2.5%;
        margin-left: 0;
        width: 100%;
    }
`

const SobreContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){

        }

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;

            @media (max-width: 768px){
                font-size: 1.6rem;
            }
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        @media (max-width: 768px){

            flex-direction: column;
            height: auto;   
        }

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
                align-items: center;
                padding: 40px;
                gap: 20px;
                border-radius: 25px 0 25px 0!important;
                border-image: fill 0 linear-gradient(#0001, #ffffff80);
            }

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);

                @media (max-width: 768px){
                    font-size: 1.3rem;
                    text-align: center;
                    width: 100%;
    
                }
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                @media (max-width: 768px){
                    align-items: center;
    
                }

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--comfortaa);
                    line-height: 100%;

                    @media (max-width: 768px){
                        text-align: justify;
                        font-size: .9rem;
                    }
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg');
            background-size: cover;
            background-position: center;
        }
    }
`

const images1 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343406/espaco10_zbobfs_kgmqz5.jpg', alt: 'Cadeira customizada para casamento na le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343109/espaco6_dfprnt-compressed_zrduvr.jpg', alt: 'Foto do bolo de casamento na pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343120/espaco1_e9bneq-compressed_ch0xzx.jpg', alt: 'Foto de uma fogueira na pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343114/espaco4_wmcp95-compressed_yv3qly.jpg', alt: 'Espaço de comer na pousada le ange em casamentos', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343116/espaco3_awfzgo-compressed_evyhwv.jpg', alt: 'Champagne na pousada le ange', loading: "lazy" },
];

const images2 = [
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343404/espaco9_ldc1oy_uqmmwu.jpg', alt: 'Cadeiras para casamento na pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343403/espaco8_pzjgiz_gittbv.jpg', alt: 'Noivos se casando na pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343118/espaco2_twf5e1-compressed_itpmkk.jpg', alt: 'Comida do casamento na pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343112/espaco5_gzy5ng-compressed_gjqaig.jpg', alt: 'Imagem do bar no casamento da pousada le ange', loading: "lazy" },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343107/espaco7_nlscx5-compressed_horerr.jpg', alt: 'Casamento fotos pousada le ange', loading: "lazy" },
];

const CasamentoContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 70px 20px 40px 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        

            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px 0 20px 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(2){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px 30px 20px 0px;
        background-color: var(--color--white);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -20px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
                background-color: var(--color--white);
                margin-top: 12px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
            
            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }
        
    }
`

const StyledItemEvent = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-flex;
    padding: 4px 8px;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    gap: 10px;
    border-radius: 0 10px 0 10px;
    font-size: .75rem;
    transition: all .2s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    font-family: var(--font--comfortaa);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px){
        font-size: .8rem;
        padding: 7px 10px;
        gap: 10px;
    }

    &:hover{
        padding: 5px 9px;
        background-color: var(--color--black);
        color: var(--color--white);
        cursor: default;
    }
`

const NiverContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: var(--color--white);


    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px 80px 40px 60px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(1){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 30px 10px 40px 0px;
        width: 55%;
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -25px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
    
                background-color: var(--color--white);
                margin-top: 20px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1.1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 100%;
        
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;

            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }

        
    }
`

const Eventos = () => {
    return (
        <>
            <Helmet>
                <title>Eventos - Pousada Le Ange</title> 
                <link rel="icon" href="https://res.cloudinary.com/dupg7clzc/image/upload/v1731429565/5_qchldm.svg" />
            </Helmet>
            <Espace />

            <InicioContainer>

                <div>
                    <h1>Do alto da <b><a href='#/serra'>Serra</a></b>,<br></br> às ondas do <b><a href='#/mar'>Mar</a></b></h1>
                    <p>Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos.</p>
                    <Button 
                    onClick={() =>  window.open("https://wa.link/dojlwi", "_blank")}
                    text="Fazer meu evento"
                    />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342456/home_df8ub0_rqju2u.webp" alt='foto da home da página de eventos' />
                </div>

            </InicioContainer>

            <CarrosselContainer>
                <SliderComponent3 
                        content={images1} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="100%"
                        height="90vh" 
                        contentType="image"
                        showPagination={true}
                />
            </CarrosselContainer>

            <SobreContainer>
                <div>
                    <h1>Sobre nós</h1>
                </div>
                <div>
                    <div>
                        <span>Le Ange Serra - Miguel Pereira/RJ</span>
                        <div>
                            <p>Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica.
                            </p>
                            <Button 
                            onClick={() =>  window.open("https://wa.link/dojlwi", "_blank")}
                            text="Fazer reserva"
                            />
                        </div>
                    </div>
                    <div>
                        <span>Le Ange Serra - Miguel Pereira/RJ</span>
                        <div>
                            <p>Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica.
                            </p>
                            <Button 
                            onClick={() =>  window.open("https://wa.link/dojlwi", "_blank")}
                            text="Fazer reserva"
                            />
                        </div>
                    </div>
                </div>
            </SobreContainer>

            <CasamentoContainer>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342454/11_gzr6ei_ikd2hm.webp" alt='foto do casamento' />
                </div>
                <div>
                    <h1>Pré-Wedding</h1>
                    <p>Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis.</p>
                    <ol>
                    <StyledItemEvent>
                        <BiSolidDrink />
                            Coquetel na Chegada (Sexta-feira)
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiSolidStar />
                            Noite Especial no Sábado
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiCamera />
                            Ensaio Fotográfico dos Noivos
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiHeart />
                            Decoração Romântica na Suíte
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiBus />
                            Massagem Relaxante
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiBug />
                            Passeio de Bugre
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <BiBasket />
                            Piquenique para os Noivos
                        </StyledItemEvent>

                        <StyledItemEvent>
                            <FaClock />
                            Late Checkout no Domingo
                        </StyledItemEvent>

                    </ol>
                    <Button 
                    text="Fazer reserva"
                    />
                    <div>
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342448/7_sgewp5_rx9vfw.webp" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342452/10_deybdj_khogtb.webp" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342450/9_eavaty_zcw9bc.webp" alt='foto do casamento' />
                    </div>
                </div>
            </CasamentoContainer>

            <NiverContainer>
                <div>
                    <h1>Aniversário</h1>
                    <p>Comemore os momentos doces da vida.</p>
                    <ol>
                    <StyledItemEvent>
                        <BiSolidDrink />
                            Coquetel na Chegada (Sexta-feira)
                        </StyledItemEvent>
                        <StyledItemEvent>
                            <BiSolidStar />
                            Noite Especial no Sábado
                        </StyledItemEvent>
                        <StyledItemEvent>
                            <BiSpa />
                            Massagem Relaxante
                        </StyledItemEvent>
                        <StyledItemEvent>
                            <BiBus />
                            Passeio de Bugre
                        </StyledItemEvent>
                        <StyledItemEvent>
                            <BiBasket />
                            Piquenique
                        </StyledItemEvent>
                        <StyledItemEvent>
                            <FaClock />
                            Late Checkout no Domingo
                        </StyledItemEvent>

                    </ol>
                    <Button 
                    text="Fazer reserva"
                    />
                    <div>
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342464/niver5_vqhh94_pitqka.webp" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342462/niver3_katslf_fapku3.webp" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342460/niver2_rb3hvs_nofpdf.webp" alt='foto do casamento' />
                    </div>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342458/niver1_zyq8zi_gandzx.webp" alt='foto de aniversário' />
                </div>
            </NiverContainer>
            
            <CarrosselContainer>
                <SliderComponent3
                        content={images2} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="100%"
                        height="90vh" 
                        contentType="image"
                        showPagination={true}
                />
            </CarrosselContainer>

            <Footer />

        </>
    );
};

export default Eventos;
