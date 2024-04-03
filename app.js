require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const router = require('express').Router()
const carController = require('./controllers/carController')

const PORT = process.env.PORT || 3000;

const app = express();
// const carRoute 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
router.post('/create', carController.createCar)
app.use('/', router)
// app.use("/", (req, res) => {
//     res.json({ message: "Welcome to my application." });
// });
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})