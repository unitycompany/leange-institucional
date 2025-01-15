import React from "react";
import styled from "styled-components";
import Button from "./button";

const RegrasAll = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5% 0;
    height: auto;
    gap: 30px;
    font-family: var(--font--comfortaa)!important;
    

    @media (max-width: 768px){
        padding: 10% 5%;
        flex-direction: column;
        height: auto;
    }

    & > div{
        width: 50%;
        height: 100%;
        

        @media (max-width:768px){
            width: 100%;
        }
    }

    & > div:nth-child(1){
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 35px;
        
        width: 45%;
        padding-left: 5%;

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            padding-left: 0;
        }

        & > h1{
            line-height: 110%;
            font-weight: 300;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-size: 1.8rem;
            width: 80%;

            @media (max-width: 768px){
                font-size: 1.5rem;
                text-align: center;
                width: 100%;
            }

            & > b{
                color: var(--color--green);
                font-weight: 400!important;
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
                font-weight: 300;

                @media (max-width: 768px){
                    font-size: .9rem;
                    font-weight: 300!important;
                }

                & > b{
                    font-weight: 400;
                    color: var(--color--black);
                }
            }
        }

    & > ol:nth-child(3){
        list-style-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d16f0eed-98cb-4620-69ab-934a38db5e00/public');
    }
    }

    & > div:nth-child(2){
        display: flex;
        height: 700px;
        width: 55%;
        padding-right: 5%;
        position: relative;

        @media (max-width: 768px){
            width: 110%;
            display: none;
        }
    }

    & > div:nth-child(2) div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        margin: 2.5px;

        & > img:nth-child(1){
            height: 50%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 0px 20px 60px 20px;
            
            }

        & > img:nth-child(2){
            height: 50%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 20px 60px 20px 0px;
                    }
    }

    & > div:nth-child(2) div:nth-child(2){
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 4;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    & > div:nth-child(2) div:nth-child(3){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;

        & > img:nth-child(1){
            height: 50%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 20px 0px 20px 60px;
                    }

        & > img:nth-child(2){
            height: 50%;
            width: 100%;
            object-fit: cover;
            margin: 2.5px;
            border-radius: 60px 20px 0px 20px;
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
                        {/* <li>Apenas para pessoas <b>acompanhadas de seus pets;</b></li> */}
                        <li>Para pessoas que vêem o <b>pet como parte da família.</b></li>

                        <li>Para pessoas que querem proporcionar aos seus pets a <b>liberdade</b> de estarem sempre soltos.</li>

                        <li>Para garantir uma experiência segura, <b>não aceitamos menores de 13 anos</b>, mesmo que acompanhado dos pais.</li>
                        
                    </ol>
                    <ol>
                        <li>Vale ressaltar que fêmeas <b>NÃO</b> podem estar no cio;</li>
                        <li>O chachorro precisa <b>ser socializado</b>, caso contrário será necessário mantê-lo na guia.</li>
                        <li>Não trabalhamos com <b>Day Use</b>.</li>
                    </ol>
                    <Button
                    onClick={() => window.open("https://tintim.link/whatsapp/85d10962-4e7e-4f65-9a44-898be828e6fd/76dadedc-00f5-4a34-a4b0-c2052c540329", "_blank")}
                    text="Reservar agora"
                    backgroundColor="var(--color--green)"
                    borderColor="var(--color--white)"
                    hoverColor="var(--color--white)"
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
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a69bf6f-02ea-413a-b67c-62100c6e7e00/public" alt="icon da le ange" />
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