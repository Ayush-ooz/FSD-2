// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit 
// button using get method.
// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)

var express =require("express")
var app=express()
app.get("/",(req,res)=>{
     res.send(`<form action="/login" method="get">
        <input type="text" name="un"/>
        <input type="password" name="pass"/>
        <textarea name="tx"></textarea>
        <button type="submit">submit</button>
        </form> `)
})
app.get("/login",(req,res)=>{
    res.send(`<h1>Name:${req.query.un}</h1>\n <h1>Password:${req.query.pass}\n <h1>Message:${req.query.tx}\n <a href="/message">show vowel</a>`)
})
app.get("/message",(req,res)=>{
    var c=0
    
})
