console.log("=== JavaScript Exception Handling Demo ===");

function processUserInput(age, num1, num2) {

    try {
        console.log("\nChecking age...");

        // Custom error using throw
        if (age < 18) {
            throw new Error("User must be 18 or older.");
        }
        console.log("Age is valid.");

        console.log("\nChecking numbers...");

        // Type checking
        if (isNaN(num1) || isNaN(num2)) {
            throw new TypeError("Both inputs must be numbers.");
        }

        // Division check
        if (num2 === 0) {
            throw new Error("Cannot divide by zero.");
        }

        let result = num1 / num2;
        console.log("Division Result:", result);

    } 
    catch (error) {
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
    } 
    finally {
        console.log("Execution completed (finally block runs always).");
    }
}


// ✅ Call function with different test cases

// Case 1: Age error
processUserInput(16, 10, 2);

// Case 2: Type error
processUserInput(20, "hello", 5);

// Case 3: Divide by zero
processUserInput(20, 10, 0);

// Case 4: Correct input
processUserInput(20, 10, 2);

console.log("\n=== Program Finished ===");
