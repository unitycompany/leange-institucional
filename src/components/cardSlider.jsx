import React, { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { keyframes } from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import IconButton from './button4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BOOKING_PROPERTIES } from '../constants/bookingEngine';

// Importação dos ícones necessários
import { FaUtensils, FaRegCreditCard, FaPaw, FaCheck } from 'react-icons/fa';

// Mapeamento de strings para componentes de ícones
const iconMap = {
  '<FaUtensils />': <FaUtensils />,
  '<FaRegCreditCard />': <FaRegCreditCard />,
  '<FaPaw />': <FaPaw />,
  '<FaCheck />': <FaCheck />,
};

const waterWave2 = keyframes`
  0% {
    border-radius: 15px 20px 20px 15px;
  }
  100% {
    border-radius: 20px 15px 15px 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 4px;
  background: #00000005;
  border: 1px dashed #00000020;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  animation: ${waterWave2} 5s ease-in-out infinite;
  

  @media (max-width: 768px) {
    padding: 4px;
    border-radius: 15px;
    animation: none;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 40vh!important;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #f0f0f0; /* Placeholder background */
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    border: 2px solid var(--color--black);
    height: 320px;
  }

  /* Loading state */
  &.loading {
    opacity: 0.3;
    background-image: linear-gradient(
      90deg,
      #f0f0f0 0%,
      #e0e0e0 50%,
      #f0f0f0 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #333;
`;

const Title = styled.h3`
  font-size: 22px;
  color: #000;
  line-height: 100%;
  font-weight: 500;
  font-family: var(--font--comfortaa);
  margin: 0;

  &:hover {
    animation-duration: 1.5s;
  }
`;

const DateRange = styled.p`
  font-size: 14px;
  color: #777;
  font-family: var(--font--comfortaa);
  font-weight: 100;
  margin: 0;
`;

const Features = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--color--black);

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #00000008;
    font-family: var(--font--comfortaa);
    padding: 5px 8px;
    border-radius: 8px;
    font-size: 9px;
  }
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
`;

const Price = styled.p`
  font-size: 18px;
  font-family: var(--font--comfortaa);
  font-weight: 500;
  margin: 0;
  color: #333;

  & > span {
    font-size: 10px;
  }
`;

const DEFAULT_OMNIBEES_BASE_URL = 'https://book.omnibees.com/hotelresults';

const normalizeText = (value) =>
  String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const isFique4Pague3Title = (title) => /fique\s*4.*pague\s*3/.test(normalizeText(title));

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
  if (!date) return '';
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${day}${month}${year}`;
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

const getNightsFromDateRange = (dateRange) => {
  const text = normalizeText(dateRange);
  const match = text.match(/(\d+)\s*diarias?/);
  if (!match) return null;
  const nights = Number(match[1]);
  return Number.isFinite(nights) && nights > 0 ? nights : null;
};

const getCheckInOutFromDateRange = (dateRange) => {
  const raw = String(dateRange || '');
  const normalized = normalizeText(raw);

  // 1) Explicit dates in dd/mm/yyyy
  const dateMatches = [...raw.matchAll(/\b(\d{2}\/\d{2}\/\d{4})\b/g)].map((m) => m[1]);
  if (dateMatches.length >= 2) {
    const checkIn = parsePtBrDate(dateMatches[0]);
    const checkOut = parsePtBrDate(dateMatches[1]);
    if (checkIn && checkOut) return { checkIn, checkOut };
  }
  if (dateMatches.length === 1) {
    const checkIn = parsePtBrDate(dateMatches[0]);
    const nights = getNightsFromDateRange(raw);
    if (checkIn && nights) return { checkIn, checkOut: addDays(checkIn, nights) };
  }

  // 2) Range like "de segunda-feira a sexta-feira"
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
      const daysUntilStart = (startIndex - todayDow + 7) % 7; // inclui hoje
      const checkIn = addDays(base, daysUntilStart);
      let offset = (endIndex - startIndex + 7) % 7;
      if (offset === 0) offset = 7;
      const checkOut = addDays(checkIn, offset);
      return { checkIn, checkOut };
    }
  }

  // 3) Fallback: tomorrow + 2 nights
  const fallbackCheckIn = addDays(new Date(), 1);
  const fallbackCheckOut = addDays(new Date(), 3);
  return { checkIn: fallbackCheckIn, checkOut: fallbackCheckOut };
};

const inferPropertyKey = (event) => {
  const corpus = normalizeText(`${event?.title || ''} ${event?.dateRange || ''}`);
  if (corpus.includes(' mar ') || corpus.endsWith(' mar') || corpus.includes('mar ')) return 'mar';
  if (corpus.includes(' serra ') || corpus.endsWith(' serra') || corpus.includes('serra ')) return 'serra';
  return 'serra';
};

