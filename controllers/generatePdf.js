const express = require('express');
const pdfService = require('../services/pdfService');

const generatePdf = async (req, res) => {
  const userId = req.params.userId;

  try {
    const pdfData = await pdfService.generatePDFData(userId);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="student.pdf"`);

    res.send(pdfData);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
};

module.exports = generatePdf;