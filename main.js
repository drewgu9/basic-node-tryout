const https = require("node:http");
const fs = require("node:fs");

const server = https.createServer((req, res) => {
  console.log("hi");
  let url;
  console.log((url = req.url));
  console.log(req.headers.host);

  if (url == "/favicon.ico") {
    console.log("im in your desired spot!");
    fs.readFile("./trollface.png", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404, "HI, random failure string");
        res.end();
      } else {
        console.log(data);
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else {
    console.log("Im not in your favicon.cio spot! and url is" + url);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html></html>");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is listening on this port!");
});
