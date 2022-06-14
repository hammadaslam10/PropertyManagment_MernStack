const express = require("express");
const router = express.Router();
const {
  getallclient,
  registration,
  login,
  logOut,
  BuyerProfile,
} = require("../controller/ClientController");
router.route("/register").post(registration);
router.route("/login").post(login);
router.route("/").get(getallclient);
router.route("/logout").get(logOut);
router.route("/me").get(BuyerProfile);
module.exports = router;
