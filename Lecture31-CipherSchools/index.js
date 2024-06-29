const http= require("http");

const server= http.createServer((req,res)=>{
    res.write("This is first res")
    res.end();
});

server.listen(2000, ()=>{
    console.log("Server running on 2000");
})