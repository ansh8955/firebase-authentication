// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDk4cVHLh9p8Q4sMAqxazpR1kLml89TRVc",
  authDomain: "fir-auth-cb788.firebaseapp.com",
  projectId: "fir-auth-cb788",
  storageBucket: "fir-auth-cb788.appspot.com",
  messagingSenderId: "643056437570",
  appId: "1:643056437570:web:971c16189b1cfdbbf5e0db",
  measurementId: "G-PE6ET0FSTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth,app};

