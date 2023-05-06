const router = require('express').Router();
const MenuController = require("../controller/menu.controller");

router.get('/menu', MenuController.listmenu);


module.exports = router;