const express = require('express')
const app = express()
const userRouter = require('./routes/routes')
const productRouter = require('./routes/productRoute')
require('dotenv').config()


app.use(express.json())

app.use('/ecom/auth',userRouter)
app.use('/ecom/product',productRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})