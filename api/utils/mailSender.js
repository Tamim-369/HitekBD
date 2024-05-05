import nodemailer from "nodemailer";

export default async function sendEmail(
  senderEmail,
  senderPassword,
  recipientEmail,
  subject,
  text
) {
  try {
    // Create Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    // Define email options
    let mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: text,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Error sending email
  }
}
