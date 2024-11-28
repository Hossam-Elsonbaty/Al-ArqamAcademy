import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userApplication from './models/user.model.js';
import cors from 'cors';
import nodemailer from 'nodemailer';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

app.post('/api/users-application', async (req, res) => {
  const application = req.body;
  // Validate common fields for all applications
  if (
    !application.firstName || 
    !application.lastName || 
    !application.email || 
    !application.phoneNumber || 
    !application.address || 
    !application.city || 
    !application.zipCode
  ) {
    return res.status(400).json({ message: "Please fill in all required fields" });
  }
  // Additional validation for students (isParent = false)
  if (!application.isParent) {
    if (!application.dob || !application.selectedProgram || !application.gender) {
      return res.status(400).json({ message: "Students must provide Date of Birth and Selected Program" });
    }
  }
  // Additional validation for parents (isParent = true)
  if (application.isParent) {
    if (!application.children || application.children.length < 1) {
      return res.status(400).json({ message: "Parents must register at least one child" });
    }
    // Validate each child in the application
    const invalidChild = application.children.some(child =>
      !child.firstName || !child.lastName || !child.gender || !child.dob || !child.selectedProgram
    );
    if (invalidChild) {
      return res.status(400).json({ message: "Please fill in all fields for each child" });
    }
  }
  // Save the application to the database
  const newApplication = new userApplication(application);
  try {
    await newApplication.save();
    // Prepare the email content
    let emailContent = `
      A new application has been submitted:
      Name: ${application.firstName} ${application.lastName}
      Email: ${application.email}
      Phone: ${application.phoneNumber}
      Gender: ${application.gender}
      Address: ${application.address}
      City: ${application.city}
      Zip Code: ${application.zipCode}
    `;
    if (!application.isParent) {
      emailContent += `
        Role: Student
        Date of Birth: ${application.dob}
        Selected Program: ${application.selectedProgram}
      `;
    } else {
      emailContent += `
        Role: Parent
        Children:
      `;
      application.children.forEach((child, index) => {
        emailContent += `
          Child ${index + 1}:
          Name: ${child.firstName} ${child.lastName}
          Gender: ${child.gender}
          Date of Birth: ${child.dob}
          Selected Program: ${child.selectedProgram}
        `;
      });
    }
    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mostafasonbaty0@gmail.com',
      subject: 'New Application Submitted',
      text: emailContent,
    };
    // Send the email
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //   } else {
    //     console.log('Email sent:', info.response);
    //   }
    // });
    // Send a success response
    res.status(201).json({ success: true, data: newApplication });
  } catch (error) {
    console.error("Error in create application:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening to port`);
});
