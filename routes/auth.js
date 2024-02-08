const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.get("/profile", authController.getProfile);
router.post("/profile", authController.postProfile);



module.exports = router;
