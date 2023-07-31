const express = require('express');
const pdfController = require('../controllers/index');
// const generatePdf = require('../controllers/generatePdf');

const router = express.Router();

// Route to get all students' data
router.get('/generate-pdf/:userId', pdfController.generatePdf);


module.exports = router;