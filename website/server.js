var express = require("express");
const db = require("./database");
var app = express();

var HTTP_PORT = 8000;

//server start

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"OK"})
});


//returns a random poem
app.get("/poem/random", (req, res, next) => {
    var sql = "SELECT * FROM poems ORDER BY RANDOM() LIMIT 1"
    var params = []
    db.get(sql, params, (err, row) =>{
        if(err){
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"succes",
            "data":roww
        })
    })
});

//returns all poems
app.get("/poem/all", (req, res, next) => {
    var sql = "SELECT * FROM poems"
    var params = []
    db.all(sql, params , (err, rows) => {
        if(err){
            res.sendStatus(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    })
});

//return a poem by id
app.get("/poem/:id", (req, res, next) =>{
    var sql = "SELECT * FROM poems WHERE id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) =>{
        if(err){
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":row
        })
    });
});

//remove a poem by id
app.delete("/poem/delete:id", (req, res, next) =>{
    //for admin view only
});

//adds a poem
app.post("/poem/add", (req, res , next) =>{
    var sql = "INSERT INTO poems (author, poem) VALUES (?, ?)"

    db.run(sql, params, function (err, result){
        if(err){
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({})
    })
});

//displays all authors
app.get("/author/all", (req, res, next) => {

});



app.use(function(req, res){
    res.status(404);
})