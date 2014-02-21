
/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes'), http = require('http'), path = require('path');

var game_module = require("./shared");
var gameloader = game_module.createGameInstance({});
for(type in gameloader) {
	GLOBAL[type] = gameloader[type];
}

var app = express(), server = app.listen(3000), io = require('socket.io').listen(server);
GLOBAL["io"] = io;

var handler = require("./handler");

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
/*app.get('/users', function(req, res) {
	res.send(Card.prototype);
	
});*/

http.createServer(app).listen(app.get('port'), function(){
	console.log('server listening on port 3000');
});
