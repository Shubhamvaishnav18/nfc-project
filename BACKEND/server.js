import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import contactRouter from "./routes/contactRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import receiptRouter from "./routes/receiptRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 //app config
 const app = express();
 const port = process.env.PORT || 4000;

 //middleware
 app.use(express.json());
 app.use(cors());

 //db connection
 connectDB();

 app.use("/receipts", express.static(path.join(__dirname, "receipts")));

 //api endpoint
 app.use("/api/user", userRouter);
 app.use("/api/contact", contactRouter);
 app.use("/api/cart", cartRouter);
 app.use("/api/order", orderRouter);
 app.use("/api/receipts", receiptRouter);

 app.get("/", (req, res) => {
    res.send("API Working");
 });

 app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
 });

 


 