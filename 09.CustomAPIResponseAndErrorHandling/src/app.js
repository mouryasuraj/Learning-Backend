import express from 'express'
import cookieParser from 'cookie-parser'   //Cookie parsre is used to get and set the browser cookies 
import cors from 'cors'

const app = express()

app.use(cors())  //This is a common way to implement CORS
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))   //This is another way to implement CORS function

app.use(express.json({
    limit:"10kb" //we can set the limit of coming json
}))

app.use(express.urlencoded({
    extended:true,
    limit:'16kb'
}))  //urlencoded is used to convert the submitted form or the comming data in the form of url encoded

app.use(express.static("public"))    //The express.static function in Express.js is a built-in middleware function that serves static files such as images, CSS files, JavaScript files, and other assets to clients. It is used to serve files that are not dynamically generated but rather stored directly on the file system.

app.use(cookieParser())


export {app}