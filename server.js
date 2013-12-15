var express = require('express');
var app = express();

var authentication = require('./authentication');
var locations = require('./locations');

var port = process.env.PORT || 8099;

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'ec52b70f-7235-4358-a8f2-9065e5344cbb'}));

app.get('/', function(req, res){
	var body = 'Hello World express';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.post('/login', function(req, res){
	var user = req.body.user,
		password = req.body.password;
	authentication.login(req.session, user, password);
});

app.post('/locations', function(req, res){
	if (!authentication.isLoggedIn(req.session)){
	    res.send(403);
        return;
    }

	var latitude  = req.body.latitude,
	    longitude = req.body.longitude;
	locations.addLocation(latitude, longitude);
});

app.get('/locations', function(req, res){
	if (!authentication.isLoggedIn(req.session)){
	    res.send(403);
        return;
    }

	var data = locations.getLocations();
	res.write(JSON.stringify(data));
});

app.listen(port);
console.log('listening on port ' + port);