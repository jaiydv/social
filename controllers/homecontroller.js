const db = require("../config/mongoose");
const User = require("../models/user");


// app.use(express.static("assests"))

module.exports.home = function(req,res){

    console.log(req.cookies);

    return res.render("home",{
        title: "home"
    });
}

module.exports.signup = function(req,res){
   
    return res.render("signup");

}


module.exports.create = function(req,res){

    console.log(req.body);
    
    const new_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.pwd  
    })

    new_user.save();

    return res.redirect("/");

}