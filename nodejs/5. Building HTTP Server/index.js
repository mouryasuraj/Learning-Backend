import http from 'node:http'
import fs from 'node:fs'
const port = 4000;
const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`
    fs.appendFile('log.txt', log, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            switch(req.url){
                case '/': res.end('Home Page')
                break;
                case '/contact':res.end('I am Suraj  Mourya')
                break;
                default:res.end('404 Not Found')
            }
        }
    })
})


server.listen(port, () => {
    console.log(`Server is running at port: `, port);
})