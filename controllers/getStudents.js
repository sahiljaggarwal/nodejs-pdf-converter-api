const studentService = require('../services/studentService');

const getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.json(students);
  } catch (error) {
    console.error('Error fetching all students:', error);
    res.status(500).send('Error fetching students');
  }
};

module.exports = getStudents
