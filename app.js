require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const flash = require("connect-flash");
const session = require('express-session');

const carRoutes = require('./router/carRoutes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(
    session({
        secret: "apaaja",
        saveUninitialized: true,
        resave: true,
    })
);

app.use(express.static(`${__dirname}/public`));

app.use(flash());
app.use(carRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})