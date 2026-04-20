var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"Cookie_task2.html"}))
app.use(express.urlencoded())
app.post("/data",(req,res)=>{
    const{name,email,msg,rating}=req.body
    const feedback={name,email,msg,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
     res.send(`<h1> SuccessFully Stored Data</h1> <a href="/details">view Feedback</a>`)
})
app.get("/details",(req,res)=>{
    var feedback=req.cookies.feedback
    if(feedback){
        res.send(`<h1>Thank You ${feedback.name}</h1>
            <h2>Your ${feedback.msg}</h2>
            <h3>Rating:${feedback.rating}</h3>
            <a href="/">Logout</a>`)
    }
    else{
        res.send(`No Feedback <a href="/">Logout</a>`)
    }
})
app.listen(7000)