const express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/firework.html');
})


app.listen(PORT);