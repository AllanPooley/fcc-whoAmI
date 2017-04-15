var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('My app is listening on port 8080');
});


