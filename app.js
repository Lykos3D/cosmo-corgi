// The purpose of this file is to set up Express for Handling HTTP Requests

import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static("public")); // Serve static files

// Connect to MongoDB once the server starts
async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connectToDatabase();

app.post('/signup', async (req, res) => {
    try {
        // Extract user data from the request body
        const { username, email, password } = req.body;

        // Validate the input (make sure required fields are present)
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Access the database and users collection
        const db = client.db("userDatabase");
        const usersCollection = db.collection("users");

        // Check if the user already exists by email
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User with this email already exists" });
        }

        // Define the user document
        const userDocument = {
            username,
            email,
            password,
            customizations: {
                color: "example color",
            },
            createdAt: new Date()
        };

        // Insert the user document into MongoDB
        const result = await usersCollection.insertOne(userDocument);

        // Respond with success
        res.status(201).json({ message: "User created successfully", userId: result.insertedId });
    } catch (error) {
        console.error("Error during user sign-up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})