var express = require("express");
var app = express();

var HTTP_PORT = 8000;

//server start

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"OK"})
});


app.use(function(req, res){
    res.status(404);
})