var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  // Render 'About' style home page.
  res.render('index');
});

app.get('/api/whoami', function(req, res) {
  // Retrieve client information
  
  // Grab the ip address.
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  ip = ip.split(',')[0];
  
  // Grab the operating system.
  var os = req.headers["user-agent"].split(/[\(\)]/)[1];
  
  // Grab the language.
  var language = req.headers["accept-language"].split(',')[0];
  
  // Send it all back in a neat little JSON
  res.status(200).send( {"ipaddress" : ip, "language" : language,"software": os} );
  res.end();
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
