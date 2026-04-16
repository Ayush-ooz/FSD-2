var express = require("express");
var app = express();
app.get("/product/:pid/cat/:cat", (req, res) => {
    res.write(JSON.stringify(req.params));
    res.write(JSON.stringify(req.query));
    // res.send(req.params);
    // res.send(req.query);
    res.end();
})
app.listen(5000);