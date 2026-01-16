const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');

app.get('/', async(req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log("STARTED SERVER");
});