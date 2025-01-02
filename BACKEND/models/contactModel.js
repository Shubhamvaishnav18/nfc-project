import mongoose from "mongoose";
import validator from "validator"; 

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email) => {
                return validator.isEmail(email);
            },
            message: "Invalid email format",
        },
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const contactModel = mongoose.model("contact", contactSchema);

export default contactModel;
