import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_WEB_API_KEY,
    authDomain: "vipulsabout.firebaseapp.com",
    projectId: "vipulsabout",
    storageBucket: "vipulsabout.appspot.com",
    messagingSenderId: process.env.FIREBASE_PROJECT_NUMBER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

