// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0nhHwCcnhg5ZTi7A1X1J84vuH9ThLIrw",
    authDomain: "small-lakeview-cottage.firebaseapp.com",
    projectId: "small-lakeview-cottage",
    storageBucket: "small-lakeview-cottage.appspot.com",
    messagingSenderId: "152034626407",
    appId: "1:152034626407:web:5c2d81ede970fcc2877dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);