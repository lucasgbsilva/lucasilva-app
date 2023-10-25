import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8dg36Dkqq3aXGy2q0KW3FLbQRfDnkn14",
  authDomain: "lucassilva-app.firebaseapp.com",
  projectId: "lucassilva-app",
  storageBucket: "lucassilva-app.appspot.com",
  messagingSenderId: "503071371740",
  appId: "1:503071371740:web:cd99f260efc28d9f045f19",
  measurementId: "G-25QQXRSFZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
