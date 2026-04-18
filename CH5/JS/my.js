var express=require("express")
var app=express()
var path=require("path")
var hp=path.join(__dirname,"../HTML")
var cp=path.join(__dirname,"../CSS")
var ip=path.join(__dirname,"../images")
app.use(express.static(ip))
app.use(express.static(cp))
app.use(express.static(hp,{index:"my.html"}))
app.use(express.urlencoded())
app.post("/data",(req,res)=>{
    res.type("text/html")
    res.write(`<h1>Welcome ${req.body.uname}</h1>`)
    var m=(req.body.msg).split(".")
    for(i of m){
        res.write(i+"<br>")
    }
    res.write(`Click Here to see number of vowels in message <a href="/message?m=${req.body.msg}">Vowels
        </a>`)
    res.send()
})
app.get("/message",(req,res)=>{
    var m1=req.query.m
    var c=0
    for(i of m1.toLowerCase()){
        if("aeiou".includes(i)){
            c++
        }
    }
    res.send(`<h1>Vowels are ${c}</h1>`)
})
app.listen(7000)