const pool =require('../config/database')

const getAllProduct = async()=>{
    const result  =  await pool.query('Select * from products')
    return result.rows;
}

const getProductById = async(id)=>{
    const result = await pool.query('Select * from products where id= $1',[id]);
    return result.rows[0];
}

module.exports ={getAllProduct,getProductById}