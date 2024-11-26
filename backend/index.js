import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userApplication from './models/user.model.js';
import cors from 'cors';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
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
