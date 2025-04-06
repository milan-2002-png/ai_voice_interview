// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5VWGF1y6Kf3xlDR19umGSjlwCO7wPZFc",
  authDomain: "prepwise-983b1.firebaseapp.com",
  projectId: "prepwise-983b1",
  storageBucket: "prepwise-983b1.firebasestorage.app",
  messagingSenderId: "610639434748",
  appId: "1:610639434748:web:27476787168b5cca0b9879",
  measurementId: "G-EVFN8SXFZ9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
