const http = require("http")
const fs= require('fs')

const port =80;
const home =fs.readFileSync('./index.html')
const about =fs.readFileSync('./about.html')

const server =http.createServer((req,res)=>{
    url=req.url

    if(url=='/'){
        res.end(home)
    }
    else if(url=='/about'){
        res.end(about)
    }
    else{
        res.end("404 Server not found")
    }
})

server.listen(port ,(res,req)=>{
    console.log(`server running at :  ${port}`)
})