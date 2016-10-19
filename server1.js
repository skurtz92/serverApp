var http = require('http');

var PORT=7000;

function handleRequest(request, response){
    response.end('U r the bomb ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	//Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});



var PORT2=7500;

function handleRequest2(request, response){
    response.end('U suck ' + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	//Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});