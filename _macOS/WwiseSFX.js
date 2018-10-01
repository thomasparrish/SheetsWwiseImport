var ak = require('./include/AK/WwiseAuthoringAPI/js/waapi.js').ak;
var autobahn = require('autobahn');

// Create the WAMP connection
var connection = new autobahn.Connection({
        url: 'ws://localhost:8080/waapi',
        realm: 'realm1',
        protocols: ['wamp.2.json']
    });

// Setup handler for connection opened
connection.onopen = function (session) {
 //console.log('wamp connection opened');
 
 var query = {
     from: { path: ['\\Events\\Default Work Unit\\SFX\\'] },
     transform: [
	     {select:['descendants']},
	     {where:['type','Event']}
     ]
 };
 
 var returnOptions = {
 return: ['id', 'name']
 };

// Call getInfo
 session.call('ak.wwise.core.object.get', [], query, returnOptions).then(
 function(res) {
 var objects = res.kwargs.return;
 for(i = 0; i < objects.length; ++i) {
 console.log(objects[i].name);
 }
 },
 function (error) {
 console.log('error: ${error}');
 }
 ).then(

function() {
 connection.close();
 }
 );
};

connection.onclose = function (reason, details) {
    if (reason !== 'lost') {
        console.log("Connection closed. Reason: " + reason);
    }
    process.exit();
};

// Open the connection
connection.open();
