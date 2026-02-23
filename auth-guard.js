import { supabase } from "./supabase-init.js";

async function requireLogin() {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        window.location.href = "index.html"; // 强制回到登录页
    }
}

requireLogin();
