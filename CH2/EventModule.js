var eventemiiter=require("events")
var ee=new eventemiiter()
ee.on("start",()=>{
    console.log("First Execution")
})
ee.emit("start")


ee.on("add",(a,b)=>{
    console.log(`Addition is ${a+b}`)
})
ee.on("add",()=>{
    console.log("Done")
    ee.emit("success")
})
ee.on("success",()=>{
    console.log("Task Completed")
})
ee.emit("add",5,10)

