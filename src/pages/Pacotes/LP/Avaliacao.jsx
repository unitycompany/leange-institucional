import react from "react";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

const Carrossel = styled.div`
    width: 100%;
    height: auto;
    padding: 0 5% 2.5% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font--avenir);

    & article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1.5%;
        background-color: #F1F1F1;
        border-radius: 25px;

        & > div {
            height: 250px;
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 20px;
            background-color: #fff;
            border-radius: 20px;

            & img {
                width: 250px;
            }

            & span {
                font-size: 48px;
            }

            & h2 {
                font-size: 26px;
                margin-top: -15px;
                font-weight: 300;
            }

            & div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                & ol {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    list-style: none;
                    gap: 2px;

                    & li {
                        font-size: 18px;
                        color: #FFD700;
                    }
                }
            }
        }

        & aside {
            height: 250px;
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 20px;
            background-color: #fff;
            border-radius: 20px;

            & img {
                width: 50px;
            }

            & h1 {
                font-size: 26px;
                font-weight: 400;
            }

            & ol {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                list-style: none;
                position: relative;
                margin: 20px 0;

                & li {
                    border: 2px solid #fff;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    position: absolute;

                    &:nth-child(1){
                        left: -70px;
                    }

                    &:nth-child(2){
                        left: -50px;
                    }

                    &:nth-child(4){
                        right: -50px;
                    }

                    &:nth-child(5){
                        right: -70px;
                    }

                    & img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }
            }

            & p {
                font-size: 20px;
            }
        }

    }

    
`

export default function Avaliacao() {
    return (
        <>
            <Carrossel>
                <article>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4a16964e-5b0e-4e5d-0bad-067e0ed35600/public" alt="" loading="lazy" />
                        <span>4.9</span>
                        <h2>Excelente</h2>
                        <div>
                            <ol>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                            </ol>
                            <p>+250 avaliações</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/054f55a4-98ce-421a-2650-f4fafe8baf00/public" alt="" loading="lazy" />
                        <span>4.7</span>
                        <h2>Excelente</h2>
                        <div>
                            <ol>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                                <li><IoStarSharp /></li>
                            </ol>
                            <p>+200 avaliações</p>
                        </div>
                    </div>
                    <aside>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bdd9cf1b-45c5-4a8a-c1ea-1f399c3be400/public" alt="" loading="lazy" />
                        <h1>@pousadaleange</h1>
                        <ol>
                            <li><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0eef8ae-23bf-41e2-744f-ea02d5462600/public" alt="" /></li>
                            <li><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26029a40-ff70-4b23-34f0-34bfbb218b00/public" alt="" /></li>
                            <li><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eef78441-3a64-44b7-6348-0ebde78cc700/public" alt="" /></li>
                            <li><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/822f1ba3-75fd-412e-f73f-1379a108a800/public" alt="" /></li>
                            <li><img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c0a75e-ef0f-422d-6819-3b3cb8e12b00/public" alt="" /></li>
                        </ol>
                        <p>+400k</p>
                    </aside>
                </article>
            </Carrossel>
        </>
    )
}