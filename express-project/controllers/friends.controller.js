const model = require('../models/friends.model');

function getFriends(_, res) {
  res.json(model);
}

function getFriend(req, res) {
  const id = +req.params.id;
  const friend = model[id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}

function addFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Property name not found",
    });
  }
  const newFriend = {
    id: model[model.length - 1].id + 1,
    name: req.body.name,
  };
  model.push(newFriend);
  res.status(201).json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  addFriend,
}
