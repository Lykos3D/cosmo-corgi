document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Collect username, email, and password from user
    const petname = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Prepare the request payload
    const payload = { petname, email, password };

    try {
        // Send the data to the server using fetch
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        // Display a message based on the response
        if (response.ok) {
            document.getElementById('message').innerText = "User created successfully!";
        } else {
            document.getElementById('message').innerText = `Error: ${result.error}`;
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('message').innerText = "An error occurred. Please try again.";
    }
});