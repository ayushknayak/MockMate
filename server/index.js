import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectdb.js'
dotenv.config()
const app=express()


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is up and Running at http://localhost:${PORT}`)
    connectDB()
})