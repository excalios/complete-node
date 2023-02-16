const express = require("express");
const path = require("path");

const messagesRouter = require("./router/messages.router");
const friendsRouter = require("./router/friends.router");

const PORT = 3000;
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.info(`${req.method} ${req.url} ${delta} ${res.statusCode}`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends are ...",
    headings: "Indonesia has many Resources",
  });
});
app.use("/messages", messagesRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.info(`Server is listening on ${PORT}`);
});
