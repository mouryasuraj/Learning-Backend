// require('dotenv').config({path:'./env'})  default syntax to import things
import dotenv from 'dotenv'

// import mongoose from 'mongoose'
// import express from 'express'
// import { DB_NAME } from './constant.js';
import connectDB from './db/database.js';

dotenv.config({
    path: './env'
})

connectDB()



/*
const app = express();
// This is not best approach but we can do this way also
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err)=>{
            console.log("Error: ",err);
            throw err
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: "+error);
        throw error
    }

})()
*/