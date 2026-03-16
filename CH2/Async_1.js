var fs=require("fs")
fs.mkdir("afs",(e)=>{
    if(e) throw e;
    console.log("Folder created")
})
fs.writeFile("afs/my.txt","Asynchronous Task",(e)=>{
    if(e) throw e
    console.log("Written")
})
fs.appendFile("afs/my.txt","Hi",(e)=>{
    if(e) throw e
    console.log("Appended")
})
fs.readFile("afs/my.txt","utf-8",(e,data)=>{
    if(e) throw e
    console.log(data)
})
fs.rename("afs/my.txt","afs/new.txt",(e)=>{
    if(e) throw e
    console.log("Renamed")
})
// fs.unlink("afs/my.txt",(e)=>{
//     if(e) console.log("No such File Found"+e)
//     console.log("deleted")
// })
fs.copyFile("afs/new.txt","mynew.txt",(e)=>{
    if(e) throw e
    console.log("Content copied")
})
fs.rmdir("afs",(e)=>{
    if(e) throw e
    console.log("folder deleted")
})