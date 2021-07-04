const express = require('express');
const router = express.Router();

//controllers
const page = require("../controllers/page");

router.get('/', page.home);

module.exports = router;