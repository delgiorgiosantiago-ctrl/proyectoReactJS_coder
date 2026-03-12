// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRubE2ABCEDA5THHxrOGrAhgZC1dE0nk",
  authDomain: "proyectoreactjs-ade3f.firebaseapp.com",
  projectId: "proyectoreactjs-ade3f",
  storageBucket: "proyectoreactjs-ade3f.firebasestorage.app",
  messagingSenderId: "504054486001",
  appId: "1:504054486001:web:ee1a62f7689a8b4872aa50"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
export const db = getFirestore(app)