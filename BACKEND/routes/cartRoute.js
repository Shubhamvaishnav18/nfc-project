import express from "express";
import { addToCart, getCart, removeFromCart, addToCustomCart, removeFromCustomCart, getCustomCart} from "../controllers/cartControllers.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
cartRouter.post("/addcustomcard", authMiddleware, addToCustomCart);
cartRouter.post("/removecustomcard", authMiddleware, removeFromCustomCart);
cartRouter.post("/getcustomcard", authMiddleware, getCustomCart);



export default cartRouter;




//cartRouter.post("/getCustomCards", authMiddleware, getCustomCards);