const bcrypt = require('bcryptjs')
const {getAllProduct,getProductById} = require('../model/productModel')
exports.getAllProduct = async (req,res) =>{
    const allProduct = await getAllProduct()
    return res.status(201).json(allProduct);
}


exports.getDeltailProduct = async(req,res) =>{
    const id = req.params.id;
    const detailProduct = await getProductById(id);
    return res.status(201).json(detailProduct);
}