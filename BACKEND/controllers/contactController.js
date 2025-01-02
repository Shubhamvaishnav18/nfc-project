import contactModel from "../models/contactModel.js";
import validator from "validator";

// Create Contact
const createContact = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate fields
    if (!name || !email || !phone || !message) {
        return res.json({ success: false, message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Invalid email format" });
    }

    try {
        const newContact = new contactModel({
            name,
            email,
            phone,
            message
        });

        await newContact.save();
        res.json({ success: true, message: "Contact saved successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server error" });
    }
};

export {createContact};