const express = require("express");
const router = express.Router();
const { attendance } = require("../controllers/attendanceController");
const authentication = require("../helpers/authentication");

router.use(authentication);
router.post("/", attendance);

module.exports = router;
