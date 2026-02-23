import { supabase } from "./supabase-init.js";

// 显示消息
function showMessage(msg) {
    document.getElementById("auth-message").innerText = msg;
}

// 注册
async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        showMessage(error.message);
        return null;
    }

    showMessage("账号创建成功，请您查看邮箱！");
    return data.user;
}

// 创建用户资料
async function createProfile(userId) {
    const { error } = await supabase.from("profiles").insert({
        id: userId,
        nickname: "New User",
        avatar_url: "",
        bio: "",
        city: ""
    });

    if (error) console.error(error.message);
}

// 登录
async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        showMessage(error.message);
        return null;
    }

    showMessage("成功登陆！");
    return data.user;
}

// 绑定按钮事件
document.getElementById("signup-btn").onclick = async () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const user = await signUp(email, password);
    if (user) await createProfile(user.id);
};

document.getElementById("login-btn").onclick = async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = await signIn(email, password);
    if (user) {
        // 登录成功后跳转
        window.location.href = "home.html";
    }
};
