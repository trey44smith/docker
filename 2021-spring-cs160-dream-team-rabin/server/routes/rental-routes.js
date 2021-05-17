const express = require('express');
const router = express.Router();
const {rental} = require('../controller/rental/rental');
const {postrental} = require('../controller/rental/postrental');

router.get('/rental', rental);
router.post('/rental', postrental);


module.exports = router;
