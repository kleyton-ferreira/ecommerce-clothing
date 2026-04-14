import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB46Wgt6lYgrfIvPe0eRcPQRYQtu4SMrnQ",
    authDomain: "ecommerce-clothing-9aa4c.firebaseapp.com",
    projectId: "ecommerce-clothing-9aa4c",
    storageBucket: "ecommerce-clothing-9aa4c.firebasestorage.app",
    messagingSenderId: "288644227985",
    appId: "1:288644227985:web:2549fd51aa2a92b6b07030"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)