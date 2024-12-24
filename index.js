const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const users = [
    { id: 1, name: 'Ali', age: 25 },
    { id: 2, name: 'Abbas', age: 30 },
    { id: 3, name: 'Ahmed', age: 22 },
    { id: 4, name: 'Anus', age: 28 }
];

app.get('/', (req, res) => {
    res.send('SALAM World!');
});


app.get('/user', (req, res) => {
    res.json(users);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
