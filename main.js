const https = require("node:http");
const fs = require("node:fs");

const listOfCSSDocs = [];
const listOfHTMLDocs = ["/about", "/contact-me", "/index"];
const listOfJSDocs = [];

const server = https.createServer((req, res) => {
  let editedURL = req.url == "/" ? "/index" : req.url;

  console.log("Made a query. URL: " + editedURL);
  console.log("Full URL is " + req.headers.host);

  if (listOfHTMLDocs.includes(editedURL)) {
    console.log(
      "Following URL: " + editedURL + " entered HTML Document return state."
    );
    let localPath = "./pages" + editedURL + ".html";
    fs.readFile(localPath, (err, data) => {
      if (err) {
        throw err;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (listOfCSSDocs.includes(editedURL)) {
  } else if (listOfJSDocs.includes(editedURL)) {
  } else {
    console.log("Following URL: " + editedURL + " entered 404 failure state.");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is listening on this port!");
});
