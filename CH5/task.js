var express=require("express")
var app=express()
var first=(req,res,next)=>{
    if(req.query.n1>0 && req.query.n2>0){
        next()
    }
    else{
        console.log("Invalid Input")
    }
}
var second=(req,res,next)=>{
    var n1=parseInt(req.query.n1)
    var n2=parseInt(req.query.n2)
    if(req.query.opt=="add"){
        var sum=n1+n2
        res.send(`Addition is${sum}`)
    }
    else if(req.query.opt=="square"){
        var sum=n1+n2
        var sq=Math.pow(sum,2)
        res.send(`Square is ${sq}`)
    }
    else if(req.query.opt=="cube"){
        var sum=n1+n2
        var c=Math.pow(sum,3)
        res.send(`Cube is ${c}`)
    }
}
app.get("/",(req,res)=>{
        res.sendFile(__dirname)
}) 
app.get("/data",first,second,(req,res)=>{
    res.send("Invalid Operation")
})
app.listen(5000)