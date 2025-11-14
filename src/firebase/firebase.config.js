// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI1sLT73-NMX3klX4rmWTikN5w0VlVqdM",
  authDomain: "habit-tracker-rk.firebaseapp.com",
  projectId: "habit-tracker-rk",
  storageBucket: "habit-tracker-rk.firebasestorage.app",
  messagingSenderId: "689281716420",
  appId: "1:689281716420:web:4707218e758e9c6057b991",
  measurementId: "G-9VLSD3ED8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);