const openBookingEngineMondayToFriday = ({ propertyKey = 'serra', adults = 2 } = {}) => {
  const property = BOOKING_PROPERTIES?.[propertyKey] || BOOKING_PROPERTIES?.serra;
  const q = property?.q;
  if (!q) return;

  const { checkIn, checkOut } = getCheckInOutFromDateRange('segunda a sexta');

  const params = new URLSearchParams();
  params.set('q', q);
  params.set('NRooms', '1');
  params.set('ad', String(adults));
  params.set('CheckIn', formatForOmnibees(checkIn));
  params.set('CheckOut', formatForOmnibees(checkOut));

  const url = `${DEFAULT_OMNIBEES_BASE_URL}?${params.toString()}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const openBookingEngineForEvent = (event, { adults = 2 } = {}) => {
  const propertyKey = event?.propertyKey || inferPropertyKey(event);
  const property = BOOKING_PROPERTIES?.[propertyKey] || BOOKING_PROPERTIES?.serra;
  const q = property?.q;
  if (!q) return;

  const { checkIn, checkOut } = getCheckInOutFromDateRange(event?.dateRange);

  const params = new URLSearchParams();
  params.set('q', q);
  params.set('NRooms', '1');
  params.set('ad', String(adults));
  params.set('CheckIn', formatForOmnibees(checkIn));
  params.set('CheckOut', formatForOmnibees(checkOut));

  const url = `${DEFAULT_OMNIBEES_BASE_URL}?${params.toString()}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const EventCardCarousel = ({ events = [] }) => {
  const [loadedImages, setLoadedImages] = useState(new Set([0, 1, 2])); // Carrega as 3 primeiras por padrão
  const swiperRef = useRef(null);

  const handleSlideChange = useCallback((swiper) => {
    const currentIndex = swiper.realIndex;
    const nextIndex = (currentIndex + 1) % events.length;
    const prevIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;

    // Carrega a imagem atual e as adjacentes silenciosamente
    setLoadedImages(prev => new Set([...prev, currentIndex, nextIndex, prevIndex]));
  }, [events.length]);

  // Preload das imagens de forma assíncrona
  const preloadImage = useCallback((src, index) => {
    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, index]));
    };
    img.src = src;
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      spaceBetween={20}
      navigation
      pagination={false}
      loop={true}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        // Preload das primeiras imagens de forma assíncrona
        setTimeout(() => {
          events.forEach((event, index) => {
            if (index < 3) { // Carrega as 3 primeiras imediatamente
              preloadImage(event.image, index);
            }
          });
        }, 100);
      }}
      breakpoints={{
        1024: { slidesPerView: 3, spaceBetween: 20 }, // Exibe 3 cards em telas maiores
        768: { slidesPerView: 2, spaceBetween: 15 }, // Exibe 2 cards em tablets
        0: { slidesPerView: 1, spaceBetween: 0 }, // Exibe 1 card no mobile
      }}
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <CardContainer data-aos="fade-up" data-aos-delay="0">
            <CardImage
              src={event.image}
              alt={event.title}
              className={loadedImages.has(index) ? '' : 'loading'}
              data-aos="fade-up"
              data-aos-delay="100"
              onLoad={() => preloadImage(event.image, index)}
            />
            {/* Preload silencioso das imagens adjacentes */}
            {!loadedImages.has(index) && (
              <img
                src={event.image}
                alt={event.title}
                style={{
                  position: 'absolute',
                  opacity: 0,
                  width: '1px',
                  height: '1px',
                  pointerEvents: 'none'
                }}
                loading="lazy"
                onLoad={() => preloadImage(event.image, index)}
              />
            )}
            <CardContent>
              <Title data-aos="fade-up" data-aos-delay="200">{event.title}</Title>
              <DateRange data-aos="fade-down" data-aos-delay="250">{event.dateRange}</DateRange>
              <Features data-aos="fade-up" data-aos-delay="300">
                {event.features.map((feature, i) => (
                  <span key={i} data-aos="fade-up" data-aos-delay="400">
                    {iconMap[feature.icon] || feature.icon} {feature.text}
                  </span>
                ))}
              </Features>
              <PriceSection>
                <Price data-aos="fade-in" data-aos-delay="500">A partir de: <span>{event.payment}</span>R${event.price}</Price>
              </PriceSection>
              <IconButton
                idBtn="clickwpp"
                text="Saber mais sobre o pacote"
                text2="Clique e veja!"
                borderColor="var(--color--black)"
                textColor="var(--color--black)"
                hoverColor="var(--color--black)"
                hoverTextColor="var(--color--white)"
                onClick={() => {
                  // Todos os cards agora direcionam para o motor,
                  // usando as datas do próprio card (dateRange).
                  // Ex.: "19/12/2025 até 21/12/2025 (2 diárias)" ou "de segunda a sexta".
                  openBookingEngineForEvent(event);
                }}
              />
            </CardContent>
          </CardContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default EventCardCarousel;
