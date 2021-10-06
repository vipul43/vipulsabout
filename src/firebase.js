import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, addDoc, updateDoc, getDocs } from 'firebase/firestore/lite';
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const firebaseConfig = {
    apiKey: "AIzaSyCM_yU2b0-uytLP2PKqhWjQLVOU0pMc9Oc",
    authDomain: "vipulsabout.firebaseapp.com",
    projectId: "vipulsabout",
    storageBucket: "vipulsabout.appspot.com",
    messagingSenderId: "900580893289",
    appId: "1:900580893289:web:97a4cebeba503aaa48b8f8",
    measurementId: "G-8ZTVMCVFHJ"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const likesCountDocRef = doc(db, 'likes', 'likesCount');
const usersCollection = collection(db, 'users');

export const getLikesCount = async () => {
    const likesCountDocSnap = await getDoc(likesCountDocRef);
    if (likesCountDocSnap.exists()) {
        return likesCountDocSnap.data().count;
    }
}

async function getUniqueId() {
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise
    const result = await fp.get()
    const visitorId = result.visitorId
    return visitorId;
}
async function validate() {
    const uniqueId = await getUniqueId();
    const usersDocSnap = await getDocs(usersCollection);
    usersDocSnap.forEach((doc) => {
        if (doc.data().id === uniqueId) {
            return false;
        }
    });
    return uniqueId;
}
async function handleIncrement(val) {
    const docRef = await addDoc(usersCollection, {
        id: val
    });
    const currLikes = await getLikesCount();
    await updateDoc(likesCountDocRef, {
        count: currLikes + 1
    });
}
export const incrLikesCount = () => {
    if (validate != false) {
        handleIncrement(validate);
    }
}