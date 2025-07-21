import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcebf8OLQTD8qxUrf_u5wDypFWH4Z4s_o",
  authDomain: "karam-b7802.firebaseapp.com",
  projectId: "karam-b7802",
  storageBucket: "karam-b7802.firebasestorage.app",
  messagingSenderId: "352797191284",
  appId: "1:352797191284:web:09c69349c00056110ef521",
  measurementId: "G-HFZS2LWJPM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



