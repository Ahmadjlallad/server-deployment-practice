const express = require('express')
const app = express();
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const stamper = require('./middleware/stamper');



app.get('/', (req, res) => {
    res.status(200).send('HOME route 🏡');
});

app.get("/data", stamper, (req, res) => {
    res.status(200).json({
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        time: req.timeStamp
    });
})
app.get('/bad', (req, res, next) => {
    throw new Error('You made an Error 🛑❗');
});
app.use(errorHandler);

app.use('*', notFoundHandler); // for handling undefined paths

module.exports = app;