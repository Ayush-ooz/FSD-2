// Write an ExpressJS REST API script to create an array of JSON objects named employee_data having properties: Emp_id Name Department Salary Experience When the user requests: /employees → It should display all employees data. /employees/:id → It should display data of the employee whose Emp_id matches the given id. Example: /employees/3 → Display data of employee with Emp_id 3.
var express=require("express")
var app=express()
var empdata=[{id:1,Name:"A",Dept:"ABC",Salary:10000,experience:2},
    {id:2,Name:"B",Dept:"XYZ",Salary:20000,experience:1},
    {id:3,Name:"A",Dept:"PQR",Salary:35000,experience:2},
    {id:4,Name:"C",Dept:"ABC",Salary:30000,experience:3}
]
app.get("/employees",(req,res)=>{
    res.send(empdata)
})
app.get("/employees/:id",(req,res)=>{
    var data=empdata.filter((o)=>o.id==req.params.id)
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send("No such student is available")
    }
})
app.listen(5000)