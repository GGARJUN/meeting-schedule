// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "first-project-651f4.firebaseapp.com",
  projectId: "first-project-651f4",
  storageBucket: "first-project-651f4.appspot.com",
  messagingSenderId: "597073325818",
  appId: "1:597073325818:web:14e25c07938bdc06a6a343",
  measurementId: "G-RYS66K627S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
