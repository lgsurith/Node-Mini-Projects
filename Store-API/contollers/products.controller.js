const Products = require('../models/product.model.js');

const getAllProductsStatic = async(req,res) => {
    res.status(200).json({message : "Product Static Test Route"});
}

const getAllProducts = async (res,res) => { 
    res.status(200).json({message : "Product Test Route"});
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
