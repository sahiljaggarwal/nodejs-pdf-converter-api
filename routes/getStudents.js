const express = require('express');
const studentsController= require('../controllers/index');

const router = express.Router();

// Route to get all students' data
router.get('/students', studentsController.getStudents);

module.exports = router;
