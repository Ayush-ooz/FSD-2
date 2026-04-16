var express=require("express")
var app=express()
var path=require("path")
//app.use(express.static(__dirname))  // for all files in CH5
//app.use(express.static("Frontend",{index:"1.html"}))
var sp=path.join(__dirname,"../Frontend")
app.use(express.static(sp,{index:"1.html"}))
app.listen(5005)