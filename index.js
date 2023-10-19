const express = require("express");
const path = require("path");
const app = express();
const port = 8888;
const cookieParser = require("cookie-parser");


app.use(express.urlencoded());
app.use(cookieParser());


//use express router


app.use("/",require("./routes"))

const db = require("./config/mongoose.js");


//set up of view engine
app.set('view engine','ejs');
app.set('views',path.join( __dirname,'views'));


app.listen(port,function(err){
    if(err){
        console.log("error");
    }
    console.log("server running")
}) 