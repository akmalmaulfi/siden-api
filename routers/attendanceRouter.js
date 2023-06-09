const express = require("express")
const router = express.Router()
const {
  attendance,
  getAllAttendance,
} = require("../controllers/attendanceController")
const authentication = require("../middlewares/authentication")

router.use(authentication)
router.post("/", attendance)
router.get("/", getAllAttendance)

module.exports = router
