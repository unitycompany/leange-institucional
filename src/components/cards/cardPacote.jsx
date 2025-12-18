import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"

import { FaRegCheckCircle } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BOOKING_PROPERTIES } from "../../constants/bookingEngine";
import { openExternal } from "../../utils/openExternal";

const shine = keyframes`
  0% { left: -200px; }
  100% { left: 100%; }
`;

const CardContainer = styled.div`
    width: 400px!important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative!important;
    border-radius: 20px;
    gap: 10px;
    background-color: #fff9f9;
    border: 1px solid var(--color--black);

    @media (max-width: 768px) {
        width: 100%!important;
    }
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const zoom = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
`;

// Estilização do CardAlert
const CardAlert = styled.div`
  position: absolute;
  right: -30px;
  top: -30px;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color--green);
  border-radius: 50%;
  border: 2px solid var(--color--black);
  box-shadow: 0 0 15px #CAD76650;

  @media (max-width: 768px) {
        right: 50%;
        top: -30px;
        transform: translateX(50%);
    }
`;

// Ícone no meio do círculo
const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  fill: var(--color--black);
  animation: ${zoom} 2s ease linear infinite alternate-reverse;
  z-index: 2;

  & > svg {
    fill: var(--color--black);
  }
`;

// Estilização do SVG para criar o efeito circular do texto
const CircularText = styled.svg`
  position: absolute;
  font-family: var(--font--comfortaa);
  font-weight: 500;
  width: 78px;
  height: 78px;
  animation: ${spin} 8s linear infinite;
  color: var(--color--black);
`;

const CardLeft = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        border: 5px solid #fff;
    }
`

const CardRight = styled.div`
    width: 100%;
    height: 60%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    & > h1 {
        font-size: 24px;
        font-weight: 500;
        font-family: var(--font--comfortaa);
        color: var(--color--black);
    }

    & > p {
        font-size: 14px;
        font-weight: 300;
        color: var(--color--black);
        font-family: var(--font--comfortaa);
        margin-top: -20px;
    }
`

const CardTopics = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    & > div {
        background-color: #fff;
        font-size: 12px;
        padding: 7px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font--comfortaa);
        font-weight: 300;
        gap: 8px;
        border-radius: 5px;

        & > svg {
            font-size: 14px;
            fill: var(--color--black);
        }
    }
`

const CardSuites = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 0 5px;
    width: 100%;

    & > div {

        & > h2 {
            font-size: 16px;
            font-family: var(--font--comfortaa);
            color: #000;
            font-weight: 500;
        }

        & > p {
            margin-top: 2px;
            margin-bottom: 2px;
            font-size: 10px;
            font-weight: 100;
            font-family: var(--font--comfortaa);
        }

        & > span {
            font-size: 10px;
            font-weight: 300;
            font-family: var(--font--comfortaa);

            & > b {
                font-size: 16px;
                font-weight: 600;

                @media (max-width: 768px) {
                    font-size: 15px;
                }
            }
        }
    }
`

const CardButtons = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    & > button {
        cursor: pointer;

        &:nth-child(1){
            background-color: var(--color--green);
            border: none;
            color: var(--color--black);
            font-family: var(--font--comfortaa);
            font-weight: 600;
            border: 1px solid var(--color--black);
            border-radius: 40px;
            height: 40px;
            width: 85%;
            transition: all 0.2s ease;

            &:hover {
                transform: scale(0.95);
            }
        }

        &:nth-child(2){
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--color--black);
            border: 1px solid var(--color--black);
            background-color: #fff;
            position: relative;
            transition: all .2s ease;

            &:hover {
                transform: scale(0.95);
            }

            &:hover > span {
                transform: scale(1);
            }

            & >  span {
                transform: scale(0);
                position: absolute;
                top: -1rem;
                left: -6rem;
                background-color: #fff;
                padding: 5px 10px;
                border-radius: 10px 10px 0px 10px;
                border: 1px solid var(--color--black);
                font-family: var(--font--comfortaa);
                font-size: 12px;
                transition: all .2s ease;
                
            }

            & > svg {
                font-size: 18px;
            }
        }

    }
