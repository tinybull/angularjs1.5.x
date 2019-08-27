var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
// httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†)

//
// Create your target server
//
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//     res.end();
// }).listen(9000);

var PORT = 3000;

var url = require('url');
var fs = require('fs');
var path = require('path');
var mine = require('./mine').types;

var server = http.createServer(function (request, response) {
    //console.log(JSON.stringify(url.parse(request.url)));
    var pathname = url.parse(request.url).pathname;

    console.log('pathname: ' + pathname);

    if (pathname === '/') pathname += 'index.html';

    var realPath = path.join('app', pathname);

    console.log('realPath: ' + realPath);

    var isPubSrc = 0;
    var ext = path.extname(realPath);
    console.log('ext: ' + ext);
    ext = ext ? ext.slice(1) : 'unknown';
    console.log(ext);
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        }

        fs.readFile(realPath, "binary", function (err, file) {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                response.end(err);
            } else {
                var contentType = mine[ext] || "text/plain";

                //console.log('get it');
                response.writeHead(200, {
                    'Content-Type': contentType
                });
                response.write(file, "binary");
                response.end();
            }
        });

    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");