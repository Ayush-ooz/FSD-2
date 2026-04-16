//json processing

var express = require("express");
var app = express();
obj = [{ "name": "x", "age": 30 },
{ "name": "y", "age": 15 },
{ "name": "z", "age": 45 }
]
app.get("/api", (req, res) => {
    res.send(obj);
})
app.get("/api1", (req, res) => {
    res.json(obj);
})
app.get("/api2", (req, res) => {
    //if sending data through write we have to stringify it.
    res.write(JSON.stringify(obj));
    res.send();
})
app.get("/sort", (req, res) => {
    obj1 = obj.sort((a, b) => b.age - a.age);
    /*res.send(`<table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th> 
        </tr>
        
        <tr>
            <th>${obj1[0].name}</th>
            <th>${obj1[0].age}</th>
        </tr>
        <tr>
            <th>${obj1[1].name}</th>
            <th>${obj1[1].age}</th>
        </tr>
        <tr>
            <th>${obj1[2].name}</th>
            <th>${obj1[2].age}</th>
        </tr>
        </table>`);
    */

    // OR

    res.write(`<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th> 
    </tr>`);
    for (i of obj1){
        res.write(`<tr>
            <th>${i.name}</th>
            <th>${i.age}</th>
        </tr>`)
    }
    res.write("</table>")
    res.send();
})
app.listen(7005);