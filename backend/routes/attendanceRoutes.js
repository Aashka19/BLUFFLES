const express = require("express");
const router = express.Router();
const { markAttendance, showAttendance } = require("../controllers/attendanceController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.post("/markAttendance", markAttendance);
router.get("/stats/:id", showAttendance);

module.exports = router;