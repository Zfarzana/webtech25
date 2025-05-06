

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const username = document.querySelector("#username").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            e.preventDefault(); 
        }
    });
});
