/*

// Custome API response and error handling

1. import express and store it in a variable "app" and then export it and then import it in index.js and when DB is connected then app should listen on some port number
2. Express():
    a.
3. Middleware:
4. app.use() use function is used when we have to use the middleware in our app
5.CORS():
    1. Enable all cors request:
        app.use(cors())
    2. Enable cors for a particular path:
        app.get('/auth/login', cors(), (req,res,next)=>{
            res.json({msg:'This cors is enable for a single route'})
        })
    3. This is how we can configure cors setting:
        var corsOptions = {
            origin: 'http://example.com',
            optionsSuccessStatus: 200 
        },
        var corsOptions = {
            origin: process.env.CORS_ORIGIN,
            optionsSuccessStatus: 200 
        }
    4. Learn more about CORS: https://www.npmjs.com/package/cors
    5. app.use(express.json({
            limit:"10kb" //we can set the limit of coming json
       }))

*/