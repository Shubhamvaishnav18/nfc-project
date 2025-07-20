import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

//remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

//fetch user cart data
const getCart = async (req, res) => {
    try {
        // Find user by ID
        let userData = await userModel.findById(req.body.userId);

        // If no user is found, return a 404 error
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        let cartData = userData.cartData || {}; 

        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error while fetching cart data" });
    }
}

//add custom card data
const addToCustomCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let customCartData = await userData.customCartData;

        if(!customCartData[req.body.itemId]) {
            customCartData[req.body.itemId] = 1;
        }
        else {
            customCartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{customCartData});
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
};

//remove card data form customCartData
const removeFromCustomCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let customCartData = userData.customCartData || [];

        const itemIndex = customCartData.findIndex(item => item._id === req.body.itemId);

        if (itemIndex !== -1) {
            if (customCartData[itemIndex].quantity > 1) {
                customCartData[itemIndex].quantity -= 1;
            } else {
                customCartData.splice(itemIndex, 1);
            }
        }

        await userModel.findByIdAndUpdate(req.body.userId, { customCartData });
        res.json({ success: true, message: "Removed from custom cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


//fetch customCartData
const getCustomCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        let customCartData = userData.customCartData || [];  

        res.json({ success: true, customCartData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error while fetching cart data" });
    }
}; 

export {addToCart, removeFromCart, getCart, addToCustomCart, removeFromCustomCart, getCustomCart};