const User = require("../models/user");


module.exports.profile = function(req,res){

    res.end("<h1>i am from user controller</h1>");
}

module.exports.signup = function(req,res){

    var msg = req.query.msg;
    console.log(msg)

    res.render("signup",{
        msg: req.query.msg
    });

}

module.exports.login = function(req,res){

    res.render("login");
    
}


module.exports.register = function(req,res){

    var pwd = req.body.pwd;
    var cnf_pwd = req.body.cnf_pwd;

    if(pwd!=cnf_pwd){
        
        
        return res.redirect('/users/signup?msg=Passworddoesntmatch');
    }

    let find_email = User.findOne({email: {$ne: req.body.email}});

    find_email.then((value)=>{
        try{
        const new_user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.pwd
        });
        new_user.save();
        console.log("created");
        }
        catch(err){
            console.log(err);
        }
    });
    
    return res.redirect("/users/login");



}

module.exports.createSession = function(req,res){

    let find_user=User.findOne({email:req.body.email});
    find_user.then((user)=>{

        console.log(user);

        console.log(user.password,req.body.pwd);

        //handle pwd does not match
        if (user.password!= req.body.pwd){

            return res.redirect("/user/login?msg:password+incorrect");

        }
        //create session
        res.cookie("user_id",user._id);
        res.redirect('/');


    })
    .catch((err)=>{

        return res.redirect("/users/login?msg=user+not+found+signup+first");
    
    });
}