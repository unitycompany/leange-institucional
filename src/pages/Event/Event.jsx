import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import SliderComponent from '../../components/sliderComponent';
import Footer from '../../components/footer';

import FotoHome from '../../../public/mar/3.jpg';

const Espace = styled.div`
    height: 15vh;
`

const InicioContainer = styled.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 120%;
            font-family: var(--font--comfortaa);
            font-weight: 200;

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
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 90%;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;
        }
    }
`

const CarrosselContainer = styled.section`
    width: 100%;
    height: 100vh;
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

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--avenir);
                    line-height: 100%;
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('/public/mar/7.JPG');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('/public/mar/7.JPG');
            background-size: cover;
            background-position: center;
        }
    }
`

const images1 = [
    { src: '../../../public/serra/9.jpeg', alt: 'Imagem 1' },
    { src: '../../../public/serra/1.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/2.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/3.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/4.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/5.jpg', alt: 'Imagem 1' },
    { src: '../../../public/serra/6.jpeg', alt: 'Imagem 1' },
    { src: '../../../public/serra/7.JPG', alt: 'Imagem 1' },
    { src: '../../../public/serra/8.JPG', alt: 'Imagem 1' },

];

const CasamentoContainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
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
            }
        }
    }

    & > div:nth-child(2){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
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

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
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
            }
        }
    }

    & > div:nth-child(1){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
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
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730202199/home_cmvjd9.png" alt='foto da home da página de eventos' />
                </div>

            </InicioContainer>

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
                    <img src={FotoHome} alt='foto do casamento' />
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
                        <img src={FotoHome} alt='foto do casamento' />
                        <img src={FotoHome} alt='foto do casamento' />
                        <img src={FotoHome} alt='foto do casamento' />
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
                        <img src={FotoHome} alt='foto do casamento' />
                        <img src={FotoHome} alt='foto do casamento' />
                        <img src={FotoHome} alt='foto do casamento' />
                    </div>
                </div>
                <div>
                    <img src={FotoHome} alt='foto do casamento' />
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
