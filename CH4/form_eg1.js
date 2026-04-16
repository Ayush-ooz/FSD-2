var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.send(`<form action="/data" method="get">
        <input type="text" name="un"/>
<input type="password" name="pass"/>
        <button type="submit">submit</button>
        </form> `);
})
app.get("/data", (req, res) => {
    const b = req.query;
    console.log(b)
    const n = req.query.un;
    const p = req.query.pass;
    res.send(`<h3>Welcome ${n}</h3>\n<h3>password: ${p}</h3>`)
})
app.listen(7000);