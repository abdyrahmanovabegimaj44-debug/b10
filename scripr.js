function login() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if (login === "admin" && password === "1234") {
        alert("Вход выполнен");
    } else {
        alert("Неверный логин или пароль");
    }
}