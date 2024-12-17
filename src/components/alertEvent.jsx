import React from "react";
import styled, {keyframes} from "styled-components";

const Animation = keyframes`
    0% {
        transform: scale(1);
        background-color: #00000000;
    }

    50% {
        transform: scale(1.02);
        background-color: #00000005;
    }
`

const AlertAll = styled.section`
    width: 100%;
    height: 10vh;
    margin-top: 5vh;
    margin-bottom: -5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        margin-bottom: 0;
        padding: 0 2.5%;
        height: auto;
    }

    & > div{
        width: 70%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2% 5%;
        border-radius: 0 25px 0 25px;
        background-color: #00000005;
        animation: ${Animation} 2.5s linear infinite alternate-reverse;

        @media (max-width: 768px){
            width: 100%;
            padding: 5% 2.5%;
        }

        & > h1{
            font-family: var(--font--comfortaa);
            font-weight: 200;
            font-size: 1rem;
            line-height: 140%;

            @media (max-width: 768px){
                font-size: .8rem;
                line-height: 160%;
            }

            & > b:nth-child(1){
                color: #e70000;
                font-weight: 600;
            }

            & > b:nth-child(2){
                color: var(--color--blue);
                font-weight: 200;
            }

            & > b:nth-child(3){
                color: var(--color--green);
                font-weight: 200;
            }

            & > a{
                color: var(--color--blue);
                font-weight: 200;
            }
        }
    }
`

const EventAlert = () => {
    return (
        <>
            <AlertAll>
                <div>
                    <h1><b>ATENÇÃO!!!</b> Neste mês de Janeiro ( 01/2025 ) haverá <b>Churrasco na beira da piscina</b> todos os <b>Sábados</b>. Não perca tempo, <a href="https://wa.link/dojlwi" target="_blank">reserve agora!</a></h1>
                </div>
            </AlertAll>
        </>
    )
}

export default EventAlert;