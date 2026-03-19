var eventemiiter=require("events")
var ee=new eventemiiter()
var fun1=(m)=>{
    console.log(`fun1 msg:${m}`)
}
var fun2=(m)=>{
    console.log(`fun2 msg:${m}`)
}
ee.on("e1",fun1)
ee.on("e1",fun2)
ee.on("e2",fun1)
ee.on("e2",fun2)
var c1=ee.listenerCount("e1")
console.log(c1)
ee.removeListener("e2",fun1)
 ee.removeAllListeners("e1")
var c=ee.listenerCount("e1")
console.log(`e1 event has ${c} listeners`)
ee.emit("e1","Hello Students")
ee.emit("e2","Events Module")