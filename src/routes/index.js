const express = require('express');
const router = express.Router();

router.use('/api/v1/user', require('./users'));
router.use('/api/v1/post', require('./post'));

module.exports = router;