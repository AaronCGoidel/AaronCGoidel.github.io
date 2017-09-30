var express = require("express");
var app = express();
var router = express.Router();

var config = require(__dirname + '/config.js');
app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || config.express.port;

app.set("view engine", "pug");

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res){
    res.render("index");
});

app.use("/",router);

app.use("*",function(req,res){
    res.status("404").render("404");
});

app.listen(PORT,function(){
    console.log("Listening on Port " + PORT);
});