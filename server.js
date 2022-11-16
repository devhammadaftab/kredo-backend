const app  = require("./app")

let port = 5000

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})