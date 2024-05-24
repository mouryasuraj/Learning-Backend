import dotenv from 'dotenv'
import databaseConnect from "./db/database.js";

dotenv.config({
    path:'./env'
})



databaseConnect()