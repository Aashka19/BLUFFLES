const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser, editUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser); // Changed route path
router.put("/:id", validateToken, editUser); // Changed route path

module.exports = router;
