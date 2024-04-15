const express = require("express");
const router = express.Router();
const friendListController = require("../controller/friendlist-controller")

router.route('/friendlists').get(friendListController.getAllUsers);

router.route("/friendlists/:id").get(friendListController.getUserById);

module.exports = router;