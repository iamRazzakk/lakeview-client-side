// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg4g5T3tKaU_4Ir6QeHAXkGZ03NODbyS8",
  authDomain: "small-lakeview-cottage-7d6ee.firebaseapp.com",
  projectId: "small-lakeview-cottage-7d6ee",
  storageBucket: "small-lakeview-cottage-7d6ee.appspot.com",
  messagingSenderId: "560180248079",
  appId: "1:560180248079:web:e45eb845b68b59ced1ad7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
