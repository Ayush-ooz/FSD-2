// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” page in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.

var fs=require("fs")
var url=require("url")
var http=require("http")
var add="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
var p=url.parse(add,true)
var filename=p.pathname
var content=`${p.query.c1}! \n${p.query.c3} ${p.query.c2} \n${p.hash}`
fs.writeFileSync("."+filename,content)
http.createServer((req,res)=>{
    if(req.url==="/home"){
        var r=fs.readFileSync("."+filename,"utf-8")
        res.writeHead(200,{"content-type":"text/html"})
        res.end(`<h1 style="color:red"><pre>${r}</pre></h1>`)
    }
    else if(req.url==="/about"){
        var a=fs.readFileSync("image.jpg")
        res.writeHead(200,{"content-type":"image/jpg"})
        res.end(a)
    }
    else if(req.url==="/api"){
        var d={"name":"rahul","course":"NodeJS","Enrolled":"yes"}
         res.writeHead(200,{"content-type":"application/json"})
         res.end(JSON.stringify(d))
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("Page Not Found")
    }
}).listen(7005)
process.noDeprecation=true