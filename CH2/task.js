const shape=[{
    "name":"Circle",
    "d":8
},
{
    "name":"square",
    "s":10
}
]
var a=JSON.stringify(shape)
var fs=require("fs")
var pc=2*Math.PI*((shape[0].d)/2)
var p1=JSON.stringify(pc)
var ps=4*((shape[1].s))
var p2=JSON.stringify(ps)
fs.writeFileSync("shape.txt",a)
fs.appendFileSync("shape.txt","\nPerimeter of circle:"+p1)
fs.appendFileSync("shape.txt","\nPerimeter of square:"+p2)