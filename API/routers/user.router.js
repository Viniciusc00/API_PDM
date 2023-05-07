const router = require('express').Router();
const UserController = require("../controller/user.controller");

router.post('/registration',UserController.register);
router.post('/login',UserController.login);
router.post('/recoverpassword',UserController.recoverpassword);

module.exports = router;