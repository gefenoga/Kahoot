const express = require ('express');
const userController = require("./user.controller")

const router  = express.Router(); 

router.post("/user/signup" , userController.signup)
router.put("/user/login", userController.login)
router.delete("/user/:userID", userController.deleteUser)
module.exports = router