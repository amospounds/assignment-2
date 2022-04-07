var express = require('express');
var router = express.Router();
var indexcontroller= require("../controller/index");
/* GET home page. */

router.get('/',indexcontroller.getHome);

module.exports = router;
