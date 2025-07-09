import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: "shubh050903@gmail.com",
    pass: "upyo xngk ngei ybxb",
  },
});

// Function to send email receipt
export const sendEmailReceipt = async (orderDetails, userEmail, receiptUrl) => {
  try {
    // Read the EJS template
    const templatePath = path.join(__dirname, '../views/emailReceipt.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Render the template with order data
    const html = ejs.render(template, {
      orderId: orderDetails.orderId,
      paymentId: orderDetails.paymentId,
      date: new Date(orderDetails.date).toLocaleDateString(),
      items: orderDetails.items,
      subtotal: orderDetails.subtotal,
      deliveryFee: orderDetails.deliveryFee,
      total: orderDetails.total,
      customerName: orderDetails.customerName,
      receiptUrl: receiptUrl
    });

    // Email options
    const mailOptions = {
      from: "shubh050903@gmail.com",
      to: userEmail,
      subject: `Your Order #${orderDetails.orderId} Receipt`,
      html: html,
      attachments: [
        {
          filename: `Receipt_${orderDetails.orderId}.pdf`,
          path: receiptUrl
        }
      ]
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email receipt:', error);
    return false;
  }
};

// module.exports = { sendEmailReceipt };
// export default sendEmailReceipt;