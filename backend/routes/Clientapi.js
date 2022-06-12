const express = require("express");
const router = express.Router();
const {
  getallclient,
  registration,
  login,
} = require("../controller/ClientController");
router.route("/register").post(registration);
router.route("/login").post(login);

module.exports=router