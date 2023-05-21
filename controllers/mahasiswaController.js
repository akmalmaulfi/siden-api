require("../config/db");
const Mahasiswa = require("../models/mahasiswa");

class MahasiswaController {
  static async createMahasiswa(req, res) {
    try {
      const { npm, nama, fakultas, prodi, status } = req.body;
      const mahasiswa = await Mahasiswa.create({
        npm,
        nama,
        fakultas,
        prodi,
        status,
      });
      if (mahasiswa) {
        return res.status(201).json({ mahasiswa });
      }
    } catch (err) {
      console.log(err);
      return res.status(401).json(err);
    }
  }
}

module.exports = MahasiswaController;
