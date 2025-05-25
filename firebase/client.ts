import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfRhrqxW6DA8idrMztq9WXw-TUShX52hE",
  authDomain: "prepwise-e2cc4.firebaseapp.com",
  projectId: "prepwise-e2cc4",
  storageBucket: "prepwise-e2cc4.firebasestorage.app",
  messagingSenderId: "1062744116223",
  appId: "1:1062744116223:web:072a54c3cbf8ed0ff6b5ca",
  measurementId: "G-ZG9V9WJG0F"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();;

export const auth = getAuth(app);
export const db = getFirestore(app);
