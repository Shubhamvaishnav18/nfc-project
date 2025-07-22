import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import crypto from "crypto";
import nodemailer from "nodemailer";

//Login User
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel .findOne({email});

        if(!user) {
            return res.json({success: false, message:"User Doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) {
            return res.json({success: false, message:"Invalid credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        console.log("Error");
        res.json({success: false, message:"Error"});
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//Register User
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {

        //Checking is user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        
        if (typeof email !== 'string') {
            const email = req.body.email;
            return res.status(400).json({ error: 'Invalid email input' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }


        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export const updateUserDetails = async (req, res) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "Authorization token required" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const { fullName, phoneNumber, designation, company, email } = req.body;
        const logo = req.file ? req.file.path : null;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }

        user.userDetails = {
            fullName: fullName || user.userDetails?.fullName,
            phoneNumber: phoneNumber || user.userDetails?.phoneNumber,
            designation: designation || user.userDetails?.designation,
            company: company || user.userDetails?.company,
            email: email || user.userDetails?.email,
            logo: logo || user.userDetails?.logo
        };

        await user.save();

        res.status(200).json({ 
            success: true, 
            message: "User details updated successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                userDetails: user.userDetails
            }
        });
    } catch (error) {
        console.error("Error updating user details:", error);
        
        let message = "Error updating user details";
        if (error.name === 'JsonWebTokenError') {
            message = "Invalid token";
        } else if (error.name === 'TokenExpiredError') {
            message = "Token expired";
        }

        res.status(500).json({ 
            success: false, 
            message: message,
            error: error.message 
        });
    }
};

export const addCustomCard = async (req, res) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: "Authorization token required" 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const cardData = req.body;

    const user = await userModel.findById(userId);
    const existingCardIndex = user.customCartData.findIndex(
      card => card._id === cardData._id
    );

    if (existingCardIndex >= 0) {
      user.customCartData[existingCardIndex].quantity += 1;
    } else {
      user.customCartData.push(cardData);
    }

    await user.save();

    res.status(200).json({ 
      success: true, 
      message: existingCardIndex >= 0 ? "Card quantity updated" : "Card added successfully",
      customCartData: user.customCartData
    });
  } catch (error) {
    console.error("Error adding custom card:", error);
    let message = "Error adding custom card";
    if (error.name === 'JsonWebTokenError') message = "Invalid token";
    if (error.name === 'TokenExpiredError') message = "Token expired";

    res.status(500).json({ 
      success: false, 
      message,
      error: error.message 
    });
  }
};
  
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "Email not found" });

    const token = crypto.randomBytes(32).toString("hex");
    const expireTime = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = token;
    user.resetPasswordExpires = expireTime;
    await user.save();

    const resetLink = `https://nfc-project-hdrf.vercel.app/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. Link expires in 1 hour.</p>`
    });

    res.json({ success: true, message: "Reset link sent to your email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.json({ success: false, message: "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.json({ success: false, message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.json({ success: false, message: "Something went wrong" });
  }
};


export { loginUser, registerUser };