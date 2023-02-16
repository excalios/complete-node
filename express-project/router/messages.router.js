const { Router } = require("express");
const messagesController = require("../controllers/messages.controller");

const router = Router();

router.get("/", messagesController.getMessages);
router.post("/", messagesController.postMessage);

module.exports = router;
