const express = require('express');
const path = require('path');
const connectMongoDB = require('./connection');
const cookieParser = require('cookie-parser');
const urlRouter = require('./routes/route');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
const { checkForAuthentication, restrictTo } = require('./middlewares/auth');

const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// MongoDB Connection
connectMongoDB('mongodb://127.0.0.1:27017/short-url');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

// Routes
app.use('/url', restrictTo(["NORMAL", "ADMIN"]), urlRouter);
app.use('/', staticRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));