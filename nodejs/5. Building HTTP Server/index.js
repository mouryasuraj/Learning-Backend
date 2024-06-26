import http from 'node:http'    //By using http package we can build our own server
import fs from 'node:fs'


const server = http.createServer((req, res) => {
    console.log(req.connection.remoteAddress);  //req is a very big object. it has the information of client side
    const log = `${Date.now()}: ${req.url} New Request Received\n`
    fs.appendFile('log.txt', log, (err, data) => {
        if (err) {
            res.end(err)
        } else {
            // here we can send conditional msg according to the request url
            switch(req.url){
                case '/': res.end("Home Page")
                break;
                case '/contact':res.end("I am Suraj Mourya")
                break;
                default: res.end("404 Not Found")
            }
            
        }
    })

})

console.log("Outside");
const port = 4000;


server.listen(port, () => console.log(`Server is running at port: `, port))
