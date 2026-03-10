const menu = document.getElementById("mobileMenu");
const hamburger = document.querySelector(".hamburger");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    const isOpen = menu.classList.toggle("active");
    overlay.classList.toggle("active", isOpen);
}

    // Close when clicking outside
document.addEventListener("click", function (e) {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    }
});

const headerEl = document.getElementById("mobile-header");
window.addEventListener("scroll", () => {

    if (window.scrollY > 180) {
        headerEl.classList.add("transparent");
    } else {
        headerEl.classList.remove("transparent");
    }
});

import { auth } from "../firebase-init.js";
import {
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 退出登录
document.getElementById("logout-btn").onclick = async () => {
    await signOut(auth);
    location.href = "/GingerMemories/index.html";
};
