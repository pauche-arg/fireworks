const express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.listen(PORT);