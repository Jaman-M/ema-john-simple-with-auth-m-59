// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3aouKZxNbZxb-o2tX8JaPEtDY5V1nRcI",
  authDomain: "ema-john-simple-eb693.firebaseapp.com",
  projectId: "ema-john-simple-eb693",
  storageBucket: "ema-john-simple-eb693.appspot.com",
  messagingSenderId: "586395714157",
  appId: "1:586395714157:web:a8f6beedc244403aea3564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;