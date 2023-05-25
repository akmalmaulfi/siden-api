const Mahasiswa = require("../models/mahasiswa")
const Admin = require("../models/admin")
const { verifyToken } = require("../helpers/jwt")

const authentication = (req, res, next) => {
  const npm = req.body.npm
  const url = req.baseUrl
  const method = req.method
  const token = req.get("token")

  if (url === "/attendance") {
    if (method === "POST") {
      Mahasiswa.findOne({ npm })
        .then((mhs) => {
          if (mhs) {
            return next()
          } else {
            return res.status(401).json({
              name: "Absen Gagal",
              msg: "NPM tidak ditemukan",
            })
          }
        })
        .catch((err) => {
          console.log()
          return res.status(401).json({
            err,
          })
        })
    } else if (method === "GET") {
      if (!token) {
        return res.status(401).json({
          name: "JWT Error",
          msg: "JWT must be provided",
        })
      }
      const userDecoded = verifyToken(token)

      const matchAdmin = Admin.findById({ _id: userDecoded.id })
        .then((admin) => {
          if (admin) {
            return next()
          }
        })
        .catch((err) => {
          console.log(err)
          return res.status(401).json(err)
        })
    }
  } else if (url === "/mahasiswa") {
    Mahasiswa.findOne({ npm })
      .then((mhs) => {
        if (mhs) {
          return res.status(401).json({
            message: "NPM sudah terdaftar, silahkan gunakan yang lain",
          })
        } else {
          return next()
        }
      })
      .catch((err) => {
        console.log()
        return res.status(401).json({
          err,
        })
      })
  } else if (url === "/admin") {
    if (!token) {
      return res.status(401).json({
        name: "JWT Error",
        msg: "JWT must be provided",
      })
    }
    const userDecoded = verifyToken(token)

    const matchAdmin = Admin.findById({ _id: userDecoded.id })
      .then((admin) => {
        if (admin) {
          return next()
        }
      })
      .catch((err) => {
        console.log(err)
        return res.status(401).json(err)
      })
  }
}

module.exports = authentication
