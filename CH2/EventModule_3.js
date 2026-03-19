var fs = require("fs")
var eventemiiter=require("events")
var ee=new eventemiiter()
ee.on("createFolder",()=>{
    if(!fs.existsSync("xyz")){
        fs.mkdirSync("xyz")
    }
    else{
        console.log("Already Exists")
    }
    ee.emit("write")
})
ee.on("write",()=>{
    fs.writeFileSync("pqr.txt","Hello")
    console.log("Written")
    ee.emit("append")
})
ee.on("append",()=>{
    fs.appendFileSync("pqr.txt","World")
    console.log("Appended")
    ee.emit("read")
})