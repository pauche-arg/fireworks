const express = require("express");
const path = require('path');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Fireworks!' });
  });


app.listen(PORT);