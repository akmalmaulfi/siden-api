const express = require("express")
const router = express.Router()
const { registerAdmin, loginAdmin } = require("../controllers/adminController")
const authentication = require("../middlewares/authentication")

router.use(authentication)
router.post("/register", registerAdmin)
router.post("/login", loginAdmin)

module.exports = router
