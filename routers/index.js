const express = require("express")
const router = express.Router()
const attendanceRouter = require("./attendanceRouter")
const adminRouter = require("./adminRouters")
const mahasiswaRouter = require("./mahasiswaRouter")

router.use("/admin", adminRouter)
router.use("/attendance", attendanceRouter)
router.use("/mahasiswa", mahasiswaRouter)

module.exports = router
