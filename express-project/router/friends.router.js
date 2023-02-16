const { Router } = require('express');
const friendsController = require("../controllers/friends.controller");

const router = Router();

router.get("/", friendsController.getFriends);
router.get("/:id", friendsController.getFriend);
router.post("/", friendsController.addFriend);

module.exports = router;
