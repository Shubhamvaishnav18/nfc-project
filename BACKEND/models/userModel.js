import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    cartData : {
        type : Object,
        default : {}
    },    
    customCartData: [{
      _id: String,
      title: String,
      subTitle: String,
      details: String,
      cardColor: String,
      borderColor: String,
      nfcColor: String,
      logo: String,
      name: String,
      price: Number,
      quantity: Number,
      createdAt: String
    }],  
    userDetails: {
        type: {
          fullName: { type: String },
          phoneNumber: { type: Number },
          designation: { type: String,},
          company: { type: String },
          email: { type: String },
          logo: { type: String }, 
        },
        default: {}, // Default to an empty object
      },    
},
    {minimize : false});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;