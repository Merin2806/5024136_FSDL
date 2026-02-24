document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let message = document.getElementById("message");
    message.className = "";
    message.innerText = "";

    try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let age = document.getElementById("age").value.trim();

        // Empty fields check
        if (name === "" || email === "" || password === "" || age === "") {
            throw new Error("All fields are required!");
        }

        // Name validation
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Invalid email format.");
        }

        // Password validation
        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters.");
        }

        // Age validation
        if (isNaN(age)) {
            throw new Error("Age must be a number.");
        }

        if (Number(age) < 18) {
            throw new Error("You must be 18 or older to register.");
        }

        // Success
        message.className = "success";
        message.innerText = "Registration Successful! 🎉";

    } catch (error) {
        message.className = "error";
        message.innerText = error.message;
    } finally {
        console.log("Validation process completed.");
    }
});

