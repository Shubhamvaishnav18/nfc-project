import nodemailer from 'nodemailer';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "shubh050903@gmail.com",
    pass: "upyo xngk ngei ybxb",
  },
});

const generateReceipt = async (req, res) => {
  try {
    const { paymentId, orderId, amount, userEmail, date } = req.body;

    const receiptsDir = path.join(__dirname, "../receipts");
    if (!fs.existsSync(receiptsDir)) {
      fs.mkdirSync(receiptsDir);
    }

    const fileName = `receipt-${paymentId}.pdf`;
    const filePath = path.join(receiptsDir, fileName);

    // Generate PDF
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(22).text("Payment Receipt", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Order ID     : ${orderId}`);
    doc.text(`Payment ID   : ${paymentId}`);
    doc.text(`Amount Paid  : ₹${amount.toFixed(2)}`);
    doc.text(`Email        : ${userEmail}`);
    doc.text(`Date         : ${new Date(date).toLocaleString()}`);
    doc.end();

    await new Promise((resolve, reject) => {
      stream.on("finish", resolve);
      stream.on("error", reject);
    });

    const mailOptions = {
      from: "shubh050903@gmail.com",
      to: userEmail,
      subject: `Your Order Receipt - ${orderId}`,
      text: `Thank you for your order! Your payment of ₹${amount.toFixed(2)} has been received.\n\nOrder ID: ${orderId}\nPayment ID: ${paymentId}`,
      html: `
        <div>
          <h2>Thank you for your order!</h2>
          <p>Your payment of <strong>₹${amount.toFixed(2)}</strong> has been received.</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Payment ID:</strong> ${paymentId}</p>
          <p>Please find your receipt attached.</p>
          <p>If you have any questions, please contact our support team.</p>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          path: filePath,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      receiptUrl: `/receipts/${fileName}`,
    });
  } catch (error) {
    console.error("Error generating receipt:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { generateReceipt };