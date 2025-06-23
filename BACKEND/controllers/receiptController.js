import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generateReceipt = async (req, res) => {
  try {
    const { paymentId, orderId, amount, userEmail, date } = req.body;

    const receiptsDir = path.join(__dirname, "../receipts");
    if (!fs.existsSync(receiptsDir)) {
      fs.mkdirSync(receiptsDir);
    }

    const fileName = `receipt-${paymentId}.pdf`;
    const filePath = path.join(receiptsDir, fileName);

    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(22).text("Payment Receipt", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Order ID     : ${orderId}`);
    doc.text(`Payment ID   : ${paymentId}`);
    doc.text(`Amount Paid  : ₹${amount.toFixed(2)}`);
    doc.text(`User Email   : ${userEmail}`);
    doc.text(`Date         : ${new Date(date).toLocaleString()}`);
    doc.end();

    await new Promise((resolve, reject) => {
      stream.on("finish", resolve);
      stream.on("error", reject);
    });

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
