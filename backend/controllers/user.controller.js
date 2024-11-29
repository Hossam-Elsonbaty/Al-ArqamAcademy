import models from './models/user.model.js';
const { userApplication, contactUsModel } = models;

export const getApplications = async (req, res) =>{
  try {
    const applications = await userApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
}
export const createApplication = async (req, res) =>{
  const application = req.body;
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
  if (!application.isParent) {
    if (!application.dob || !application.selectedProgram || !application.gender) {
      return res.status(400).json({ message: "Students must provide Date of Birth and Selected Program" });
    }
  }
  if (application.isParent) {
    if (!application.children || application.children.length < 1) {
      return res.status(400).json({ message: "Parents must register at least one child" });
    }
    const invalidChild = application.children.some(child =>
      !child.firstName || !child.lastName || !child.gender || !child.dob || !child.selectedProgram
    );
    if (invalidChild) {
      return res.status(400).json({ message: "Please fill in all fields for each child" });
    }
  }
  const newApplication = new userApplication(application);
  try {
    await newApplication.save();
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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mostafasonbaty0@gmail.com',
      subject: 'New Application Submitted',
      text: emailContent,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
    res.status(201).json({ success: true, data: newApplication });
  } catch (error) {
    console.error("Error in create application:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const getMessages = async (req,res) =>{
  try {
    const contacts = await contactUsModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
}
export const createMessage = async (req, res) =>{
  const data = req.body;
  console.log(data);
  if(
    !data.name || 
    !data.email || 
    !data.message
  ){
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }
  const newContactUs = new contactUsModel(data);
  try {
    await newContactUs.save()
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mostafasonbaty0@gmail.com',
      subject: 'Contact Us',
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } 
  catch{
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Server error, please try again later.' });
  }
}