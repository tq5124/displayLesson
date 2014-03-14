var fs = require("fs");

function route(pathname, response){
	if (pathname == "/displayLesson/"){
		fs.readFile("./boot.html", function(err, html, response){
			console.log(html);
			response.writeHeader(200);
			response.write(html);
			response.end();
		});
	}
}

exports.route = route;
