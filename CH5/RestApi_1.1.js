var express=require("express")
var router=express.Router()

var obj=[{name:"A",id:1,age:20,city:"Ahmedabad",branch:'CSE'},
    {name:"B",id:2,age:18,city:"Rajkot",branch:'CE'},
    {name:"C",id:3,age:21,city:"Godhra",branch:'IT'},
    {name:"A",id:4,age:20,city:"Ahmedabad",branch:'CE'},
    {name:"B",id:5,age:21,city:"Vadodra",branch:'CSE'}]
router.get("/",(req,res)=>{
    res.type("text/html")
    for(o of obj){
        res.write(`<h1>Name:${o.name}
            ID:${o.id}
            Age:${o.age}
            Branch:${o.branch}
            City:${o.city}</h1>`)
    }
    res.send()
})
router.get("/id/:id",(req,res)=>{
    var data=obj.filter((o)=>o.id==req.params.id)
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send("No such student is available")
    }
})
router.get("/branch/:branch",(req,res)=>{
    var d1=obj.filter((o)=> o.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(d1.length>0){
        res.send(d1["CSE"])
    }
    else{
        res.send("No such student is available")
    }
})
router.get("/branch/:branch/city/:city",(req,res)=>{
    var d1=obj.filter((o)=> o.branch.toLowerCase()==req.params.branch.toLowerCase()&& o.city.toLowerCase()==req.params.city.toLowerCase())
    if(d1.length>0){
        res.send(d1)
    }
    else{
        res.send("No such student is available")
    }
})
module.exports = router