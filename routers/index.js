const express = require("express");
const router = express.Router();
const attendanceRouter = require("./attendanceRouter");
const mahasiswaRouter = require("./mahasiswaRouter");

router.use("/attendance", attendanceRouter);
router.use("/mahasiswa", mahasiswaRouter);

module.exports = router;
