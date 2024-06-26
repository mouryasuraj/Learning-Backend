import http from 'node:http'

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.end('Bye')
})

const port = 4000;

server.listen(port, ()=>{
    console.log(`Server is running at port: `,port);
})