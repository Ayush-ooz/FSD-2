var fs=require("fs")
//fs.mkdirSync("abc")
fs.writeFileSync("abc/temp.txt","Hello")
var r=fs.readFileSync("abc/temp.txt")
console.log(r.toString())
fs.appendFileSync("abc/temp.txt","\nHow are you")
var r1=fs.readFileSync("abc/temp.txt","utf-8")
console.log(r1)
fs.renameSync("abc/temp.txt","abc/new.txt")
fs.unlinkSync("abc/new.txt")//for deleting a file
fs.rmdirSync("abc")//directory should be empty then  it would be delete

