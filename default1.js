// import React from 'react';
import { product1s } from './constants/data.js';
import Product1 from './model/product1-schema.js';

const DefaultData1 = async() => {
    try{
        await Product1.insertMany(product1s);
        console.log("Data imported sucessfully in product 1");
    }catch(error)
    {
        console.log("Error while inserting in product1 : ", error.message);
    }
}

export default DefaultData1;