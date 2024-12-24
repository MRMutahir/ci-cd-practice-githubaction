const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route for GET
app.get('/', (req, res) => {
    res.send('SALAM World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
