import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmxpECb0zIcRehhx_EN9basvK01yjKfho",
  authDomain: "pousada-le-ange.firebaseapp.com",
  projectId: "pousada-le-ange",
  storageBucket: "pousada-le-ange.firebasestorage.app",
  messagingSenderId: "495576784631",
  appId: "1:495576784631:web:df7a577e163530ceea3df2"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
