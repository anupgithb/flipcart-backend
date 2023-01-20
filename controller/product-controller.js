import Product from "../model/product-schema.js";
import Product1 from "../model/product1-schema.js";


export const getProduct1s = async (request, response) => {
    try {
        // find({}) ==> karne se...sara product aa jyega
        const product1s = await Product1.find({});
        response.json(product1s);
    }catch (error) {

    }
}



export const getProducts = async (request, response) => {
    try {
        // find({}) ==> karne se...sara product aa jyega
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const product = (await Product.findOne({ 'id': request.params.id }))||(await Product1.findOne({ 'id': request.params.id }));
        response.status(200).json(product);
    }catch (error) {
        response.status(500).json({message :error.message})
    }
}
