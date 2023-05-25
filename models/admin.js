const mongoose = require("mongoose")

const Admin = mongoose.model("Admin", {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = Admin
