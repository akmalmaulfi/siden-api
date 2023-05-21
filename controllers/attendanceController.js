require("../config/db");
const Attendance = require("../models/attendance");

class AttendanceController {
  static async attendance(req, res) {
    try {
      const { npm, kodeabsen, ip, latitude, longitude } = req.body;
      const attendance = await Attendance.create({
        npm,
        kodeabsen,
        ip,
        latitude,
        longitude,
      });

      if (attendance) {
        return res.status(201).json(attendance);
      }
    } catch (error) {
      console.log(error);
      return res.status(401).json(err);
    }
  }

  static async getAllAttendance(req, res) {
    try {
    } catch (err) {}
  }
}

module.exports = AttendanceController;
