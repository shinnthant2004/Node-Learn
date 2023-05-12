const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    res.statusCode = 200;
    res.write("<html>");
    res.write("<body>");
    res.write("<p>Shinn Thant</p>");
    res.write("<p>Thar Htet</p>");
    res.write("<p>Kaung Kaung</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening");
});
