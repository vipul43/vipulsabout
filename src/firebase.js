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

export const getTechBlog = async (techBlogName) => {
    const techBlogRef = doc(db, 'techblogs', techBlogName);
    const techblog = await getDoc(techBlogRef);
    if (techblog.exists()) {
        return techblog.data().value;
    }
    return "No Blog With This Title Written Yet.";
}

export const updateTechBlog = async (techBlogName, data) => {
    var techBlogRef = doc(db, 'techblogs', techBlogName);
    await setDoc(techBlogRef, data);
}

export const getLifeBlog = async (lifeBlogName) => {
    const lifeBlogRef = doc(db, 'lifeblogs', lifeBlogName);
    const lifeblog = await getDoc(lifeBlogRef);
    if (lifeblog.exists()) {
        return lifeblog.data().value;
    }
    return "No Blog With This Title Written Yet.";
}

export const updateLifeBlog = async (lifeBlogName, data) => {
    var lifeBlogRef = doc(db, 'lifeblogs', lifeBlogName);
    await setDoc(lifeBlogRef, data);
}