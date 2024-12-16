import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import axios from "axios";

// Animações
const popupAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #00d757;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 24px;
  transition: transform .2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #fbfbfb;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${popupAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--comfortaa);
`;

const CloseButton = styled.button`
  position: absolute;
  transform: translateX(-50%);
  top: -15px;
  left: 50%;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #b10000;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color--white);
  transition: all .2s ease;

  &:hover {
    color: #000;
    font-size: 22px;
  }
`;

const MessagesContainer = styled.div`
  background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d8641711-b18b-4d15-33a0-110225c0cc00/public');
  border-radius: 20px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--comfortaa)!important;
`;

const MessageRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.sent ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--comfortaa)!important;
`;

const ProfilePicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${(props) => (props.sent ? "0" : "8px")};
  margin-left: ${(props) => (props.sent ? "8px" : "0")};
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.sent ? "#dcf8c6" : "#ffffff")};
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap; // Adicione esta linha
  font-family: var(--font--comfortaa)!important;
  font-size: 12px;
`;

const BotName = styled.div`
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: var(--font--comfortaa)!important;
`;

const TypingDots = styled.div`
  display: inline-block;
  font-size: 14px;
  font-style: italic;
  color: #b6b6b6;
  font-family: var(--font--comfortaa)!important;

  &::after {
    content: "";
    animation: typingDots 1s infinite;
  }

  @keyframes typingDots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--comfortaa)!important;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 12px;
  font-family: var(--font--comfortaa)!important;

  &::placeholder{
    font-size: 12px!important;
    font-weight: 200!important;
  }
`;

const SendButton = styled.button`
  padding: 8px 15px;
  background-color: #00d757;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: var(--font--comfortaa)!important;
  font-weight: 300;

  &:hover {
    background-color: #00b94a;
  }
`;

const WhatsAppButton = ({ footerRendered }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userPhone, setUserPhone] = useState(null);
  const [phoneRequested, setPhoneRequested] = useState(false);
  const [finalStage, setFinalStage] = useState(false); 

  const whatsappLink = "https://wa.link/dojlwi"; 
  const botProfilePic = "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c41f0fe-aedf-44cf-d36f-47c09d855d00/public";
  const webhookURL = "SEU_WEBHOOK_URL";

  useEffect(() => {
    if (footerRendered) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setMessages([{ id: 1, text: "Olá! Percebemos que você estava navegando pelo site. 🐶🐾\n\nComo podemos te ajudar? 🤗", sent: false }]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [footerRendered]);

  const handleSend = async () => {
    if (message.trim() === "") return;

    const userMessage = { id: Date.now(), text: message, sent: true };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage("");

    setIsTyping(true);

    if (!phoneRequested && userPhone === null) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), text: "Entendo, estamos aqui para te ajudar da melhor forma possível! 😁\n\nPara um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕", sent: false },
        ]);
        setPhoneRequested(true);
      }, 1500);
      return;
    }

    if (phoneRequested && userPhone === null) {
      const isNumber = /^\d+$/.test(currentMessage);
      const phoneToStore = isNumber ? currentMessage : "não informado";
      setUserPhone(phoneToStore);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: isNumber
            ? (
                <span>
                  Muito obrigado, aumigo🐕!<br /><br />Vamos entrar em contato com você em breve. 
                </span>
              )
            : "Você não informou um número válido.",
            sent: false,
          },
        ]);
        if (isNumber) {
          axios.post(webhookURL, { phone: phoneToStore });
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: (
                  <span>
                    Para facilitar, basta clicar neste link a seguir e conversar conosco pelo WhatsApp:{" "}<br /><br />
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Oiê, vamos conversar!
                    </a>
                  </span>
                ),
                sent: false,
              },
            ]);
            setTimeout(() => {
              setFinalStage(true);
            }, 500);
          }, 1500);
        } else {
          setTimeout(() => {
            setFinalStage(true);
          }, 500);
        }
        setPhoneRequested(false);
      }, 1500);
      return;
    }

    setIsTyping(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleCloseChat = () => {
    setShowPopup(false);
  };

  return (
    <ButtonContainer>
      <Button onClick={() => window.open(whatsappLink, "_blank")}>
        <FaWhatsapp />
      </Button>
      {showPopup && (
        <Popup>
          <CloseButton onClick={handleCloseChat}>
            <IoClose />
          </CloseButton>
          <MessagesContainer>
            {messages.map((msg) => (
              <MessageRow key={msg.id} sent={msg.sent}>
                {!msg.sent && <ProfilePicture src={botProfilePic} alt="Bot" />}
                <MessageBox sent={msg.sent}>
                  {!msg.sent && <BotName>Pousada Le Ange</BotName>}
                  <div>{msg.text}</div>
                </MessageBox>
              </MessageRow>
            ))}
            {isTyping && (
              <MessageRow>
                <TypingDots />
              </MessageRow>
            )}
          </MessagesContainer>
          {!finalStage && (
            <InputContainer>
              <Input
                type="text"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <SendButton onClick={handleSend}>Enviar</SendButton>
            </InputContainer>
          )}
        </Popup>
      )}
    </ButtonContainer>
  );
};

export default WhatsAppButton;
