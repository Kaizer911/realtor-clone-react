// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAGmskV_6P6r_EGbtTZ9fbBSRPWZ6M04",
  authDomain: "realtor-clone-react-fad68.firebaseapp.com",
  projectId: "realtor-clone-react-fad68",
  storageBucket: "realtor-clone-react-fad68.appspot.com",
  messagingSenderId: "1070984514231",
  appId: "1:1070984514231:web:a3a955ab2347eacebc1b32",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
