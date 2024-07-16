import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-9245e.firebaseapp.com",
  projectId: "chat-app-9245e",
  storageBucket: "chat-app-9245e.appspot.com",
  messagingSenderId: "1010597392109",
  appId: "1:1010597392109:web:de9c47e3800324aa3ba6e4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();