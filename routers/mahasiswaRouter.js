const express = require("express")
const router = express.Router()
const { createMahasiswa } = require("../controllers/mahasiswaController")
const authentication = require("../middlewares/authentication")

router.use(authentication)
router.post("/", createMahasiswa)

module.exports = router
