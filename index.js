import express from "express";
import { MongoClient } from "mongodb";

const dbname = "school";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function dbConnection() {
    try {
        await client.connect();

        console.log("MongoDB connected");

        const db = client.db(dbname);
        const collection = db.collection("students");

        console.log("Connected to students collection");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}

dbConnection();

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Express server is running");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});