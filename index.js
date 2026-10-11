
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    if (req.url === "/") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("Internal Server Error");
                return;
            }

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(data);
        });

    } else if (req.url === "/submit") {

        let databody = [];

        req.on("data", (chunk) => {
            databody.push(chunk);
        });

        req.on("end", () => {
            let rawdata = Buffer.concat(databody).toString();
            let readabledata = querystring.parse(rawdata);

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(`
                <h1>Form Submitted Successfully!</h1>
                <p>Name: ${readabledata.name}</p>
                <p>Email: ${readabledata.email}</p>
            `);
        });

    } else {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.end("Page Not Found");
    }

}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
