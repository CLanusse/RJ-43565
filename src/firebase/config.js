// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuUvAXnKihS2exfyghFylB06g1ZM1VzG8",
  authDomain: "rj-43565.firebaseapp.com",
  projectId: "rj-43565",
  storageBucket: "rj-43565.appspot.com",
  messagingSenderId: "761365424074",
  appId: "1:761365424074:web:54578a85a7b1a031291133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()