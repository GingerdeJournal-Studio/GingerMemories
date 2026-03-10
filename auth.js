// auth.js
import { auth, db } from "./firebase-init.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ----------------------
// Email 登录
// ----------------------
document.getElementById("login-btn").onclick = async () => {
    const email = document.getElementById("emailLogin").value;
    const pass = document.getElementById("passwordLogin").value;

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        location.href = "/GingerMemories/home.html";
    } catch (e) {
        console.error(e);
        alert("Login failed: " + e.message);
    }
};


// ----------------------
// Email 注册
// ----------------------
document.getElementById("register-btn").onclick = async () => {
    const email = document.getElementById("emailRegister").value;
    const pass = document.getElementById("passwordRegister").value;

    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, pass);

        await setDoc(doc(db, "users", userCred.user.uid), {
            uid: userCred.user.uid,
            email: email,
            nickname: "New User",
            avatarUrl: "",
            coverUrl: "",
            createdAt: Date.now()
        });

        location.href = "/GingerMemories/home.html";
    } catch (e) {
        console.error(e);
        alert("Register failed: " + e.message);
    }
};


// ----------------------
// Google 登录（最稳定版本）
// ----------------------
document.getElementById("google-btn").onclick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                nickname: user.displayName || "Google User",
                avatarUrl: user.photoURL || "",
                coverUrl: "",
                createdAt: Date.now()
            });
        }

        location.href = "home.html";

    } catch (e) {
        console.error("Google Login Error:", e);
        alert("Google Login failed: " + e.message);
    }
};
