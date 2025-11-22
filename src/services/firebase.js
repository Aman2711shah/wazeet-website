import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0C63rb7yqzvoeEsFTPvBbkBtNJuUH30U",
  authDomain: "business-setup-application.firebaseapp.com",
  projectId: "business-setup-application",
  storageBucket: "business-setup-application.firebasestorage.app",
  messagingSenderId: "350415177061",
  appId: "1:350415177061:web:e5f98ae0321c4967408d8c",
  measurementId: "G-S2WNCV0709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
