const asyncHandler = require("express-async-handler");
const Attendance = require('../models/attendanceModel');

const showAttendance = asyncHandler(async (req, res) => {
    const attendance = await Attendance.find({ user_id: req.user.id })
    const filtered_attendance = attendance.map(({ date, status }) => ({ date, status }));
    res.status(200).json(filtered_attendance);
});

const markAttendance = asyncHandler(async (req, res) => {
    const date = (new Date()).toDateString();
    const status = req.body.status;

    // Create attendance record for the authenticated user
    const attendanceRecord = await Attendance.create({
      date,
      status,
      user_id: req.user.id
    });

    await attendanceRecord.save();

    res.status(201).json({ message: 'Attendance marked successfully', attendanceRecord });
});
module.exports = { markAttendance, showAttendance };
