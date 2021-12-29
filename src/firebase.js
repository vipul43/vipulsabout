import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "vipulsabout.firebaseapp.com",
    projectId: "vipulsabout",
    storageBucket: "vipulsabout.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

