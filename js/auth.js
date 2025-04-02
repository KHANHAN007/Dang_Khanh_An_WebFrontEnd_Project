function validateLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    if (email === "" || password === "") {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    }
}
