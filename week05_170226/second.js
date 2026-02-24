console.log("=== JavaScript Validation Example ===");

try {
    // Taking input from user
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let email = prompt("Enter your email:");

    // 1️⃣ Name Validation
    if (name.trim() === "") {
        throw new Error("Name cannot be empty!");
    }

    // 2️⃣ Age Validation
    if (age.trim() === "") {
        throw new Error("Age is required!");
    }

    if (isNaN(age)) {
        throw new Error("Age must be a number!");
    }

    if (age < 18) {
        throw new Error("Age must be 18 or above!");
    }

    // 3️⃣ Email Validation (basic check)
    if (!email.includes("@")) {
        throw new Error("Invalid email format!");
    }

    // If everything is correct
    console.log("✅ All validations passed!");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);

} catch (error) {
    console.log("❌ Validation Error:", error.message);

} finally {
    console.log("Validation process completed.");
}
