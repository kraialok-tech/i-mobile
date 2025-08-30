import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAim6KqDCODC8JaHy5xOEqnmeXxp0hye_U",
  authDomain: "i-mobile-b8f9f.firebaseapp.com",
  projectId: "i-mobile-b8f9f",
  storageBucket: "i-mobile-b8f9f.firebasestorage.app",
  messagingSenderId: "197745062236",
  appId: "1:197745062236:web:215e282d6ecc7e2b8d9199"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
