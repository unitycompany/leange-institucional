import { collection, getDocs } from "firebase/firestore";
import { db } from "/firebaseConfig"; // Ajuste o caminho conforme necessário

export const getEvents = async () => {
  const eventsCollection = collection(db, "Eventos"); // Nome da coleção no Firestore
  const eventSnapshot = await getDocs(eventsCollection);
  const events = eventSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return events;
};
