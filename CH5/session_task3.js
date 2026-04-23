// Write express js script to perform following tasks.
// 1.	Create one html file which contains one text field for name, email field and checkbox for subscription. Html file will be loaded on home page. Email and name fields are required fields.
// 2.	On login page welcome user and email id data should be printed.
// a.	If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.
// b.	If user has not opted for the subscription then “You can subscribe to get daily updates” message will be printed and “subscribe” link will be displayed under the message.
// c.	If user clicks subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.
//          Use concept of the middleware and you can use any of http methods(get/post).

var express=require("express")
var app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"session_task3.html"}))
var mw1=(req,res,next)=>{
    res.type("text/html")
    res.write(`<h2> Welcome ${req.body.uname}!</h2>
        <h3>Email is ${req.body.email}</h3>`)
        next()
}
app.post("/login",mw1,(req,res)=>{
    if(req.body.sub==="subscribe"){
        res.write(`Thank you <a href="/">Logout</a>`)
    }
    else{
        res.write(`You can subscribe to get daily updates <a href="/subscribe">Subscribe</a>`)
    }
    res.send()
})
app.get("/subscribe",(req,res)=>{
    res.send(`Thank you for the subscription <a href="/">Logout</a>`)
})
app.listen(5000)