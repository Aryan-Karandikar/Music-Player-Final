var http = require('http');
http.createServer( function (req,res)
{
    res.writeHead(" { Text is { html css js angular js and bootstrap and ajax }}")
    req.read("Opening the port which is listening at 8080")

}).listen(8080);

