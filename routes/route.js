import express from "express";
import { getProducts ,getProductById,getProduct1s} from "../controller/product-controller.js";
// import {getProduct1s} from "../controller/product1-controller.js";

import { addPaymentGateway, paymentResponse } from "../controller/payment-controller.js";

const router = express.Router();


import { userLogIn, userSignup } from "../controller/user-controller.js";

router.post('/signup',userSignup);
router.post('/login',userLogIn);

router.get('/products',getProducts);
router.get('/product1s',getProduct1s);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback', paymentResponse)
export default router;