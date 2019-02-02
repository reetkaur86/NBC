const express = require('express');
const menuRouter = require('./api/menu');

const router = express.Router();
router.use('/menu', menuRouter);

module.exports = router;
