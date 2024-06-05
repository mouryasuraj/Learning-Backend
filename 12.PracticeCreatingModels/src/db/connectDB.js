import mongoose from 'mongoose'
import { DB_NAME } from '../contstants.js'

const connectDB = async () =>{
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database Connected Successfully`, connectionIntance.connection.host);
    } catch (error) {
        console.log(`Database Connection Failed`, error);
    }
} 

export default connectDB;