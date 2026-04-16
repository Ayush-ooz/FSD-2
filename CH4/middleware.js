
var first=(req,res,next)=>{
    console.log("First middleware")
    next()
}
var second=(req,res,next)=>{
    req.name="Dhriti"
    console.log("Second middleware")
    next()
}
var third=(req,res,next)=>{
    req.marks=25
    console.log("Third middleware")
    next()
}
app.use("/test",first,third)
app.get("/test",(req,res)=>{
    res.send("My Page")
})
app.get("/all",first,second,third,(req,res)=>{
    res.send(`<h1>Hello! ${req.name}</h1><h2>Your Marks ${req.marks}</h2>`)
})
app.listen(5001)
