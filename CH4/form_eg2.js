var express = require('express')
var app = express()

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send(`<form action="/calc" method = "post">
        <input type = "text" name = "n1"/>
        <input type = "text" name = "n2"/>
        <button name='sum'>addition</button>
        <button name='sub'>substraction</button>
        </form>`)
})
app.post("/calc", (req, res) => {
    const a = req.query.n1;
    const b = req.query.n2;
    console.log(b);
})
app.listen(5000)