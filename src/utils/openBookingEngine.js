import { BOOKING_PROPERTIES } from '../constants/bookingEngine';
import { openExternal } from './openExternal';

const DEFAULT_OMNIBEES_BASE_URL = 'https://book.omnibees.com/hotelresults';

const addDays = (date, days) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const formatForOmnibees = (date) => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${day}${month}${year}`;
};

export const openBookingEngine = ({
  propertyKey = 'serra',
  adults = 2,
  rooms = 1,
  checkIn,
  checkOut,
  includeDates = true,
  baseUrl,
} = {}) => {
  const property = BOOKING_PROPERTIES?.[propertyKey] || BOOKING_PROPERTIES?.serra;
  const q = property?.q;
  if (!q) {
    // This usually happens when VITE_OMNIBEES_* env vars are missing in the production build.
    console.warn('[openBookingEngine] Missing Omnibees property id (q). Check VITE_OMNIBEES_MAR_ID / VITE_OMNIBEES_SERRA_ID.');
    return;
  }

  const params = new URLSearchParams();
  params.set('q', q);
  params.set('NRooms', String(rooms));
  if (adults) params.set('ad', String(adults));

  if (includeDates) {
    const resolvedCheckIn = checkIn || addDays(new Date(), 1);
    const resolvedCheckOut = checkOut || addDays(resolvedCheckIn, 2);
    params.set('CheckIn', formatForOmnibees(resolvedCheckIn));
    params.set('CheckOut', formatForOmnibees(resolvedCheckOut));
  }

  const resolvedBaseUrl = baseUrl || property?.baseUrl || DEFAULT_OMNIBEES_BASE_URL;
  openExternal(`${resolvedBaseUrl}?${params.toString()}`);
};
