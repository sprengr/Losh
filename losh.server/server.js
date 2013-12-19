var express = require('express');
var app = express();

var authentication = require('./authentication');
var locations = require('./locations');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'ec52b70f-7235-4358-a8f2-9065e5344cbb'}));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res){
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.get('/clear', function(req, res){

	res.end('cleared locations');
});
app.post('/login', function(req, res){
	var user = req.body.user,
		password = req.body.password;
	authentication.login(req.session, user, password);

	res.write(JSON.stringify(req.session.isLoggedIn));
	res.end();
});

app.post('/locations', function(req, res){
	//if (!authentication.isLoggedIn(req.session))
	//	return;

	var latitude  = req.body.latitude,
	    longitude = req.body.longitude,
	    street = req.body.street,
	    name = req.body.user;
	locations.addLocation(longitude, latitude, street, name);
	res.end();
});

app.get('/locations', function(req, res){
	//if (!authentication.isLoggedIn(req.session))
	//	return;

	var data = locations.getLocations();
	res.write(JSON.stringify(data));
	res.end();
});

app.listen(process.env.PORT || 8099);
console.log('listening on port 8099');