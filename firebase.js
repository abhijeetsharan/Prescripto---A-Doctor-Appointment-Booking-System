// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAisiDAaonUDpQWYtWhvAt6DNQF7QOUt_c",
  authDomain: "prescripto-fd3c9.firebaseapp.com",
  projectId: "prescripto-fd3c9",
  storageBucket: "prescripto-fd3c9.firebasestorage.app",
  messagingSenderId: "31381969744",
  appId: "1:31381969744:web:c50b338c411c63f5c1aa55",
  measurementId: "G-ZEHDH6FXTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);