const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "This is messages",
    friend: "Ravi",
  });
  //res.sendFile(path.join(__dirname, "..", "public", "centaurus.jpeg"));
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
