// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9asZKOc1yyK3ik8e8VN1TluzYCZ-XdS8",
  authDomain: "connect-e529f.firebaseapp.com",
  projectId: "connect-e529f",
  storageBucket: "connect-e529f.appspot.com",
  messagingSenderId: "1057656248738",
  appId: "1:1057656248738:web:d442bc754c594fe2273afb",
  measurementId: "G-NDMB42TCPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);