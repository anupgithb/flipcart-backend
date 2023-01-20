import Product1 from "../model/product1-schema.js";


export const getProduct1s = async (request, response) => {
    try {
        // find({}) ==> karne se...sara product aa jyega
        const product1s = await Product1.find({});
        response.json(product1s);
    }catch (error) {

    }
}

