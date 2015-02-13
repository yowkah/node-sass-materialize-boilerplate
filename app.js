var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 8083;
var path = require('path');

var serveStatic = require('serve-static');
var morgan = require('morgan');

app.use(morgan('dev'));

//view engine selection
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//routes
app.use('/public', express.static(__dirname + '/public'));
//require('./app/routes/routes.js')(app,passport);
app.get('/', function (req,res){
	res.render('index');
})

http.listen(port);
console.log('Server is running at http://localhost:' + port + "/\nCTRL + C to shutdown server");
