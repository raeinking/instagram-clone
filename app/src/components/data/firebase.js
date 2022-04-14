import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
    apiKey: "AIzaSyB2NMwBd79Ez7d7zKM6xPPbi3PRx25CYZM",
    authDomain: "instagram-clone-398ff.firebaseapp.com",
    projectId: "instagram-clone-398ff",
    storageBucket: "instagram-clone-398ff.appspot.com",
    messagingSenderId: "441609255550",
    appId: "1:441609255550:web:429aa0d46cb1b4a152762f",
    measurementId: "G-XVTRM3NXLE"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };

