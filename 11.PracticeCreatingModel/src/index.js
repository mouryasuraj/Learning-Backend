import connectDB from "./db/connectDB.js";
import dotenv from 'dotenv'
import { app } from "./app.js";

dotenv.config(
    {
        path:'./env'
    }
)

const PORT = process.env.PORT


connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at port: ${PORT}`);
    })
})
.catch(err => {
    console.log("Database Connection Failed: ",err);
})