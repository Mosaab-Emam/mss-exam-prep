const express = require("express");
const router = express.Router();
const IP = require("./model");

router.post("/:ip", (req, res) => {
  const ip = new IP({ ip: req.params.ip });
  ip.save();
});

module.exports = router;
