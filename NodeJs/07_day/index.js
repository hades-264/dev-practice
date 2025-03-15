const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Home Page')
});

app.get('/about', (req, res) => {
    return res.send(`Hello from about page Hey ${req.query.myname} your id is ${req.query.userid}`);
});

app.listen(8000, () => console.log('Server Started!'));
