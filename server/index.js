const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      id: 1,
      name: "Shinn Thant",
    })
  );
});

server.listen(3000, () => {
  console.log("Server is listening");
});
