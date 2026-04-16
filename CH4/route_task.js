var express = require("express");
var app = express();
app.get("/user/:user/:id", (req, res) => {
    res.write(`welcome: ${JSON.stringify(req.params.user)}\n`);
    let age = parseInt(JSON.stringify(req.query.age));
    if (age >= 18) {
        res.write(`you are a major\n`);
    }
    else {
        res.write(`you are a minor\n`);
    }
    res.write(`your gender: ${JSON.stringify(req.query.gender)}\n`)
    // res.write(`your age: ${JSON.stringify(req.query.age)}`);
    res.send();
})
app.listen(5000);