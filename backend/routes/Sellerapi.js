const express = require("express");
const router = express.Router();
const {propertydisplay,SellerList} = require("../controller/SellerController")
router.route("/property").get(propertydisplay)
router.route("/sellers").get(SellerList)
module.exports = router;