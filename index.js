const express=require("express")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({
        msg:"working"
    })
})

app.get("/test",(req,res)=>{
    res.send("testing")
})
app.post("/",(req,res)=>{
    res.send(req.body)
})
app.listen(8090,()=>{
    console.log("running");
    
})