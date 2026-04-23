// •	Create index.html file page which contains form(username,password,login button). and open it on localhost. 
// •	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// •	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
// •	Jump on delete session page after clicking LOGOUT link. 
// •	Destroy the session on this page and redirect to index.html page
var express=require("express")
var s=require("express-session")
var app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"session_task.html"}))
app.use(s({secret:'123'}))
app.post("/savesession",(req,res)=>{
    req.session.uname=req.body.uname
    req.session.pass=req.body.pass
    res.redirect("fetchsession")
})
app.get("/fetchsession",(req,res)=>{
    res.send(`Welcome ${req.session.uname}! <a href="/deletesession">Logout</a>`)
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy((e)=>{
        if(e){
            res.send(e)
        }
        else{
            res.clearCookie("connect.sid")
            res.send(`Destroyed ${req.session.uname}`)
        }
    })
    res.redirect("/")
})
app.listen(8001)