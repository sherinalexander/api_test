const express = require("express");
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Base route
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

// Sample API route
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, API is working!" });
});

// Fetch user info
app.get("/api/user", (req, res) => {
    res.json({ id: 1, name: "Sherin", role: "Developer" });
});

// GET request for /api/data (Previously Missing)
app.get("/api/data", (req, res) => {
    res.json({ message: "GET request successful" });
});

// POST request for /api/data
app.post("/api/data", (req, res) => {
    const data = req.body;
    res.json({ message: "Data received", data });
});

// Start the server (Placed at the bottom)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
