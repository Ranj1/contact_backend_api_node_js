const express = require("express");
const router = express.Router();

const {registerUser,loginUser,currentUser} = require("../controller/userController");


router.post("/register", registerUser);

router.post("/login",loginUser);

router.post("/current",currentUser);

module.exports = router;