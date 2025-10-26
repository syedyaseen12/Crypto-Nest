// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtfd2OThBTfBrQlwRPR-ktALKgZWXXbBI",
  authDomain: "crypto-d6137.firebaseapp.com",
  projectId: "crypto-d6137",
  storageBucket: "crypto-d6137.firebasestorage.app",
  messagingSenderId: "55749511425",
  appId: "1:55749511425:web:39c08321a4dfcfdb79f300",
  measurementId: "G-06FEH8ETYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