`

const CardPacote = ({ pacote }) => {
  const navigate = useNavigate();

  const DEFAULT_OMNIBEES_BASE_URL = "https://book.omnibees.com/hotelresults";

  const normalizeText = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const isFique4Pague3 = (currentPacote) => {
    const title = normalizeText(currentPacote?.title);
    return /fique\s*4.*pague\s*3/.test(title);
  };

  const addDays = (date, days) => {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  };

  const getNextMonday = (from = new Date()) => {
    const base = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const dayOfWeek = base.getDay(); // 0 (Dom) .. 6 (Sáb)
    const daysUntilMonday = (1 - dayOfWeek + 7) % 7;
    base.setDate(base.getDate() + daysUntilMonday);
    return base;
  };

  const formatForOmnibees = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${day}${month}${year}`;
  };

  const inferPropertyKey = (currentPacote) => {
    const corpus = normalizeText(`${currentPacote?.title || ""} ${currentPacote?.description || ""}`);
    if (corpus.includes(" mar ") || corpus.endsWith(" mar") || corpus.includes(" mar-") || corpus.includes("mar ")) return "mar";
    if (corpus.includes(" serra ") || corpus.endsWith(" serra") || corpus.includes("serra ")) return "serra";
    return "serra";
  };

  const parsePtBrDate = (ddmmyyyy) => {
    if (!ddmmyyyy) return null;
    const match = String(ddmmyyyy).match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return null;
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    if (!day || !month || !year) return null;
    return new Date(year, month - 1, day);
  };

  const getNightsFromText = (text) => {
    const normalized = normalizeText(text);
    const match = normalized.match(/(\d+)\s*diarias?/);
    if (!match) return null;
    const nights = Number(match[1]);
    return Number.isFinite(nights) && nights > 0 ? nights : null;
  };

  const getCheckInOutFromText = (text) => {
    const raw = String(text || "");
    const normalized = normalizeText(raw);

    // Regra do pacote: seg -> sex
    if (/fique\s*4.*pague\s*3/.test(normalizeText(pacote?.title))) {
      const checkIn = getNextMonday(new Date());
      return { checkIn, checkOut: addDays(checkIn, 4) };
    }

    // Datas explícitas dd/mm/yyyy
    const dateMatches = [...raw.matchAll(/\b(\d{2}\/\d{2}\/\d{4})\b/g)].map((m) => m[1]);
    if (dateMatches.length >= 2) {
      const checkIn = parsePtBrDate(dateMatches[0]);
      const checkOut = parsePtBrDate(dateMatches[1]);
      if (checkIn && checkOut) return { checkIn, checkOut };
    }
    if (dateMatches.length === 1) {
      const checkIn = parsePtBrDate(dateMatches[0]);
      const nights = getNightsFromText(raw);
      if (checkIn && nights) return { checkIn, checkOut: addDays(checkIn, nights) };
    }

    // Range por dia da semana (ex.: "de segunda-feira a sexta-feira")
    const weekdayMap = {
      domingo: 0,
      segunda: 1,
      terca: 2,
      quarta: 3,
      quinta: 4,
      sexta: 5,
      sabado: 6,
    };
    const weekdayRegex = /(domingo|segunda|terca|quarta|quinta|sexta|sabado)(?:-feira)?\s*(?:a|ate)\s*(domingo|segunda|terca|quarta|quinta|sexta|sabado)(?:-feira)?/;
    const weekdayMatch = normalized.match(weekdayRegex);
    if (weekdayMatch) {
      const startIndex = weekdayMap[weekdayMatch[1]];
      const endIndex = weekdayMap[weekdayMatch[2]];
      if (Number.isFinite(startIndex) && Number.isFinite(endIndex)) {
        const today = new Date();
        const base = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const todayDow = base.getDay();
        const daysUntilStart = (startIndex - todayDow + 7) % 7;
        const checkIn = addDays(base, daysUntilStart);
        let offset = (endIndex - startIndex + 7) % 7;
        if (offset === 0) offset = 7;
        return { checkIn, checkOut: addDays(checkIn, offset) };
      }
    }

    // Fallback: amanhã -> +2 noites
    const fallbackCheckIn = addDays(new Date(), 1);
    const fallbackCheckOut = addDays(new Date(), 3);
    return { checkIn: fallbackCheckIn, checkOut: fallbackCheckOut };
  };

  const openBookingEngineForPacote = () => {
    const propertyKey = inferPropertyKey(pacote);
    const property = BOOKING_PROPERTIES?.[propertyKey] || BOOKING_PROPERTIES?.serra;
    const q = property?.q;
    if (!q) return;

    const textForDates =
      pacote?.dateRange ||
      pacote?.dataRange ||
      pacote?.periodo ||
      pacote?.validade ||
      `${pacote?.title || ""} ${pacote?.description || ""}`;

    const { checkIn, checkOut } = getCheckInOutFromText(textForDates);

    const params = new URLSearchParams();
    params.set("q", q);
    params.set("NRooms", "1");
    params.set("ad", "2");
    params.set("CheckIn", formatForOmnibees(checkIn));
    params.set("CheckOut", formatForOmnibees(checkOut));

    const url = `${DEFAULT_OMNIBEES_BASE_URL}?${params.toString()}`;
    openExternal(url);
  };

  const openBookingEngineForFique4Pague3 = () => {
    const propertyKey = inferPropertyKey(pacote);
    const property = BOOKING_PROPERTIES?.[propertyKey] || BOOKING_PROPERTIES?.serra;
    const q = property?.q;
    if (!q) return;

    const checkIn = getNextMonday(new Date());
    const checkOut = addDays(checkIn, 4); // segunda -> sexta (4 noites)

    const params = new URLSearchParams();
    params.set("q", q);
    params.set("NRooms", "1");
    params.set("ad", "2");
    params.set("CheckIn", formatForOmnibees(checkIn));
    params.set("CheckOut", formatForOmnibees(checkOut));

    const url = `${DEFAULT_OMNIBEES_BASE_URL}?${params.toString()}`;
    openExternal(url);
  };

  // Função para criar slug a partir do título do pacote
  const createSlug = (title) => {
    if (!title) return 'pacote';
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  return (
    <CardContainer>
      {pacote.alert?.[0]?.active && (
        <CardAlert>
          <IconContainer>
            <IoStarSharp />
          </IconContainer>
          <CircularText viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="none"
            />
            <text fill="black" fontSize="14px" fontWeight="400">
              <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                Mais Reservado • Mais Reservado •
              </textPath>
            </text>
          </CircularText>
        </CardAlert>
      )}
      <CardLeft>
        <img src={pacote.imagem} alt="Imagem do pacote" />
      </CardLeft>
      <CardRight>
        <h1>{pacote.title}</h1>
        <p>{pacote.description}</p>

        <CardTopics>
          {pacote.topics?.map((topic, index) => (
            <div key={index}>
              <FaRegCheckCircle />
              <span>{topic}</span>
            </div>
          ))}
        </CardTopics>

        <CardSuites>
          {Array.isArray(pacote.suites) && pacote.suites.map((suite, index) => (
            <div key={index}>
              <h2>{suite.name}</h2>
              <p>a partir de</p>
              <span>
                {suite.parcel}x <b>R${typeof suite.price === 'number' ? suite.price.toFixed(2) : '0.00'}</b>
              </span>
            </div>
          ))}
        </CardSuites>

        <CardButtons>
          <button
            onClick={openBookingEngineForPacote}
          >Conhecer pacote</button>
          <button
            onClick={() => navigate('/acomodaSerra')}
          >
            <span>Acomodações</span>
            <IoBedOutline />
          </button>
        </CardButtons>
      </CardRight>
    </CardContainer>
  );
};

export default CardPacote;
