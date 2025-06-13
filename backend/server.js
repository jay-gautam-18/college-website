const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Twilio Client
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

// Define schema
const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  department: { type: String, required: true },
  specialization: { type: String, required: true },
  course: { type: String, required: true },
  agree: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now },
  id: { type: String, required: true },
});
const FormModel = mongoose.model('FormSubmission', FormSchema);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint
app.post('/submit', async (req, res) => {
  try {
    // console.log('Received data:', req.body);

    const { name, email, phone, city, state, department, specialization, course, agree, id, submittedAt } = req.body;

    // Save to DB
    const saved = await new FormModel({
      name, email, phone, city, state, department, specialization, course, agree, id, submittedAt
    }).save();

    // Send Email (log any error here)
    await transporter.sendMail({
      from: "LNCT college",
      to: email,
      subject: 'Admission Enquiry Confirmation',
      text: `Dear ${name},

  Thank you for completing the registration form for LNCT College. We have successfully received your details and our admissions team will review your submission.

  We will contact you soon on your provided phone number (${phone}) to discuss the next steps.

  If you have any questions, feel free to reply to this email.

  Best regards,
  LNCT College Admissions Team`
    });

    // Send SMS (optional)
    await twilioClient.messages.create({
      body: `Dear ${name},

  Thank you for completing the registration form for LNCT College. We have successfully received your details and our admissions team will review your submission.

  We will contact you soon on your provided phone number (${phone}) to discuss the next steps.

  If you have any questions, feel free to reply to this email.

  Best regards,
  LNCT College Admissions Team`,
      from: process.env.TWILIO_PHONE,
      to: phone
    });

    res.status(200).json({ message: 'Submission complete' });

  } catch (error) {
    console.error('Error in /submit:', error); // <--- This is the key
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));
