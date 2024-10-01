const express = require('express')
const app = express()
const apiRoute = require('./routes/routes')
require('dotenv').config()


app.use(express.json())

app.use('/ecom/auth',apiRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})