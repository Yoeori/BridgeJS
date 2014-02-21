var fs = require('fs');
var vm = require('vm');

var sources = [];

function include(name) {
	sources.push({
		name: name,
		src: fs.readFileSync(__dirname + '/' + name),
	});
}

include("../shared/helper.js");
include("../shared/card/card.js");


exports.createGameInstance = function(callbacks) {
	
	var fakeConsole = { log: function(log) { console.log(log); } };

	var phonyContextGlobals = {
		IS_SERVER : true,
		console : fakeConsole,
		Server : callbacks
	};

	var phonyContext = vm.createContext(phonyContextGlobals);

	for (var i = 0; i< sources.length; i++) {
		var s = sources[i];
		try {
			vm.runInContext(String(s.src), phonyContext, s.name);
		} catch (e) {
			console.log("error loading game file " + s.name);
			throw e;
		}
	}

	phonyContext.enableLogging = function() {
		fakeConsole.log = console.log;
	};

	return phonyContext;
};

