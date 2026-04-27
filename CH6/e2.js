var express=require("express")
var app=express()
var path=require("path")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("e2",{college:"LJU"})
})
app.listen(7006)