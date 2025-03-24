const express = require('express');
const urlRouter = require('./routes/route');
const connectMongoDB = require('./connection');
const Url = require('./models/model');
const path = require('path');
const staticRouter = require('./routes/staticRoute');


const app = express();
const PORT = 8001;

// MongoDB Connection
connectMongoDB('mongodb://127.0.0.1:27017/short-url');

// Setting View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Routes
app.use('/', urlRouter);
app.use('/', staticRouter);

app.get('/test', async (req, res) => {
    const allUrls = await Url.find({});
    return res.render('home', {
        urls: allUrls
    });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
