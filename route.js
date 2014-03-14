var fs = require("fs");

function route(pathname){
	if (pathname == "/displayLesson/"){
		html = fs.readFile("./boot.html");
		return html;
	}
}

exports.route = route;
