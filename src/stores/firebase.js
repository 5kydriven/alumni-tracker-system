// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZC7etsELmCrHAD6MQg_NkIJrJRghlzYA",
  authDomain: "capstone-5cd70.firebaseapp.com",
  projectId: "capstone-5cd70",
  storageBucket: "capstone-5cd70.appspot.com",
  messagingSenderId: "397281413036",
  appId: "1:397281413036:web:d1ad16a057f240c0c71c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage}