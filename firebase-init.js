import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3dDnYA4X2xHuT3EwN98kXU7HWBszw1ng",
    authDomain: "gingermemories.firebaseapp.com",
    projectId: "gingermemories",
    storageBucket: "gingermemories.appspot.com",
    messagingSenderId: "840423705726",
    appId: "1:840423705726:web:5e45cbe0d533b5844adc2f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

