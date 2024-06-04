import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import { app } from './app.js'

dotenv.config(
    {
        path: './env'
    }
)

const PORT = process.env.PORT

connectDB()
    .then(() => {
        app.listen(PORT || 8000, () => {
            console.log(`Server is running at port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(`MongoDB Connection Failed`, err);

    })