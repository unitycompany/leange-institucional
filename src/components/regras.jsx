import React from "react";
import styled from "styled-components";
import Button from "./button";

const RegrasAll = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;
    height: 80vh;
    gap: 50px;
    margin-top: -2.5%;

    & > div{
        width: 50%;
        height: 80%;
    }

    & > div:nth-child(1){
        border: 1px solid red;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        & > h1{
            border: 1px solid red;
            line-height: 110%;
            font-weight: 500;
            font-family: var(--font--comfortaa);
            color: var(--color--black);

            & > b{
                color: var(--color--green);
                font-weight: 500;
            }
        }

        & > ol{
            margin-left: 25px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            justify-content: center;
            list-style-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d2f0fa51-02b8-44c8-515f-fd49f86f0a00/public');

            & > li{
                padding-left: 5px;
                color: var(--color--black);
                font-size: 1rem;
                font-weight: 400;
            }
        }

    & > ol:nth-child(3){
        list-style-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d16f0eed-98cb-4620-69ab-934a38db5e00/public');
    }
    }

    & > div:nth-child(2){
        display: flex;
    }

    & > div:nth-child(2) div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        margin: 5px;

        & > img:nth-child(1){
            height: 40%;
            width: 100%;
            object-fit: cover;
            margin: 5px;
            border-radius: 0px 20px 0px 20px;
        }

        & > img:nth-child(2){
            height: 60%;
            width: 100%;
            object-fit: cover;
            margin: 5px;
            border-radius: 20px 0px 20px 0px;
        }
    }

    & > div:nth-child(2) div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;

        & > img:nth-child(1){
            height: 60%;
            width: 100%;
            object-fit: cover;
            margin: 5px;
            border-radius: 20px 0px 20px 0px;
        }

        & > img:nth-child(2){
            height: 40%;
            width: 100%;
            object-fit: cover;
            margin: 5px;
            border-radius: 0px 20px 0px 20px;
        }
    }
`

const Regras = () => {
    return (
        <>
            <RegrasAll>
                <div>
                    <h1>A nossa pousada foi feita para <b>você</b> e o <b>seu pet!</b></h1>
                    <ol>
                        <li>Apenas para pessoas acompanhadas de seus cães;</li>

                        <li>Humanos acima de 14 anos: para a segurança das crianças e dos cachorros. Alguns doguinhos não estão acostumados com crianças e podem machucá-las até mesmo brincando;</li>

                        <li>Pessoas que gostam de proporcionar liberdade aos seus cães, afinal eles ficam sempre soltos;</li>

                        <li>Humanos que AMAM cachorros (como alguém pode não gostar de cachorro?).</li>
                    </ol>
                    <ol>
                        <li>Vale ressaltar que fêmeas NÃO podem estar no cio! Como os cães ficam livres pela pousada, criamos essa regra para não gerar nenhum desconforto.</li>
                    </ol>
                    <Button
                    onClick="www.google.com"
                    text="Fazer reserva!"
                    backgroundColor="transparent"
                    borderColor="var (--color--green)"
                    hoverColor="red"
                    border="1px solid"
                    color="var(--color--black)"
                    />
                </div>
                <div>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public" alt="IMAGE" />
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public" alt="IMAGE" />
                    </div>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public" alt="IMAGE" />
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public" alt="IMAGE" />
                     </div>
                </div>
            </RegrasAll>
        </>
    )
}

export default Regras;