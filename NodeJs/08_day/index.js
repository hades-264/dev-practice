const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This from Home Page');
})

app.listen(8000, () => {
    console.log('Server Started!');
})