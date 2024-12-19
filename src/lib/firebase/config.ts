import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAA657Gy5oZwtwsMokdNgDwf3l7hCKANBo",
  authDomain: "authentication-e9afc.firebaseapp.com",
  projectId: "authentication-e9afc",
  storageBucket: "authentication-e9afc.firebasestorage.app",
  messagingSenderId: "471946475555",
  appId: "1:471946475555:web:31c77625b378fc02ca9996"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);