var http = require('http');

var server = http.createServer(function(request, response) {
	response.end('<h1>Stoian</h1><br><a href="http://ivanovyordan.com">Yordan Ivanov</>');
});

server.listen(80);
console.log(a'Server running at http://localhost/');