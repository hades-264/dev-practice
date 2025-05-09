const express = require('express');
const path = require('path');
const connectMongoDB = require('./connection');
const urlRouter = require('./routes/route');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
const Url = require('./models/model');
const cookieParser = require('cookie-parser');
const { retrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth');

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

// Routes
app.use('/url', retrictToLoggedinUserOnly, urlRouter);
app.use('/', checkAuth, staticRouter);
app.use('/user', userRouter);

// Testing
/* app.get('/test', async (req, res) => {
    const allUrls = await Url.find({});
    res.render('home', {
        urls: allUrls
    });
}); */
/* app.get('/test', async (req, res) => {
    const allUrls = await Url.find({});
    res.end(
        `<html>
<head>
</head>
<body>
<ol>
    ${allUrls.map(url => `<li>${url.shortId} - ${url.redirectUrl} - ${url.visitHistory.length}</li>`)
        .join('')}
</ol>
</body>
</html>`);
}) */

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));