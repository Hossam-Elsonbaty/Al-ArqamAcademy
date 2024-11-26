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
  service: 'Gmail', // Or use your preferred email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

app.post('/api/users-application', async (req, res) => {
  const application = req.body;
  if(
    !application.firstName || !application.lastName || !application.email || !application.phoneNumber
    || !application.gender || !application.dob || !application.address || !application.city
    || !application.zipCode || !application.selectedProgram || !application.student
  ){
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  console.log(application);
  const newApplication = new userApplication(application);
  try {
    await newApplication.save();
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'mostafasonbaty0@gmail.com', // Recipient
      subject: 'New Application Submitted',
      text: `
        A new application has been submitted:
        Name: ${application.firstName} ${application.lastName}
        Email: ${application.email}
        Phone: ${application.phoneNumber}
        Gender: ${application.gender}
        Date of Birth: ${application.dob}
        Address: ${application.address}
        City: ${application.city}
        Zip Code: ${application.zipCode}
        Selected Program: ${application.selectedProgram}
        Student: ${application.student}
        `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
    res.status(201).json({success: true, data: newApplication})
  } catch (error) {
    console.error("Error in create application: ", error.message);
    res.status(500).json({success: false, message: "server Error"})
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening to port`);
});
