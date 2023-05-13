import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const WebApi =process.env.FIREBASE_WEB_API;
const AuthD =process.env.FIREBASE_AUTH_DOMAIN;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: WebApi,
    authDomain: AuthD,
    projectId: "carwash-89b9c",
    storageBucket: "carwash-89b9c.appspot.com",
    messagingSenderId: "925072050003",
    appId: "1:925072050003:web:1af7d5125352d3aa7303a6",
    measurementId: "G-DRNSHXS7LR"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);