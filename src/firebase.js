// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9OfBchKamSUipdAye7ylDwqeBzkj__AI",
  authDomain: "d1e2-m3o4.firebaseapp.com",
  projectId: "d1e2-m3o4",
  storageBucket: "d1e2-m3o4.appspot.com",
  messagingSenderId: "59359955596",
  appId: "1:59359955596:web:45e784049db67bd350c9a9",
  measurementId: "G-4WR0QQBVX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);