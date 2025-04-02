const express = require("express");
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Sample user data
const users = [
    { id: 1, name: "Sherin", role: "Developer" },
    { id: 2, name: "Aswathy", role: "Developer" },
    { id: 3, name: "Jaisha", role: "Developer" },
    { id: 4, name: "Andrea", role: "Develope" },
];

// Base route
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

// Sample API route
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, API is working!" });
});

// Fetch all users
app.get("/api/user", (req, res) => {
    res.json(users);
});

// Fetch user by ID (Dynamic)
app.get("/api/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Handle GET request for /api/data
app.get("/api/data", (req, res) => {
    res.json({ message: "GET request successful" });
});

// Handle POST request for /api/data
app.post("/api/data", (req, res) => {
    const data = req.body;
    
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "No data received" });
    }

    res.json({ message: "Data received", data });
});

// Catch-all route for invalid endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
