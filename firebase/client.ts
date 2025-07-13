import {initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5eq3uLLwJLWCYl-Ij0Cdujq6NarWY4X0",
    authDomain: "interviewprep-9f0cc.firebaseapp.com",
    projectId: "interviewprep-9f0cc",
    storageBucket: "interviewprep-9f0cc.firebasestorage.app",
    messagingSenderId: "557788259325",
    appId: "1:557788259325:web:a2f0cf722d473f281aef94",
    measurementId: "G-RBHXQ61Y4T"
};

const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)