const expr=require("express")
var app=expr()
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/mdb2")
const myschema=new mg.Schema({
    username:{type:String,required:true,trim:true},
    password:String,
    email:{required:true,unique:true,type:String},
    gender:String,
    city:{type:String,required:true,}
})
const mymodel=new mg.model("user",myschema)
app.use(expr.static(__dirname,{index:"e1.html"}))
app.get("/data",async(req,res)=>{
    const mydata=new mymodel({
        username:req.query.uname,
        password:req.query.pass
    })
    await mydata.save()
    res.send("Thank You")
})
app.listen(7001)