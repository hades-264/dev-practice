const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Hello from server!'));

app.listen(port, () => console.log('Server Started!'));