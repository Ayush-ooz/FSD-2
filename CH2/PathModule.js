var p=require("path")
var path="D:LJ/node/my.html"
var d=p.dirname(path)
var b=p.basename(path)
var e=p.extname(path)
var p1=p.parse(path)
console.log(`Directory: ${d} \nFile: ${b} \nExtension: ${e}`)