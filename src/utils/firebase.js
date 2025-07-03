// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClC5ITaC75GnpezTu_gq3M35eHFg8pg6E",
  authDomain: "netflixgpt-da196.firebaseapp.com",
  projectId: "netflixgpt-da196",
  storageBucket: "netflixgpt-da196.firebasestorage.app",
  messagingSenderId: "381943770956",
  appId: "1:381943770956:web:fabbe4f7f81adc57dea9e9",
  measurementId: "G-XE0WL407XZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
