// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLAD9zT2RQHCP3oEr4iwrG9ekyDN9ZGLs",
  authDomain: "pokemon-81305.firebaseapp.com",
  projectId: "pokemon-81305",
  storageBucket: "pokemon-81305.appspot.com",
  messagingSenderId: "961713286110",
  appId: "1:961713286110:web:f6eb9cb7c947cc1b29cb4f",
  measurementId: "G-3SFTTT9TY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const FirebaseConf = {
  
  auth
};