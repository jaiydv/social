const express = require("express");
const router = express.Router();

const user = require("../models/user");


const homeController = require("../controllers/homecontroller");

console.log("router loaded");

router.get("/",homeController.home);
router.get("/signup",homeController.signup);
router.post("/create-signup",homeController.create);
router.use("/users",require("./users.js"))


module.exports = router;

