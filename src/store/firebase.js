// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX3LxyPFr8TTJ3bv-CeVVm0w9YYNOEkOY",
  authDomain: "alumni-tracer-635e8.firebaseapp.com",
  projectId: "alumni-tracer-635e8",
  storageBucket: "alumni-tracer-635e8.appspot.com",
  messagingSenderId: "248476801851",
  appId: "1:248476801851:web:f252595dd5e32da9a2b51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage}