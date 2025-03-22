const express = require('express');
const connectMongoDb = require('./connection');
const logReqResMiddleware = require('./middlewares/middleware');
const userRouter = require('./routes/route');

const app = express();
const PORT = 8000;

// Database Connection
connectMongoDb('mongodb://127.0.0.1:27017/app-1');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqResMiddleware('log.txt'));

// Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server Started at port: ${PORT}`);
});