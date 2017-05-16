/**
 * Created by agoidel2019 on 5/16/17.
 */
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

var PORT = 3101;

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
    res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
    res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(path + "404.html");
});

app.listen(PORT,function(){
    console.log("Listening on Port " + PORT);
});
