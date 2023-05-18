import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnTHE_ywj7LIwgc0Q94ewjQm_dO80L8KY",
  authDomain: "umasebenta-a0b33.firebaseapp.com",
  projectId: "umasebenta-a0b33",
  storageBucket: "umasebenta-a0b33.appspot.com",
  messagingSenderId: "1087613599869",
  appId: "1:1087613599869:web:27e05f5ddf672051147114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}