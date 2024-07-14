/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsx0pmZzhjEADD3DQrKRrsm6nGisTZewc",
  authDomain: "rain-cash-5497c.firebaseapp.com",
  projectId: "rain-cash-5497c",
  storageBucket: "rain-cash-5497c.appspot.com",
  messagingSenderId: "160121829799",
  appId: "1:160121829799:web:361106bff99a9394645e82",
  measurementId: "G-G1ZCE00K2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app