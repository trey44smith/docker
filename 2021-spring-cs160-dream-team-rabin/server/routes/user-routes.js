const express = require('express');
const router = express.Router();

const {signIn} = require('../controller/user/siginin');
const { getuser } = require('../controller/user/getuser');
const { signup } = require('../controller/user/signup');
const { signout } = require('../controller/user/signout');

router.post('/user/signin', signIn);
router.post('/user/signup', signup);
router.get('/user/signout', signout);
router.get('/user/account', getuser);


module.exports = router;