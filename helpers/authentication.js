const Mahasiswa = require("../models/mahasiswa");

const authentication = (req, res, next) => {
  const npm = req.body.npm;
  const url = req.baseUrl;

  if (url === "/attendance") {
    Mahasiswa.findOne({ npm })
      .then((mhs) => {
        if (mhs) {
          return next();
        } else {
          return res.status(401).json({
            name: "Absen Gagal",
            msg: "NPM tidak ditemukan",
          });
        }
      })
      .catch((err) => {
        console.log();
        return res.status(401).json({
          err,
        });
      });
  } else if (url === "/mahasiswa") {
    Mahasiswa.findOne({ npm })
      .then((mhs) => {
        if (mhs) {
          return res.status(401).json({
            message: "NPM sudah terdaftar, silahkan gunakan yang lain",
          });
        } else {
          return next();
        }
      })
      .catch((err) => {
        console.log();
        return res.status(401).json({
          err,
        });
      });
  }
};

module.exports = authentication;
