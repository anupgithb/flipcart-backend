// const express = require('express');

// by ES6 we can easily write
import express, { Router } from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';

 import Connection from './database/db.js';
 import DefaultData from './default.js';
 import DefaultData1 from './default1.js';
 import router from './routes/route.js';

// express ko initialise kr rhe hai yeh wla line se
const app= express();
dotenv.config();

app.use(cors(
    {
        origin:["http://localhost:3000","https://flipkart-clone-r64f.onrender.com"]
    }
));

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',router);


// port number set kr reh hai
 const PORT = process.env.PORT || 8000;

 const USERNAME=process.env.DB_USERNAME;
 const PASSWORD=process.env.DB_PASSWORD;

 const URL=`${process.env.MONGODB_URI}` || `mongodb://${USERNAME}:${PASSWORD}@ac-bv5bmiv-shard-00-00.zludquf.mongodb.net:27017,ac-bv5bmiv-shard-00-01.zludquf.mongodb.net:27017,ac-bv5bmiv-shard-00-02.zludquf.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-hvx4ex-shard-0&authSource=admin&retryWrites=true&w=majority`;


 Connection(URL);
 
// server bana rhe hai express ka......listen ka help se
// .listen me do parameters hota hai ------>
// 1. port number: matlab konsa port me hmko listen krna hai ka server ko set up krna hai
// 2. callback func: server k chalne k baad kuch action perform krwana chahte 
//     ho toh hmko call back function me daal dete hai

app.listen(PORT,()=>console.log("Server is running succesfully on port 8000mn"));

DefaultData();
DefaultData1();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '1',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'anupdutta@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'

