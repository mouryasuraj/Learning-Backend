import mongoose from "mongoose";
import { DB_NAME } from '../contants.js';


const databaseConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database Connected Successfully`, connectionInstance.connection.host);
    } catch (error) {
        console.error(`Database Connection Failed`, error);
    }
}

export default databaseConnect;