const Admin = require("../models/admin")
const { hashPassword, comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class AdminController {
  static async registerAdmin(req, res) {
    try {
      const { username, password } = req.body

      const hashedPassword = hashPassword(password)
      const admin = await Admin.create({ username, password: hashedPassword })

      if (admin) {
        return res.status(201).json({ admin })
      } else {
        return res.status(401).json({
          msg: "Gagal menambahkan admin",
        })
      }
    } catch (error) {
      if (error.code === 11000) {
        return res.status(401).json({
          name: "Username sudah terdaftar",
          username: error.keyValue.username,
        })
      }
      return res.status(401).json(error)
    }
  }

  static async loginAdmin(req, res) {
    try {
      const { username, password } = req.body

      const admin = await Admin.findOne({ username })
      if (!admin) {
        return res.status(401).json({ message: "Username tidak valid" })
      }
      const checkPassword = comparePassword(password, admin.password)
      if (!checkPassword) {
        return res.status(401).json({ message: "Password tidak valid" })
      }
      if (checkPassword) {
        let payload = {
          id: admin._id,
          username: admin.username,
        }
        const token = generateToken(payload)
        return res.status(201).json({ token })
      }
    } catch (err) {
      return res.status(401).json(err)
    }
  }
}

module.exports = AdminController
