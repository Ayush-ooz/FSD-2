var fs=require("fs")
fs.writeFile("help.txt","You are creating the file",(e)=>{
    if(e) throw e
    fs.appendFile("help.txt","\nYou are appending the data",(e)=>{
    if(e) throw e
    fs.readFile("help.txt","utf-8",(e,data)=>{
    if(e) throw e
    console.log(data)
    fs.copyFile("help.txt","paste.txt",(e)=>{
        if(e) throw e
        else{
            fs.unlink("help.txt",(e)=>{
                if(e) throw e
                console.log("Task ended")
            })
        }
    })
})
})
})
