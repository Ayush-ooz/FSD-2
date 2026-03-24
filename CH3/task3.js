// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us” and “Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.

var http=require("http")
var fs=require("fs")
var url=require("url")
http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.end(`<h1>Welcome to Home Page</h1> <br>
                <a href="/AboutUs">About</a>
                <a href="/ContactUs">Contact</a>`)
    }
    else if(req.url==="/AboutUs"){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.write(`<h1 style="color: blue;font-weight: bold">Welcome to LJ University</h1>`)
    }
    else if(req.url==="/ContactUs"){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.write(`<h1 style="color: red;font-style: italic">Email:abc@ljinstitutes.edu.in</h1>`)
    }
    else{
           res.writeHead(404,{
            "content-type":"text/plain"
        })
        res.end("Page not Found")
    }
}).listen(8007)