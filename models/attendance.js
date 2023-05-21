require("../config/db");
const mongoose = require("mongoose");

const Attendance = mongoose.model("Attedance", {
  npm: {
    type: String,
    required: true,
  },
  kodeabsen: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

module.exports = Attendance;
