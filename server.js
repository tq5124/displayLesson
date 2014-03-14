var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	if (pathname == "/displayLesson/"){
		fs.readFile("./boot.html", function(err, html){
			response.write(html);
		});
	}
	response.end();
}).listen(8877);
