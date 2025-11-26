// Passwort kannst du hier ändern:
const correctPassword = "starwars";

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");
    const data = document.getElementById("private-data");

    if (input === correctPassword) {
        data.classList.remove("blurred");
        error.textContent = "";
    } else {
        error.textContent = "Falsches Passwort.";
    }
}