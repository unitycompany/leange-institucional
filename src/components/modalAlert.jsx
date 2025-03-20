import React, { useState } from "react";
import styled from "styled-components";

const ModalAll = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: var(--font--comfortaa);
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    max-width: 400px;
    gap: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 30px;
    }

    h1 {
        font-size: 28px;
        font-weight: 800;
        color: #d32f2f;
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
        color: #333;
    }

    button {
        background-color: #04808c;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: #026a73;
        }
    }

    .close-btn {
        background: none;
        border: none;
        color: #000000;
        cursor: pointer;
        font-size: 14px;
        border: 1px solid #000;

        &:hover {
            color: #fff;
        }
    }
`;

const ModalAlert = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <ModalAll show={showModal}>
            <ModalContent>
                <h1>Atenção!</h1>
                <p>Nosso WhatsApp está fora do ar. Para entrar em contato, clique no botão abaixo e fale conosco pelo Instagram.</p>
                <div>
                    <button onClick={() => window.location.href = "https://www.instagram.com/pousadaleange/"}>
                        Ir para o Instagram
                    </button>
                    <button className="close-btn" onClick={() => setShowModal(false)}>
                        Fechar
                    </button>
                </div>
                
            </ModalContent>
        </ModalAll>
    );
};

export default ModalAlert;
