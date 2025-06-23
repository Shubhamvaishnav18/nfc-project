import express from "express";
import { generateReceipt } from "../controllers/receiptController.js";

const receiptRouter = express.Router();

receiptRouter.post("/receipt", generateReceipt);

export default receiptRouter;