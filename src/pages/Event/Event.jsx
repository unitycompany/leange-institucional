import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import SliderComponent from '../../components/sliderComponent';
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
        border: 1px solid red;
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
            border: 1px solid red;
            height: auto;
            position: relative;
        }

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 120%;
            font-family: var(--font--comfortaa);
            font-weight: 200;

            @media (max-width: 768px){
                font-size: 1.8rem;
                text-align: center;
                margin-top: 55vh;
            }

            & > b{
                font-weight: 400;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--avenir);
            font-size: 1.2rem;
            color: var(--color--black);
            width: 70%;
            line-height: 100%;

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
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 10% 2.5%;
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

    @media (max-width: 768px){
        border: 1px solid red;
        height: auto;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            border: 1px solid red;
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
            border: 1px solid red;
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
                    font-family: var(--font--avenir);
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
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219568/5_ixs7te.jpg', alt: 'Imagem 1' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219564/1_ocvsg5.jpg', alt: 'Imagem 1' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/8_bo21xo.jpg', alt: 'Imagem 1' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/3_mytnsf.jpg', alt: 'Imagem 1' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/6_ju1e1x.jpg', alt: 'Imagem 1' },
    { src: 'https://res.cloudinary.com/dupg7clzc/image/upload/v1730219563/2_ydykif.jpg', alt: 'Imagem 1' },

];

const CasamentoContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px){
        border: 3px solid red;
        height: auto;
        flex-direction: column;
        padding: 10% 5%;
    }

    & > div{
        width: 50%;
        height: 80%;

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 90%;
                z-index: -1;
            }
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (max-width: 768px){
                border: 1px solid red;
            }


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;

                @media (max-width: 768px){
                    height: 15vh;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(2){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        @media (max-width: 768px){
            border: 1px solid red;
            align-items: center;
            width: 100%;
            margin-top: -35px;
            height: auto;
            gap: 25px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);

            @media (max-width: 768px){
                border: 1px solid red;
                font-size: 1.6rem;
                color: var(--color--white);
            }
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;

            @media (max-width: 768px){
                border: 1px solid red;
                width: 100%;
                font-size: 1rem;
                margin-top: 25px;
                color: var(--color--black);
                text-align: center;
            }
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/leange/public/icon/correto.png');

            @media (max-width: 768px){
                border: 1px solid red;
                height: auto;
                margin-top: 0px;
                list-style-image: none;
                margin-left: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;

                @media (max-width: 768px){
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
            }
        }
        
    }
`

const NiverContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 768px){
        border: 3px solid red;
        height: auto;
        flex-direction: column-reverse;
        padding: 10% 5%;
    }

    & > div{
        width: 50%;
        height: 80%;

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 90%;
                z-index: -1;
            }
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;

                @media (max-width: 768px){
                    height: 15vh;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(1){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        @media (max-width: 768px){
            border: 1px solid red;
            align-items: center;
            width: 100%;
            margin-top: -35px;
            height: auto;
            gap: 25px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);

            @media (max-width: 768px){
                border: 1px solid red;
                font-size: 1.6rem;
                color: var(--color--white);
            }
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;

            @media (max-width: 768px){
                border: 1px solid red;
                width: 100%;
                font-size: 1rem;
                margin-top: 25px;
                color: var(--color--black);
                text-align: center;
            }
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/leange/public/icon/correto.png');

            @media (max-width: 768px){
                border: 1px solid red;
                height: auto;
                margin-top: 0px;
                list-style-image: none;
                margin-left: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;

                @media (max-width: 768px){
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
            }
        }
        
    }
`

const Eventos = () => {
    return (
        <>
            <Helmet>
                <title>Eventos - Pousada Le Ange</title>
            </Helmet>
            <Espace />

            <InicioContainer>

                <div>
                    <h1>Do alto da <b><a href='#'>Serra</a></b>,<br></br> às ondas do <b><a href='#'>Mar</a></b></h1>
                    <p>Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos.</p>
                    <Button 
                    text="Fazer meu evento"
                    />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730219093/home_df8ub0.jpg" alt='foto da home da página de eventos' />
                </div>

            </InicioContainer>

            <CarrosselContainer>
                <SliderComponent 
                        content={images1} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="100%"
                        height="100vh" 
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
                            text="Fazer reserva"
                            />
                        </div>
                    </div>
                </div>
            </SobreContainer>

            <CasamentoContainer>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/11_gzr6ei.jpg" alt='foto do casamento' />
                </div>
                <div>
                    <h1>Pré-Wedding</h1>
                    <p>Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis.</p>
                    <ol>
                        <li>Coquetel na Chegada (Sexta-feira)</li>
                        <li>Noite Especial no Sábado</li>
                        <li>Ensaio Fotográfico dos Noivos</li>
                        <li>Decoração Romântica na Suíte dos Noivos</li>
                        <li>Massagem Relaxante para os noivos na LeAnge Serra</li>
                        <li>Passeio de Bugre para os noivos na LeAnge Mar</li>
                        <li>Piquenique para os Noivos</li>
                        <li>Late Checkout no Domingo</li>
                    </ol>
                    <Button 
                    text="Fazer reserva"
                    />
                    <div>
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/7_sgewp5.jpg" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/10_deybdj.jpg" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730219562/9_eavaty.jpg" alt='foto do casamento' />
                    </div>
                </div>
            </CasamentoContainer>

            <NiverContainer>
                <div>
                    <h1>Aniversário</h1>
                    <p>Comemore os momentos doces da vida.</p>
                    <ol>
                        <li>Coquetel na Chegada (Sexta-feira)</li>
                        <li>Noite Especial no Sábado</li>
                        <li>Massagem Relaxante para o aniversariante na LeAnge Serra</li>
                        <li>Passeio de Bugre para o aniversariante na LeAnge Mar</li>
                        <li>Piquenique</li>
                        <li>Late Checkout no Domingo</li>
                    </ol>
                    <Button 
                    text="Fazer reserva"
                    />
                    <div>
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png" alt='foto do casamento' />
                        <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png" alt='foto do casamento' />
                    </div>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png" alt='foto do casamento' />
                </div>
            </NiverContainer>
            
            <CarrosselContainer>
                <SliderComponent 
                        content={images1} 
                        spaceBetween={20} 
                        slidesPerView={1} 
                        width="90%"
                        height="100vh" 
                        contentType="image"
                        showPagination={true}
                />
            </CarrosselContainer>

            <Footer />

        </>
    );
};

export default Eventos;
