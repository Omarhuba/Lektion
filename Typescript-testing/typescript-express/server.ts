import express from 'express'
import dotenv from 'dotenv';
// import 'dotenv/config'


const app = express()

dotenv.config();



const PORT = process.env.PORT || 3333;

app.listen(PORT,()=>{
    console.log(`SERVER STARTED ON PORT ${PORT}`);
})