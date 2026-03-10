// auth-guard.js
import { auth } from "./firebase-init.js";

auth.onAuthStateChanged(user => {
    if (!user) {
        location.href = "index.html";
    }
});

