import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7ibmDfSRxju5aDXGzIMY34XG4Jk7Zhq4",
    authDomain: "cryptotracker-37ea9.firebaseapp.com",
    projectId: "cryptotracker-37ea9",
    storageBucket: "cryptotracker-37ea9.appspot.com",
    messagingSenderId: "800336181134",
    appId: "1:800336181134:web:d597c7a07281efbf0316df",
    measurementId: "G-MVSDCE3R46"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};