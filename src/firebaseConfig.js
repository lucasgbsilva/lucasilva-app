import { initializeApp } from "firebase/app";
import { getAuth, } from 'firebase/auth';


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
export const auth = getAuth(app);