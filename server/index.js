const http = require("http");

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "shinn thant",
  },
  {
    id: 2,
    name: "kaung thant",
  },
  {
    id: 3,
    name: "min thant",
  },
];

server.on("request", (req, res) => {
  const route = req.url.split("/");
  console.log(route);
  if (route[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (+route.length === 3) {
      const friend_id = route[2];
      const friend = friends.find((item) => item.id === +friend_id);
      res.end(JSON.stringify(friend));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (route[1] === "writeHeader") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Hello Im NodeJS Duddy");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening");
});
