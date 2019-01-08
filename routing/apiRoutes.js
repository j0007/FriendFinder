var friends = require("../data/friends.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(friends);
});

router.post("/", (req, res) => {
  const newFriend = req.body;
  res.send(findMatch(newFriend, friends));
  friends.push(newFriend);
});

module.exports = router;