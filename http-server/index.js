const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 1,
    text: "what is friends",
  },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (items.length === 3) {
      res.end(JSON.stringify(friends[items[2]]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "messages are empty",
      })
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
