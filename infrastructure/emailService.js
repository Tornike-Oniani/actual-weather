const nodemailer = require('nodemailer');

class EmailService {
  constructor(emailUser, emailPass) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  async sendEmail({ to, subject, body }) {
    const info = await this.transporter.sendMail({
      from: '"Weather App" <weatherapp@example.com>',
      to,
      subject,
      html: tempBody,
    });
    console.log(`Email sent: ${info.messageId}`);
  }
}

module.exports = EmailService;
