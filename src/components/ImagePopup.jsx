import React from "react";
import styled from "styled-components";

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    box-sizing: border-box;
    animation: ${({ show }) => show ? 'fadeIn 0.3s ease-out' : 'none'};

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const PopupContainer = styled.div`
    position: relative;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${({ show }) => show ? 'zoomIn 0.3s ease-out' : 'none'};

    @keyframes zoomIn {
        from {
            transform: scale(0.7);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const PopupImage = styled.img`
    max-width: 500px;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    opacity: 1;
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
        border-radius: 8px;
        max-width: 95%;
        max-height: 85vh;
    }

    @media (max-width: 480px) {
        max-width: 90%;
        max-height: 80vh;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 2px;
    right: 3px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 7.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    z-index: 10000;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
        font-size: 18px;
        top: 2px;
        right: 20px;
    }
`;

const ImagePopup = ({ show, onClose, imageUrl, imageAlt = "Popup Image" }) => {
    // Função para fechar o popup quando clicar fora da imagem
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Função para fechar com a tecla ESC
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && show) {
                onClose();
            }
        };

        if (show) {
            document.addEventListener("keydown", handleKeyDown);
            // Previne o scroll do body quando o popup está aberto
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [show, onClose]);

    if (!show || !imageUrl) return null;

    return (
        <PopupOverlay show={show} onClick={handleOverlayClick}>
            <PopupContainer show={show}>
                <PopupImage src={imageUrl} alt={imageAlt} />
                <CloseButton onClick={onClose} aria-label="Fechar popup">
                    ×
                </CloseButton>
            </PopupContainer>
        </PopupOverlay>
    );
};

export default ImagePopup;
