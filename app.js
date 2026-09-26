const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("AI-Assisted DevSecOps Demo is running!");
});

app.get("/search", (req, res) => {
    const query = req.query.q;

    res.send(`You searched for: ${query}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
