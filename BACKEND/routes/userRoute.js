import express from "express";
import multer from "multer";
import { loginUser, registerUser, updateUserDetails, addCustomCard } from "../controllers/userControllers.js";

const userRouter = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Save files in 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Unique file name
    },
  });

  const upload = multer({ storage });

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/updateUserDetails", upload.single("logo"), updateUserDetails);
userRouter.post("/addCustomCard", addCustomCard);

export default userRouter; 