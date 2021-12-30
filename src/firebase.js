import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_WEB_API_KEY,
    authDomain: "vipulsabout.firebaseapp.com",
    projectId: "vipulsabout",
    storageBucket: "vipulsabout.appspot.com",
    messagingSenderId: process.env.FIREBASE_PROJECT_NUMBER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export const getBlog = async (blogType, blogName) => {
    const blogRef = doc(db, blogType, blogName);
    const blogSnap = await getDoc(blogRef);
    if (blogSnap.exists()) {
        return blogSnap.data().value;
    }
    return "No Blog With This Title Written Yet.";
}

export const updateBlog = async (blogType, blogName, data) => {
    var blogRef = doc(db, blogType, blogName);
    await setDoc(blogRef, data);
}