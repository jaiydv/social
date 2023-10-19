const express = require("express");

const router = express.Router();
const usercontroller = require("../controllers/user_controllers")




router.get("/signup",usercontroller.signup);
router.post("/signup/register",usercontroller.register);
router.get("/login",usercontroller.login);
router.post("/createSession",usercontroller.createSession);


module.exports = router;