const userName = document.getElementById("username");
const password = document.getElementById("password");
const checkButton = document.getElementById("check-it-out");

checkButton.onclick = () => {

    const userNameValue = userName.value.toLowerCase();
    const passwordValue = password.value.toLowerCase();

    if (userNameValue === "коля" && passwordValue === "123") {
        alert("Да, вы вошли");
    } else {
        alert("Нет, вы не вошли");
    }
};