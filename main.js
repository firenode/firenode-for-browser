
const CORE = require("org.firenode.core");
const ENGINE_IO = require("engine.io-client/engine.io");

//console.log("CORE CLIENT", CORE);
//console.log("ENGINE_IO CLIENT", ENGINE_IO);

exports.main = function (UI) {

	console.log("firenode for browser main 2!")

UI.say("firenode for browser main 2!");

var socket = ENGINE_IO('ws://127.0.0.1:8089');
socket.on('open', function(){
	socket.on('message', function(data) {

console.log("MESSAGE FROM SERVER", data);

UI.say("MESSAGE FROM SERVER: " + data);

	});
	socket.on('close', function(){});
});


}
