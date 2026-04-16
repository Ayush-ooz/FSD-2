var express=require("express")
var app=express()
//app.use(express.static(__dirname))  // for all files in CH5
app.use(express.static("Frontend",{index:"1.html"}))
app.listen(5005)