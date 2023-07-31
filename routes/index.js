const express = require('express')
const pdfRoutes = require('./pdfStudents')
const studentRoutes = require('./getStudents')
const router = express.Router();

router.use('/pdf', pdfRoutes);
router.use('/', studentRoutes)

module.exports = router;