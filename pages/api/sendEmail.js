// pages/api/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL; // Replace with your admin email

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'instaadvice <onboarding@resend.dev>',
      // from: 'instaadvice <support@instaadvice.net>',
      to: [adminEmail], // Use your admin email address here
      subject: `InstaAdvice Contact Form New Message ${firstName}`,
      html: `<p><strong>First Name:</strong> ${firstName}</p>
             <p><strong>Last Name:</strong> ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('Email sent successfully:', data);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error });
  }
}