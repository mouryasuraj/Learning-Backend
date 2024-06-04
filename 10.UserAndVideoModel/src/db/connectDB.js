import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database Connected Successfully`, connectionInstance.connection.host);
    } catch (error) {
        console.log(`Database Connection Failed`, error);
    }
}

export default connectDB;