import express from "express"
const app=express();
const port=8001;
import sum from "./sum.js"

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});


app.get("/home",(req,res)=>{
    res.send("I am root")
})

app.get("/getSum/:a/:b",(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})