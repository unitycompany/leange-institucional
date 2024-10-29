import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import CustomButton from '../../components/button3';

const SobreContainer = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 10%;

        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
            }
        }

        & > h4 {
            font-family: var(--font--avenir);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -30px;
            font-size: 1.2rem;

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`

const Espaco = styled.div`
    height: 15vh;
`

const UnidadeContainer = styled.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width: 768px){
            max-width: 100%;
            height: 30vh;
            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 10px;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px){
            width: 100%;

            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--avenir);
            font-weight: 100;
            margin-top: -30px;
            font-size: 1.2rem;

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`

const DiferenciaisContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 10% 5%;
        border-top: 2px dashed;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 768px){
            width: 100%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

            @media (max-width: 768px){
    
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 100%;

            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 30px 0 30px 0; 
        height: 48%;
        object-fit: cover;

        @media (max-width: 768px){
            width: 48%;
            height: 20vh;
        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 30px 0 30px;
       }

    }
`

const ContainerDuplo = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 10% 5%;
        border-top: 2px dashed;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;
        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
                
                @media (max-width: 768px){
        
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;

            @media (max-width: 768px){
                width: 100%;
                height: 35vh;
                margin-top: 25px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;

        @media (max-width: 768px){
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;

            @media (max-width: 768px){
                width: 100%;
                margin-top: 40px;
                height: 35vh;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 768px){
    
                width: 100%;
            }

            & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
                
                @media (max-width: 768px){
        
                    margin-top: 50px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`

const PublicoContainer = styled.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10%;

        @media (max-width: 768px){

            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);

                @media (max-width: 768px){
        
                    margin-top: 50px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

                @media (max-width: 768px){
        
                    margin-top: 25px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 80px 0 80px 0;
        }
    }
`

const Compromisso = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121054/1_fhinom.png');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
        }

        & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--white);

            @media (max-width: 768px){
                font-size: 24px;
                width: 100%;
                text-align: center;
            }
        }

        & > h1 b{
            color: var(--color--green);
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);
            color: var(--color--white);
            text-align: justify;

            @media (max-width: 768px){
                font-size: 14px;
                text-align: justify;
            }
        }
    }
`

const CTA = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--white);
        width: 35%;
        text-align: center;
        line-height: 100%;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`

const Sobre = () => {
    return (
        <>
            <Helmet>
                <title>Sobre Nós - Pousada Le Ange</title>
            </Helmet>
            <Espaco></Espaco>

            <SobreContainer>
                <div>
                    <h1>Pousada Le Ange</h1>
                    <h4>A pousada mais Pet Friendly do Brasil</h4>
                    <p>Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação.</p>
                </div>
                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729516968/cachorro_rlsw5a.png" 
                    alt='foto do cachorro'
                    loading='lazy'
                    />
                </div>
            </SobreContainer>

            <UnidadeContainer>

                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729529831/7_w7mvfk.jpg" 
                    alt='foto da le ande da serra' 
                    loading='lazy'
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729529820/7_s8lgut.jpg" 
                    alt='foto da le ande da serra'
                    loading='lazy' 
                    />
                </div>


                <div>
                    <h1>Duas unidades,</h1>
                    <h4>dois cenários incomparáveis</h4>
                    <p>A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar.</p>
                </div>

            </UnidadeContainer>

            <DiferenciaisContainer>

                <div>
                    <h1>Diferenciais</h1>
                    <p>Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência.</p>
                </div>

                <div>
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530455/6_ezddyi.jpg" 
                    loading='lazy'
                    alt='foto do diferencial' 
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530449/8_n7asdv.jpg" 
                    loading='lazy'
                    alt='foto do diferencial' 
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530446/5_lx3fxd.jpg"
                    loading='lazy' 
                    alt='foto do diferencial'
                    />
                    <img 
                    src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530444/1_nhk8wd.jpg" 
                    loading='lazy'
                    alt='foto do diferencial' 
                    />
                </div>

            </DiferenciaisContainer>

            <ContainerDuplo>
                
                <div>
                    <div>
                        <h1>Gastronomias</h1>
                        <p>Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais.</p>
                    </div>
                    <div>
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530841/pizza_apuref.jpg" 
                        loading='lazy'
                        alt='foto de gastronomia' 
                        />
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729530957/sushi_g7sbq9.jpg" 
                        loading='lazy'
                        alt='foto de gastronomia' 
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729531441/espaco_bvmt8g.jpg"
                        loading='lazy'
                        alt='foto de gastronomia' 
                         />
                        <img 
                        src="https://res.cloudinary.com/dupg7clzc/image/upload/v1729531444/espaco2_i3ieau.png" 
                        loading='lazy'
                        alt='foto de gastronomia' 
                        />
                    </div>
                    <div>
                        <h1>Espaços compartilhados</h1>
                        <p>Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório.</p>
                    </div>
                </div>

            </ContainerDuplo>

            <PublicoContainer>

                <div>
                    <div>
                        <h1>Suítes</h1>
                        <p>Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável.</p>
                    </div>
                    <div>
                        <h1>Público de alto padrão</h1>
                        <p>Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos.</p>
                    </div>
                </div>
                
                <div>
                    <img src="https://res.cloudinary.com/dupg7clzc/image/upload/v1730130112/fotoMar3_ywfvig.jpg" alt='foto da pousada'/>
                </div>

            </PublicoContainer>

            <Compromisso>

                <div>
                    <h1>Compromisso com o <b>Meio Ambiente</b></h1>
                    <p>Estamos, profundamente, comprometidos com a sustentabilidade. Utilizamos produtos de produtores rurais locais, promovendo a economia regional e minimizando nosso impacto ambiental. Implementamos práticas ecológicas em todas as nossas operações, desde o uso de energia solar até a gestão eficiente de recursos.</p>
                </div>

            </Compromisso>

            <CTA>
                <h1>Venha viver essa experiência com a gente!</h1>
                <CustomButton 
                text="Reservar agora!"
                textColor="var(--color--white)"
                backgroundColor="transparent"
                borderColor="var(--color--white)"
                iconColor="var(--color--white)"
                hoverBackgroundColor="var(--color--white)"
                hoverBorderColor="var(--color--white)"
                hoverColor="var(--color--white)"
                hoverIconColor="var(--color--white)"
                onClick={() => alert("Reservado!")}
                />
            </CTA>

        </>
    );
};

export default Sobre;
