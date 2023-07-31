const PDFDocument = require('pdfkit');
const dbConnect = require('../db/dbConnect');
const mongoose = require('mongoose');

exports.generatePDFData = async (userId) => {
  try {
    const collection = await dbConnect();
    const objectIdUserId = new mongoose.Types.ObjectId(userId);
    const user = await collection.findOne({ user: objectIdUserId });

    if (!user) {
      throw new Error('User not found');
    }

    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const buffers = [];

      doc.on('data', (chunk) => buffers.push(chunk));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });

     // Add content to the PDF using user data
     doc.fontSize(24).text(`Name: ${user.firstName} ${user.lastName}`, { align: 'center' });
     doc.fontSize(16).text(`Email: ${user.email}`, { align: 'center' });
     doc.fontSize(16).text(`Gender: ${user.gender}`, { align: 'center' });
     doc.fontSize(16).text(`Age: ${user.age}`, { align: 'center' });
     doc.fontSize(16).text(`Course Applied: ${user.courseApplied}`, { align: 'center' });
     doc.fontSize(16).text(`Contact No: ${user.contactNo}`, { align: 'center' });
     doc.fontSize(16).text(`Parents No: ${user.parentsNo || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Residence Address: ${user.residenceAddress || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`City: ${user.city}`, { align: 'center' });
     doc.fontSize(16).text(`State: ${user.state || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Pincode: ${user.pincode || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Qualification: ${user.qualification.join(', ') || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`University: ${user.university || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Grade: ${user.grade || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Birthday: ${user.birthday || 'N/A'}`, { align: 'center' });
     doc.fontSize(16).text(`Attendance: ${user.attendance || 0}`, { align: 'center' });
     doc.fontSize(16).text(`Mother's Name: ${user.motherName || 'N/A'}`, { align: 'center' });
      doc.fontSize(16).text(`Father's Name: ${user.fatherName || 'N/A'}`, { align: 'center' });

      doc.end();
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
