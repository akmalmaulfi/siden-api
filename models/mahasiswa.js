const mongoose = require("mongoose");

const Mahasiswa = mongoose.model("Mahasiswa", {
  npm: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  fakultas: {
    type: String,
    required: true,
  },
  prodi: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = Mahasiswa;
