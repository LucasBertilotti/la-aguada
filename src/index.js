import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh0dbjdL_59ZCm8Hg6k5KliWdUaw3UpB4",
  authDomain: "la-aguada.firebaseapp.com",
  projectId: "la-aguada",
  storageBucket: "la-aguada.appspot.com",
  messagingSenderId: "781150217955",
  appId: "1:781150217955:web:4ba16bfcf03759683a47d6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);