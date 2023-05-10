const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch('/updateMyPassword',authController.protect, authController.updatePassword);

router.post("/post/:id", authController.protect, authController.likeUnlikePost)

module.exports = router;
