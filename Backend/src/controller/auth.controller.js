const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginController(req,res,){
    console.log("🔥 Login controller reached");
        try{
            const {username,password}=req.body;

        const isUserexist=await userModel.findOne({username}).select("+password")
        //ONLY RETURNING USERNAME AND EMAIL
        //TO COMPARE PASSWORD WE WRITE SELECT ("+PASSWORD")
        //RETURN PASSWORD ALSO IN USER
        if(!isUserexist){
            return res.status(404).json({
                message:"No such user exist"
            })
        }
        const passwordmatched=await bcrypt.compare(password,isUserexist.password);
        if(!passwordmatched){
            return res.status(401).json({
                message:"Invalid password"
            })
        }
        //STORED INFO OF USER WHICH WILL BE STORED IN TOKEN
        const payload={
            id:isUserexist._id,
            username:username
        }
        //USER LOGIN=>NEW TOKEN IS CREATED=>SIGNED BY JWT_SECRET
        const token=jwt.sign(payload,process.env.JWT_SECRET);
        //STORE IN COOKIE
        res.cookie('token',token);

        return res.status(201).json({
        message: "User login successfull",
        user:{
            email:isUserexist.email,
            username: isUserexist.username,
        }})
    }

        catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
      }
    };

async function signupController(req,res){
    try{
        const {username,email,password}=req.body

    //FIND THE USER
    const isUserexist=await userModel.findOne({username});
    if(isUserexist){
        return res.status(409).json({
            message:"Username already exists, try another one"
        })
    }

    // NEW USER
    const hash=await bcrypt.hash(password,10);// 10=>salt rounds
    const user=await userModel.create({
        username,
        email,
        password:hash
    });

const payload={
    id:user._id,
    username:user.username,
    email:user.email
}
//GET THE TOKEN
const token=jwt.sign(
    payload,process.env.JWT_SECRET,{
        expiresIn: "1d"
    }
)

res.cookie("token",token);

return res.status(201).json({
    message:"Sign Up Successfull",
    user:{
    username:user.username,
    email:user.email
    }
});  
 }  

catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
}
}

    module.exports={
        loginController,
        signupController
    }
