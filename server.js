var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/whoami', function(req, res) {
  
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  var os = req.headers["user-agent"].split(/[\(\)]/)[1];
  
  var language = req.headers["accept-language"].split(',')[0];
  
  res.status(200).send( {"ipaddress" : ip, "language" : language,"software": os} );
  res.end();
  
});

// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('My app is listening on port 8080');
});


